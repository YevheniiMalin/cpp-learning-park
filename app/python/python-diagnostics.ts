import type { Language } from "../content";
import type { PythonTask } from "./python-tasks";

const messages: Record<Language, {
  title: string; line: string; misspelled: string; colon: string; indentation: string; parentheses: string; brackets: string; braces: string;
  quotes: string; comparison: string; boolean: string; expected: string;
}> = {
  en: { title: "What exactly to fix:", line: "Line {line}, character {column}", misspelled: "`{wrong}` appears misspelled. Write `{right}`.", colon: "Add a colon : at the end of this block header.", indentation: "Indent the block below this line with four spaces.", parentheses: "The number of opening and closing parentheses does not match.", brackets: "The number of opening and closing square brackets does not match.", braces: "The number of opening and closing braces does not match.", quotes: "A text string has an opening quote without a matching closing quote.", comparison: "Inside a condition, use == to compare values. A single = assigns a value.", boolean: "Python Boolean values start with capitals: True and False.", expected: "Check requirement {number}. A suitable code form is shown in the hint." },
  ru: { title: "Что именно нужно исправить:", line: "Строка {line}, символ {column}", misspelled: "слово `{wrong}` написано неправильно. Напиши `{right}`.", colon: "Добавь двоеточие : в конце заголовка этого блока.", indentation: "Сделай отступ в четыре пробела у команд внутри блока.", parentheses: "Количество открывающих и закрывающих круглых скобок не совпадает.", brackets: "Количество открывающих и закрывающих квадратных скобок не совпадает.", braces: "Количество открывающих и закрывающих фигурных скобок не совпадает.", quotes: "У текстовой строки есть открывающая кавычка, но нет парной закрывающей.", comparison: "Внутри условия сравнивай значения через ==. Один знак = выполняет присваивание.", boolean: "Логические значения Python начинаются с заглавной буквы: True и False.", expected: "Проверь требование №{number}. Подходящая форма кода показана в подсказке." },
  uk: { title: "Що саме потрібно виправити:", line: "Рядок {line}, символ {column}", misspelled: "слово `{wrong}` написано неправильно. Напиши `{right}`.", colon: "Додай двокрапку : наприкінці заголовка цього блоку.", indentation: "Зроби відступ у чотири пробіли для команд усередині блоку.", parentheses: "Кількість відкривальних і закривальних круглих дужок не збігається.", brackets: "Кількість відкривальних і закривальних квадратних дужок не збігається.", braces: "Кількість відкривальних і закривальних фігурних дужок не збігається.", quotes: "Текстовий рядок має відкривальну лапку без парної закривальної.", comparison: "В умові порівнюй значення через ==. Один знак = надає значення.", boolean: "Логічні значення Python починаються з великої літери: True і False.", expected: "Перевір вимогу №{number}. Відповідну форму коду показано в підказці." },
  fi: { title: "Korjaa tarkalleen nämä kohdat:", line: "Rivi {line}, merkki {column}", misspelled: "`{wrong}` näyttää kirjoitusvirheeltä. Kirjoita `{right}`.", colon: "Lisää kaksoispiste : tämän lohko-otsikon loppuun.", indentation: "Sisennä tämän rivin alla oleva lohko neljällä välilyönnillä.", parentheses: "Avaavien ja sulkevien kaarisulkeiden määrä ei täsmää.", brackets: "Avaavien ja sulkevien hakasulkeiden määrä ei täsmää.", braces: "Avaavien ja sulkevien aaltosulkeiden määrä ei täsmää.", quotes: "Merkkijonon avaavalta lainausmerkiltä puuttuu pari.", comparison: "Vertaa ehtolauseessa arvoja operaattorilla ==. Yksi = antaa arvon.", boolean: "Pythonin totuusarvot alkavat isolla kirjaimella: True ja False.", expected: "Tarkista vaatimus {number}. Sopiva koodimuoto näkyy vihjeessä." },
  th: { title: "สิ่งที่ต้องแก้ไข:", line: "บรรทัด {line} อักขระ {column}", misspelled: "`{wrong}` น่าจะสะกดผิด ให้เขียน `{right}`", colon: "เติมโคลอน : ท้ายหัวบล็อกนี้", indentation: "เยื้องคำสั่งในบล็อกนี้ด้วยช่องว่างสี่ช่อง", parentheses: "จำนวนวงเล็บเปิดและปิดไม่เท่ากัน", brackets: "จำนวนวงเล็บเหลี่ยมเปิดและปิดไม่เท่ากัน", braces: "จำนวนวงเล็บปีกกาเปิดและปิดไม่เท่ากัน", quotes: "สตริงข้อความมีเครื่องหมายคำพูดเปิดแต่ไม่มีคู่ปิด", comparison: "ในเงื่อนไขให้ใช้ == เพื่อเปรียบเทียบ ส่วน = ตัวเดียวใช้กำหนดค่า", boolean: "ค่าบูลีน Python เริ่มด้วยตัวพิมพ์ใหญ่: True และ False", expected: "ตรวจข้อกำหนดที่ {number} รูปแบบโค้ดที่เหมาะสมอยู่ในคำใบ้" },
};

const words = ["print", "range", "return", "append", "class", "self", "while", "else", "True", "False", "continue", "def", "len", "sum", "type", "int"];

const editDistance = (a: string, b: string) => {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const previous = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = previous;
    }
  }
  return row[b.length];
};

const fill = (text: string, values: Record<string, string | number>) => Object.entries(values).reduce((value, [key, replacement]) => value.replaceAll(`{${key}}`, String(replacement)), text);
const location = (language: Language, line: number, column: number) => fill(messages[language].line, { line, column });
const count = (source: string, character: string) => [...source].filter(value => value === character).length;
const withoutStrings = (source: string) => source.replace(/(?:"(?:\\.|[^"\\])*")|(?:'(?:\\.|[^'\\])*')/g, value => " ".repeat(value.length)).replace(/#.*$/gm, value => " ".repeat(value.length));

export const buildPythonFailureOutput = (code: string, checks: boolean[], task: PythonTask, language: Language) => {
  const copy = messages[language];
  const issues: string[] = [];
  const source = withoutStrings(code);

  code.split("\n").forEach((lineText, index, allLines) => {
    const lineNumber = index + 1;
    const stripped = lineText.trim();
    const header = /^(?:if|elif|else|for|while|def|class)\b/.test(stripped);
    if (header && !stripped.endsWith(":")) issues.push(`${location(language, lineNumber, Math.max(1, lineText.length))}: ${copy.colon}`);
    if (header && stripped.endsWith(":")) {
      const next = allLines.slice(index + 1).find(line => line.trim() && !line.trim().startsWith("#"));
      if (next && next.length - next.trimStart().length <= lineText.length - lineText.trimStart().length) issues.push(`${location(language, lineNumber + 1, 1)}: ${copy.indentation}`);
    }
    if (/^\s*(?:if|elif|while)\b[^:\n]*(?<![<>=!])=(?!=)/.test(lineText)) issues.push(`${location(language, lineNumber, Math.max(1, lineText.indexOf("=") + 1))}: ${copy.comparison}`);
    if (/\b(?:true|false)\b/.test(lineText)) issues.push(`${location(language, lineNumber, Math.max(1, lineText.search(/\b(?:true|false)\b/) + 1))}: ${copy.boolean}`);
    const cleanLine = withoutStrings(lineText);
    for (const match of cleanLine.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)) {
      const actual = match[0];
      if (words.includes(actual) || actual.length < 3) continue;
      const nearest = words.map(expected => ({ expected, distance: editDistance(actual.toLowerCase(), expected.toLowerCase()) })).sort((a, b) => a.distance - b.distance)[0];
      if (nearest && nearest.distance > 0 && nearest.distance <= 1) issues.push(`${location(language, lineNumber, (match.index ?? 0) + 1)}: ${fill(copy.misspelled, { wrong: actual, right: nearest.expected })}`);
    }
    const quotes = [...lineText].filter((character, position) => (character === "\"" || character === "'") && lineText[position - 1] !== "\\").length;
    if (quotes % 2 !== 0) issues.push(`${location(language, lineNumber, 1)}: ${copy.quotes}`);
  });

  if (count(source, "(") !== count(source, ")")) issues.push(copy.parentheses);
  if (count(source, "[") !== count(source, "]")) issues.push(copy.brackets);
  if (count(source, "{") !== count(source, "}")) issues.push(copy.braces);
  checks.forEach((passed, index) => { if (!passed && issues.length < 4) issues.push(fill(copy.expected, { number: index + 1 })); });
  return `${copy.title}\n${[...new Set(issues)].map(issue => `• ${issue}`).join("\n")}`;
};
