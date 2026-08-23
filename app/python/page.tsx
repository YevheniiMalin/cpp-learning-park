"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { academyUi, buildPythonInstruction, languageOptions, pythonConceptExplanation, pythonLessonGuides as lessonGuides, pythonLessons as lessonText, pythonUi as ui, type Language } from "./python-content";
import { buildPythonFailureOutput } from "./python-diagnostics";
import { AccountButton } from "../account-button";
import { useCloudProgress } from "../cloud-progress";
import { allPythonTasks as allTasks, pythonTaskGroups as taskGroups } from "./python-tasks";

const pipelineMeta = [
  { ext: ".py", color: "#ffd75e" },
  { ext: "name", color: "#55cbd3" },
  { ext: "syntax", color: "#ef7c65" },
  { ext: ".pyc", color: "#8aa7ff" },
  { ext: ">>>", color: "#a9df8d" },
];

const stationTags = ["print", "=", "for", "def", "[]", "class"];

function InlineCode({ text }: { text: string }) {
  return <>{text.split(/(`[^`]+`)/g).map((part, index) => part.startsWith("`") && part.endsWith("`")
    ? <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>
    : part)}</>;
}

function ParkCanvas({ running, speed, progress, label }: { running: boolean; speed: number; progress: number; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ running, speed, progress });

  useEffect(() => {
    stateRef.current = { running, speed, progress };
  }, [running, speed, progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let rideTime = progress;
    let raf = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, rect.width * ratio);
      canvas.height = Math.max(1, rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const polygon = (points: [number, number][], fill: string) => {
      context.beginPath();
      points.forEach(([x, y], index) => { if (index) context.lineTo(x, y); else context.moveTo(x, y); });
      context.closePath();
      context.fillStyle = fill;
      context.fill();
    };
    const tree = (x: number, y: number, scale: number) => {
      polygon([[x - 4 * scale, y], [x + 4 * scale, y], [x + 2 * scale, y - 19 * scale], [x - 2 * scale, y - 19 * scale]], "#433d42");
      polygon([[x, y - 42 * scale], [x - 17 * scale, y - 13 * scale], [x + 16 * scale, y - 12 * scale]], "#1f8b78");
      polygon([[x, y - 52 * scale], [x - 13 * scale, y - 27 * scale], [x + 13 * scale, y - 26 * scale]], "#36ad84");
    };
    const draw = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / ratio;
      const h = canvas.height / ratio;
      const state = stateRef.current;
      if (state.running && !reducedMotion) rideTime += 0.00135 * state.speed;
      else rideTime += (state.progress - rideTime) * 0.035;
      const t = ((rideTime % 1) + 1) % 1;
      const sky = context.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, "#172650");
      sky.addColorStop(.55, "#284f72");
      sky.addColorStop(1, "#ef9c70");
      context.fillStyle = sky;
      context.fillRect(0, 0, w, h);

      context.globalAlpha = .2;
      for (let i = 0; i < 16; i++) {
        const x = (i * 89 + frame * .05) % (w + 80) - 40;
        const y = 30 + ((i * 47) % Math.max(60, h * .38));
        polygon([[x, y], [x + 3, y + 7], [x + 10, y + 10], [x + 4, y + 13], [x, y + 21], [x - 3, y + 13], [x - 10, y + 10], [x - 3, y + 7]], "#fff9d1");
      }
      context.globalAlpha = 1;
      context.beginPath();
      context.arc(w * .75, h * .25, Math.min(34, w * .055), 0, Math.PI * 2);
      context.fillStyle = "#ffd779";
      context.fill();
      polygon([[0, h * .58], [w * .2, h * .34], [w * .42, h * .58]], "#375d6c");
      polygon([[w * .21, h * .35], [w * .31, h * .47], [w * .42, h * .58]], "#294d62");
      polygon([[w * .34, h * .59], [w * .64, h * .31], [w, h * .58]], "#31596a");
      polygon([[w * .64, h * .31], [w * .78, h * .45], [w, h * .58]], "#23495e");
      polygon([[0, h * .57], [w * .32, h * .49], [w * .55, h * .62], [w, h * .48], [w, h], [0, h]], "#2a896f");
      polygon([[0, h * .7], [w * .3, h * .55], [w * .57, h * .67], [w, h * .55], [w, h], [0, h]], "#20745f");
      [0.08, .17, .63, .81, .91].forEach((position, index) => tree(w * position, h * (.76 + (index % 2) * .08), Math.max(.7, w / 680)));

      const track = (value: number) => ({
        x: -30 + value * (w + 60),
        y: h * .57 - Math.sin(value * Math.PI * 2.15 - .6) * h * .16 - Math.sin(value * Math.PI * 4.2) * h * .035,
      });
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      for (let i = 0; i <= 90; i++) {
        const point = track(i / 90);
        if (i) context.lineTo(point.x, point.y); else context.moveTo(point.x, point.y);
      }
      context.strokeStyle = "rgba(17,25,46,.72)";
      context.lineWidth = 10;
      context.stroke();
      context.strokeStyle = "#83dbd2";
      context.lineWidth = 4;
      context.stroke();
      for (let i = 8; i < 84; i += 10) {
        const point = track(i / 90);
        context.strokeStyle = "rgba(12,37,44,.62)";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(point.x, point.y + 4);
        context.lineTo(point.x, h * .78);
        context.stroke();
      }
      [0, -.026, -.052].forEach((offset, index) => {
        const point = track((t + offset + 1) % 1);
        const next = track((t + offset + .004 + 1) % 1);
        context.save();
        context.translate(point.x, point.y - 9);
        context.rotate(Math.atan2(next.y - point.y, next.x - point.x));
        polygon([[-13, -8], [10, -8], [14, 7], [-10, 7]], index ? "#ffc95d" : "#ff8b5f");
        polygon([[-13, -8], [-6, -14], [8, -14], [10, -8]], index ? "#ffe29a" : "#ffb477");
        context.restore();
      });
      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className="park-canvas" aria-label={label} />;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [activeStation, setActiveStation] = useState(0);
  const [activeTask, setActiveTask] = useState(0);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [codes, setCodes] = useState(() => allTasks.map((exercise) => exercise.starter));
  const [results, setResults] = useState<Record<number, boolean[]>>({});
  const [completed, setCompleted] = useState<number[]>([]);
  const [hintOpen, setHintOpen] = useState(false);
  const [resetTarget, setResetTarget] = useState<"all" | number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const copy = ui[language];
  const academy = academyUi[language];
  const lessons = lessonText[language];
  const lesson = lessons[activeStation];
  const guide = lessonGuides[language][activeStation];
  const taskIndex = activeStation * 10 + activeTask;
  const currentTask = taskGroups[activeStation][activeTask];
  const currentResult = results[taskIndex];
  const currentPassed = completed.includes(taskIndex);
  const stationCompleted = (station: number) => completed.filter((index) => Math.floor(index / 10) === station).length;
  const failureOutput = currentResult && !currentPassed
    ? buildPythonFailureOutput(codes[taskIndex], currentResult, currentTask, language)
    : academy.outputFailed;

  useCloudProgress({
    course: "python",
    loaded,
    completed,
    codes,
    starters: allTasks.map((exercise) => exercise.starter),
    activeStation,
    activeTask,
    setCompleted,
    setCodes,
    setActiveStation,
    setActiveTask,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLanguage = (window.localStorage.getItem("learning-park-language") || window.localStorage.getItem("python-park-language")) as Language | null;
      const savedCodes = window.localStorage.getItem("python-park-codes-60");
      const savedCompleted = window.localStorage.getItem("python-park-completed-60");
      if (savedLanguage && languageOptions.some((option) => option.code === savedLanguage)) setLanguage(savedLanguage);
      if (savedCodes) {
        try {
          const parsed = JSON.parse(savedCodes);
          if (Array.isArray(parsed) && parsed.length === allTasks.length) setCodes(parsed);
        } catch { /* Keep starter code. */ }
      }
      if (savedCompleted) {
        try {
          const parsed = JSON.parse(savedCompleted);
          if (Array.isArray(parsed)) setCompleted(parsed.filter((value) => Number.isInteger(value) && value >= 0 && value < allTasks.length));
        } catch { /* Keep empty progress. */ }
      }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "uk" ? "uk" : language;
    if (loaded) {
      window.localStorage.setItem("python-park-language", language);
      window.localStorage.setItem("learning-park-language", language);
    }
  }, [language, loaded]);

  useEffect(() => {
    if (loaded) window.localStorage.setItem("python-park-codes-60", JSON.stringify(codes));
  }, [codes, loaded]);

  useEffect(() => {
    if (loaded) window.localStorage.setItem("python-park-completed-60", JSON.stringify(completed));
  }, [completed, loaded]);

  useEffect(() => {
    if (resetTarget === null) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResetTarget(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [resetTarget]);

  const openStation = (index: number, scroll = true) => {
    setActiveStation(index);
    const firstIncomplete = Array.from({ length: 10 }, (_, task) => task).find((task) => !completed.includes(index * 10 + task));
    setActiveTask(firstIncomplete ?? 0);
    setHintOpen(false);
    if (scroll) window.setTimeout(() => document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  const updateCode = (value: string) => {
    setCodes((current) => current.map((code, index) => index === taskIndex ? value : code));
    setCompleted((current) => current.filter((index) => index !== taskIndex));
    setResults((current) => {
      const next = { ...current };
      delete next[taskIndex];
      return next;
    });
  };

  const checkCode = () => {
    const checks = currentTask.validate(codes[taskIndex]);
    setResults((current) => ({ ...current, [taskIndex]: checks }));
    if (checks.every(Boolean)) setCompleted((current) => current.includes(taskIndex) ? current : [...current, taskIndex].sort((a, b) => a - b));
  };

  const resetCurrent = () => {
    updateCode(currentTask.starter);
    setCompleted((current) => current.filter((index) => index !== taskIndex));
  };

  const resetAll = () => {
    setCodes(allTasks.map((exercise) => exercise.starter));
    setCompleted([]);
    setResults({});
    setActiveStation(0);
    setActiveTask(0);
    setHintOpen(false);
    setResetTarget(null);
  };

  const resetStation = (station: number) => {
    const firstTask = station * 10;
    const lastTask = firstTask + 10;
    setCodes((current) => current.map((code, index) => index >= firstTask && index < lastTask ? allTasks[index].starter : code));
    setCompleted((current) => current.filter((index) => index < firstTask || index >= lastTask));
    setResults((current) => {
      const next = { ...current };
      for (let index = firstTask; index < lastTask; index += 1) delete next[index];
      return next;
    });
    if (activeStation === station) {
      setActiveTask(0);
      setHintOpen(false);
    }
    setResetTarget(null);
  };

  const confirmReset = () => {
    if (resetTarget === "all") resetAll();
    else if (typeof resetTarget === "number") resetStation(resetTarget);
  };

  const resetStationName = typeof resetTarget === "number" ? lessons[resetTarget].stationTitle : "";
  const resetDialogTitle = typeof resetTarget === "number" ? copy.resetStationTitle.replace("{station}", resetStationName) : copy.resetProgressTitle;
  const resetDialogMessage = typeof resetTarget === "number" ? copy.resetStationMessage : copy.resetProgressMessage;

  const moveTask = (direction: -1 | 1) => {
    const nextIndex = Math.max(0, Math.min(59, taskIndex + direction));
    setActiveStation(Math.floor(nextIndex / 10));
    setActiveTask(nextIndex % 10);
    setHintOpen(false);
    window.setTimeout(() => document.getElementById("practice")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
  };

  return (
    <main className="python-course">
      <header className="topbar">
        <Link className="brand python-brand" href="/" aria-label={copy.brand}>
          <span className="brand-mark">Py</span>
          <span className="brand-copy"><strong>{copy.brand}</strong><small>{copy.brandSub}</small></span>
        </Link>
        <div className="top-actions">
          <div className="language-switcher" role="group" aria-label={copy.language}>
            {languageOptions.map((option) => <button key={option.code} title={option.label} className={language === option.code ? "active" : ""} onClick={() => setLanguage(option.code)}>{option.short}</button>)}
          </div>
          <AccountButton language={language} />
          <a className="ticket-link" href="#route">{copy.route} <span>{completed.length} / 60</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> {copy.eyebrow}</p>
          <h1>{copy.heroTop}<br /><em>{copy.heroBottom}</em></h1>
          <p className="lead">{copy.lead}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#practice" onClick={() => openStation(0, false)}>{copy.start} <span>→</span></a>
            <button className="text-button" onClick={() => setRunning((value) => !value)}><span className="round-icon">{running ? "Ⅱ" : "▶"}</span>{running ? copy.pause : copy.play}</button>
          </div>
          <div className="facts"><div><strong>60</strong><span>{copy.tasks}</span></div><div><strong>5</strong><span>{copy.languages}</span></div><div><strong>10×</strong><span>{academy.totalTasks}</span></div></div>
        </div>
        <div className="ride-card">
          <ParkCanvas running={running} speed={speed} progress={activeStation / 6} label={`${copy.express}: ${copy.station} ${activeStation + 1}`} />
          <div className="ride-overlay"><span className="ride-label">{copy.speed}</span><div className="speed-control" role="group" aria-label={copy.speed}>{[.55, 1, 1.7].map((value, index) => <button key={value} className={speed === value ? "active" : ""} onClick={() => setSpeed(value)}>{index + 1}×</button>)}</div></div>
          <div className="ride-caption"><span>{copy.express}</span><strong>{copy.station}: {lesson.stationTitle}</strong></div>
        </div>
      </section>

      <section className="pipeline-section" aria-labelledby="pipeline-title">
        <div className="section-heading compact"><p className="kicker">{copy.howItWorks}</p><h2 id="pipeline-title">{copy.pipelineTitle}</h2><p>{copy.pipelineLead}</p></div>
        <div className="pipeline">
          {pipelineMeta.map((item, index) => <button key={item.ext} className={pipelineStep === index ? "pipeline-stop active" : "pipeline-stop"} onClick={() => { setPipelineStep(index); setRunning(false); }}><span className="stop-node" style={{ "--stop-color": item.color } as CSSProperties}>{index + 1}</span><strong>{copy.pipelineLabels[index]}</strong><small>{item.ext}</small></button>)}
        </div>
        <div className="pipeline-note" aria-live="polite"><span>{String(pipelineStep + 1).padStart(2, "0")}</span><p>{copy.pipelineTexts[pipelineStep]}</p></div>
      </section>

      <section className="route-section" id="route" aria-labelledby="route-title">
        <div className="section-heading"><p className="kicker">{copy.mapKicker}</p><h2 id="route-title">{copy.mapTitle}</h2><p>{copy.mapLead}</p></div>
        <div className="station-grid">
          {lessons.map((station, index) => {
            const count = stationCompleted(index);
            return <div className="station-card-shell" key={station.stationTitle}>
              <button className={`${index === activeStation ? "station-card active" : "station-card"} ${count === 10 ? "done" : ""}`} onClick={() => openStation(index)}><span className="station-number">{String(index + 1).padStart(2, "0")}</span><span className="station-tag">{count === 10 ? "✓" : stationTags[index]}</span><strong>{station.stationTitle}</strong><small>{station.stationCaption}</small><span className="station-progress-mini">{count} / 10</span><span className="station-arrow">↗</span></button>
              <button className="station-card-reset" onClick={() => setResetTarget(index)} aria-label={`${copy.reset}: ${station.stationTitle}`}><span aria-hidden="true">↺</span>{copy.reset}</button>
            </div>;
          })}
          <button className="station-reset-control" onClick={() => setResetTarget("all")}><span>↺</span><strong>{copy.resetProgress}</strong><small>{completed.length} / 60 {copy.completed}</small></button>
        </div>
      </section>

      <section className="lesson-section" id="lesson" aria-labelledby="lesson-title">
        <div className="lesson-tabs" role="tablist" aria-label={copy.route}>
          {lessons.map((station, index) => <button key={station.stationTitle} role="tab" aria-selected={activeStation === index} className={`${activeStation === index ? "active" : ""} ${stationCompleted(index) === 10 ? "done" : ""}`} onClick={() => openStation(index, false)}><span>{stationCompleted(index) === 10 ? "✓" : `${stationCompleted(index)}/10`}</span>{station.stationTitle}</button>)}
        </div>

        <div className="task-selector" aria-label={academy.chooseTask}>
          <div><span>{academy.chooseTask}</span><strong>{academy.stageProgress}: {stationCompleted(activeStation)} / 10</strong></div>
          <div className="task-dots">{Array.from({ length: 10 }, (_, index) => <button key={index} className={`${activeTask === index ? "active" : ""} ${completed.includes(activeStation * 10 + index) ? "done" : ""}`} onClick={() => { setActiveTask(index); setHintOpen(false); }} aria-label={`${academy.task} ${index + 1}`}><span>{completed.includes(activeStation * 10 + index) ? "✓" : index + 1}</span></button>)}</div>
        </div>

        <div className="learning-layout" id="practice">
          <article className="lesson-copy">
            <p className="kicker">{copy.lesson} {String(activeStation + 1).padStart(2, "0")} / 06</p>
            <h2 id="lesson-title">{lesson.title}</h2>
            <p className="lesson-subtitle">{lesson.subtitle}</p>

            <div className="mission-card">
              <p>{copy.mission}: {academy.task} {activeTask + 1} {academy.of} 10</p><strong>{buildPythonInstruction(language, activeStation, currentTask, activeTask)}</strong>
              <div className="concept-note"><span>{academy.conceptTitle}</span><p><InlineCode text={pythonConceptExplanation(language, activeStation)} /></p></div>
              <small className="repetition-note">{academy.repetition}</small>
              <span className="requirement-title">{copy.requirements}</span>
              <ol>{academy.genericChecks.map((requirement) => <li key={requirement}>{requirement}</li>)}</ol>
              <button className="hint-toggle" onClick={() => setHintOpen((value) => !value)}>{hintOpen ? copy.hideHint : copy.showHint} <span>{hintOpen ? "−" : "+"}</span></button>
              {hintOpen && <div className="hint-box"><b>{academy.hintPattern}:</b><pre>{currentTask.hint}</pre></div>}
            </div>

            <div className="guide-card">
              <p className="theory-label">{academy.guide}</p>
              <p className="lesson-body">{guide.intro}</p>
              <div className="syntax-breakdown">
                <span>{academy.example}: {guide.syntaxTitle}</span>
                <code>{guide.example}</code>
                <div>{guide.parts.map((part) => <article key={part.code}><code>{part.code}</code><p>{part.text}</p></article>)}</div>
              </div>
              <div className="remember-box"><strong>{academy.remember}</strong><ul>{guide.remember.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
            </div>

          </article>

          <div className="workbench">
            <div className="code-window interactive">
              <div className="code-topbar"><span><i></i><i></i><i></i></span><strong>station_{activeStation + 1}_task_{activeTask + 1}.py</strong><small>{copy.editor}</small></div>
              <div className="editor-shell"><div className="line-numbers" aria-hidden="true">{codes[taskIndex].split("\n").map((_, index) => <span key={index}>{index + 1}</span>)}</div><textarea value={codes[taskIndex]} onChange={(event) => updateCode(event.target.value)} spellCheck={false} aria-label={`${copy.editor} Python`} /></div>
              <div className="editor-actions">
                <button className="run-button editor-nav-button editor-prev" disabled={taskIndex === 0} onClick={() => moveTask(-1)}><span>←</span>{academy.previousTask}</button>
                <button className="reset-button" onClick={resetCurrent}>↺ {copy.reset}</button>
                <button className="run-button check-button" onClick={checkCode}>{copy.checkCode} <span>▶</span></button>
                <button className="run-button editor-nav-button editor-next" disabled={taskIndex === 59 || !currentPassed} onClick={() => moveTask(1)}>{academy.nextTask}<span>→</span></button>
              </div>
            </div>

            <div className={`program-output ${currentResult ? (currentPassed ? "success" : "error") : ""}`} aria-live="polite">
              <div className="program-output-heading"><span>{academy.outputTitle}</span><small>{currentResult ? `${academy.exitCode}: ${currentPassed ? 0 : 1}` : "..."}</small></div>
              <pre>{!currentResult ? academy.outputWaiting : currentPassed ? (currentTask.output || academy.noConsoleOutput) : failureOutput}</pre>
              {currentResult && currentPassed && <p>{academy.outputNote}</p>}
            </div>

            <div className={`test-console ${currentPassed ? "success" : ""}`}>
              <div className="test-heading"><span>{copy.checks}</span>{currentResult && <strong>{currentResult.filter(Boolean).length} / 3</strong>}</div>
              <div className="test-list">
                {academy.genericChecks.map((check, index) => <div className={!currentResult ? "waiting" : currentResult[index] ? "pass" : "fail"} key={check}><i>{!currentResult ? "○" : currentResult[index] ? "✓" : "×"}</i><span>{check}</span></div>)}
              </div>
              {currentResult && <div className={currentPassed ? "test-message success" : "test-message"}><strong>{currentPassed ? (stationCompleted(activeStation) === 10 ? academy.stagePassed : academy.taskPassed) : copy.fixAndRetry}</strong></div>}
              <p className="test-disclaimer">{copy.checkDisclaimer}</p>
            </div>
          </div>
        </div>

      </section>

      <section className="progress-section" aria-labelledby="progress-title">
        <div className="progress-copy"><p className="kicker">{copy.progressKicker}</p><h2 id="progress-title">{copy.progressTitle}</h2><p>{copy.progressLead}</p><div className={`final-ticket ${completed.length === 60 ? "unlocked" : ""}`}><span>{completed.length === 60 ? "★" : `${completed.length}/60`}</span><strong>{completed.length === 60 ? copy.unlocked : copy.locked}</strong></div><button className="restart-button" onClick={() => setResetTarget("all")}>↺ {copy.restartProgress}</button></div>
        <div className="stamp-grid">{lessons.map((item, index) => { const count = stationCompleted(index); return <button key={item.stationTitle} onClick={() => openStation(index)} className={count === 10 ? "earned" : ""}><span>{count === 10 ? "✓" : `${count}/10`}</span><strong>{item.stationTitle}</strong><small>{count === 10 ? copy.passed : copy.tryAgain}</small></button>; })}</div>
      </section>

      <footer><a className="brand footer-brand python-brand" href="#top"><span className="brand-mark">Py</span><span className="brand-copy"><strong>{copy.brand}</strong><small>{copy.brandSub}</small></span></a><p>{copy.footer}</p><a href="#top">{copy.top} ↑</a></footer>
      {resetTarget !== null && <div className="reset-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setResetTarget(null); }}>
        <section className="reset-dialog" role="alertdialog" aria-modal="true" aria-labelledby="reset-dialog-title" aria-describedby="reset-dialog-message">
          <span className="reset-dialog-icon">↺</span><h2 id="reset-dialog-title">{resetDialogTitle}</h2><p id="reset-dialog-message">{resetDialogMessage}</p>
          <div className="reset-dialog-actions"><button className="reset-dialog-cancel" autoFocus onClick={() => setResetTarget(null)}>{copy.confirmNo}</button><button className="reset-dialog-confirm" onClick={confirmReset}>{copy.confirmYes}</button></div>
        </section>
      </div>}
    </main>
  );
}
