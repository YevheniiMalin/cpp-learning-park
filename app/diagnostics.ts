export type DiagnosticCopy = {
  diagnosticTitle: string;
  diagnosticExpected: string;
  diagnosticInsertion: string;
  diagnosticQuotes: string;
  diagnosticBraces: string;
  diagnosticParentheses: string;
  diagnosticSemicolon: string;
  diagnosticLocation: string;
  diagnosticMisspelled: string;
  diagnosticNamespace: string;
  diagnosticTextQuotes: string;
};

type DiagnosticInput = {
  code: string;
  checks: boolean[];
  checkHints: string[];
  starter: string;
  solutionHint: string;
  copy: DiagnosticCopy;
};

const cppWords = new Set([
  "alignas", "alignof", "and", "asm", "auto", "bool", "break", "case", "catch", "char", "class", "const", "constexpr", "continue",
  "default", "delete", "do", "double", "else", "endl", "enum", "explicit", "false", "float", "for", "friend", "if", "include",
  "inline", "int", "iostream", "long", "main", "namespace", "new", "nullptr", "operator", "private", "protected", "public", "return",
  "short", "signed", "sizeof", "static", "std", "string", "struct", "switch", "template", "this", "throw", "true", "try", "typedef",
  "typename", "union", "unsigned", "using", "virtual", "void", "volatile", "while", "cout",
]);

const maskNoise = (source: string) => source
  .replace(/\/\/.*$/gm, (value) => " ".repeat(value.length))
  .replace(/"(?:\\.|[^"\\])*"/g, (value) => " ".repeat(value.length))
  .replace(/'(?:\\.|[^'\\])*'/g, (value) => " ".repeat(value.length));

const editDistance = (left: string, right: string) => {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    let diagonal = row[0];
    row[0] = leftIndex;
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const previous = row[rightIndex];
      row[rightIndex] = Math.min(
        row[rightIndex] + 1,
        row[rightIndex - 1] + 1,
        diagonal + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1),
      );
      diagonal = previous;
    }
  }
  return row[right.length];
};

const fill = (template: string, values: Record<string, string | number>) => Object.entries(values)
  .reduce((text, [key, value]) => text.replaceAll(`{${key}}`, String(value)), template);

const locationText = (copy: DiagnosticCopy, line: number, column: number) => fill(copy.diagnosticLocation, { line, column });

export const buildFailureOutput = ({ code, checks, checkHints, starter, solutionHint, copy }: DiagnosticInput) => {
  const issues: string[] = [];
  const explainedTargets = new Set<string>();
  const expectedSource = `${starter}\n${solutionHint}\n${checkHints.join("\n")}`;
  const expectedCode = maskNoise(expectedSource);
  const exactExpectedWords = new Set(expectedCode.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) || []);
  const variantsByLower = new Map<string, Set<string>>();
  exactExpectedWords.forEach((word) => {
    const lower = word.toLowerCase();
    if (!variantsByLower.has(lower)) variantsByLower.set(lower, new Set());
    variantsByLower.get(lower)?.add(word);
  });
  const fuzzyCandidates = [...exactExpectedWords].filter((word) => word.length >= 4 || cppWords.has(word.toLowerCase()));
  const expectedQualified = [...expectedSource.matchAll(/\bstd\s*::\s*([A-Za-z_][A-Za-z0-9_]*)/g)].map((match) => match[1]);
  const handledPositions = new Set<string>();

  const addMisspelling = (wrong: string, right: string, line: number, column: number) => {
    const location = locationText(copy, line, column);
    issues.push(`${location}: ${fill(copy.diagnosticMisspelled, { wrong, right })}`);
    explainedTargets.add(right);
    handledPositions.add(`${line}:${column}`);
  };

  code.split("\n").forEach((lineText, lineIndex) => {
    const lineNumber = lineIndex + 1;
    const namespaceMatch = /\bstd\s*:(?!:)|\bstd\s+(?=cout|string|endl)/.exec(lineText);
    if (namespaceMatch) {
      const column = (namespaceMatch.index ?? 0) + 1;
      issues.push(`${locationText(copy, lineNumber, column)}: ${copy.diagnosticNamespace}`);
      explainedTargets.add("std::");
    }

    for (const match of lineText.matchAll(/\bstd\s*::\s*([A-Za-z_][A-Za-z0-9_]*)/g)) {
      const actual = match[1];
      if (expectedQualified.includes(actual)) continue;
      const ranked = expectedQualified
        .map((expected) => ({ expected, distance: editDistance(actual.toLowerCase(), expected.toLowerCase()) }))
        .sort((first, second) => first.distance - second.distance);
      if (ranked[0] && ranked[0].distance <= Math.max(1, Math.floor(ranked[0].expected.length / 3))) {
        const column = (match.index ?? 0) + match[0].lastIndexOf(actual) + 1;
        addMisspelling(actual, ranked[0].expected, lineNumber, column);
      }
    }

    const cleanLine = maskNoise(lineText);
    for (const match of cleanLine.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)) {
      const actual = match[0];
      const column = (match.index ?? 0) + 1;
      if (handledPositions.has(`${lineNumber}:${column}`) || exactExpectedWords.has(actual)) continue;
      const caseVariants = variantsByLower.get(actual.toLowerCase());
      if (caseVariants?.size === 1) {
        addMisspelling(actual, [...caseVariants][0], lineNumber, column);
        continue;
      }
      if (cppWords.has(actual.toLowerCase())) continue;
      const ranked = fuzzyCandidates
        .map((expected) => ({ expected, distance: editDistance(actual.toLowerCase(), expected.toLowerCase()) }))
        .filter(({ expected }) => expected[0]?.toLowerCase() === actual[0]?.toLowerCase())
        .sort((first, second) => first.distance - second.distance || first.expected.length - second.expected.length);
      const nearest = ranked[0];
      const limit = nearest && nearest.expected.length >= 5 ? 2 : 1;
      if (nearest && nearest.distance > 0 && nearest.distance <= limit) addMisspelling(actual, nearest.expected, lineNumber, column);
    }

    const coutMatch = /std::cout\b(?!\s*<<)/.exec(lineText);
    if (coutMatch) {
      issues.push(`${locationText(copy, lineNumber, (coutMatch.index ?? 0) + 1)}: ${copy.diagnosticInsertion}`);
      explainedTargets.add("std::cout");
    }

    const quoteCount = [...lineText].reduce((count, character, index) => count + (character === '"' && lineText[index - 1] !== "\\" ? 1 : 0), 0);
    if (quoteCount % 2 !== 0) {
      issues.push(`${locationText(copy, lineNumber, Math.max(1, lineText.indexOf('"') + 1))}: ${copy.diagnosticQuotes}`);
      explainedTargets.add('"');
    }

    const singleQuotedText = /'[^'\n]{2,}'/.exec(lineText);
    if (singleQuotedText) {
      issues.push(`${locationText(copy, lineNumber, (singleQuotedText.index ?? 0) + 1)}: ${copy.diagnosticTextQuotes}`);
      explainedTargets.add('"');
    }

    const withoutComment = lineText.replace(/\/\/.*$/, "");
    const coutIndex = withoutComment.indexOf("std::cout");
    if (coutIndex >= 0 && !withoutComment.slice(coutIndex).includes(";")) {
      issues.push(`${locationText(copy, lineNumber, coutIndex + 1)}: ${copy.diagnosticSemicolon}`);
      explainedTargets.add("std::cout");
    }
  });

  const structure = maskNoise(code);
  if ((structure.match(/\{/g) || []).length !== (structure.match(/\}/g) || []).length) {
    issues.push(copy.diagnosticBraces);
    explainedTargets.add("{");
  }
  if ((structure.match(/\(/g) || []).length !== (structure.match(/\)/g) || []).length) {
    issues.push(copy.diagnosticParentheses);
    explainedTargets.add("(");
  }

  checks.forEach((passed, index) => {
    if (passed) return;
    const expected = checkHints[index];
    const alreadyExplained = [...explainedTargets].some((target) => expected.toLowerCase().includes(target.toLowerCase()));
    if (!alreadyExplained) issues.push(`${copy.diagnosticExpected}: ${expected}`);
  });

  return `${copy.diagnosticTitle}\n${[...new Set(issues)].map((issue) => `• ${issue}`).join("\n")}`;
};
