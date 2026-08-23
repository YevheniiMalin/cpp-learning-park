const { academyUi, buildFailureOutput, languageOptions, lessonGuides, lessonText, taskCheckHints, taskExplanations, taskGroups, taskInstructions, taskOutputs, ui } = CppParkContent;
const allTasks = taskGroups.flat();
const pipelineMeta = [
  { ext: ".cpp", color: "#ffcc66" }, { ext: "#include", color: "#ef7c65" },
  { ext: ".obj", color: "#7ac7c4" }, { ext: ".exe", color: "#8aa7ff" },
  { ext: "Hello!", color: "#a9df8d" }
];
const stationTags = ["main", "int", "for", "()", "&", "{}"];
let language = localStorage.getItem("cpp-park-language") || "en";
if (!languageOptions.some(option => option.code === language)) language = "en";
let activeStation = 0;
let activeTask = 0;
let pipelineStep = 0;
let running = true;
let speed = 1;
let hintOpen = false;
let results = {};
let codes = allTasks.map(task => task.starter);
let completed = [];

try {
  const savedCodes = JSON.parse(localStorage.getItem("cpp-park-codes-60") || "null");
  if (Array.isArray(savedCodes) && savedCodes.length === allTasks.length) codes = savedCodes;
  const savedCompleted = JSON.parse(localStorage.getItem("cpp-park-completed-60") || "null");
  if (Array.isArray(savedCompleted)) completed = savedCompleted.filter(value => Number.isInteger(value) && value >= 0 && value < allTasks.length);
} catch { /* Use starter code if local data is invalid. */ }

const byId = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
const inlineCodeHtml = value => String(value).split(/(`[^`]+`)/g).map(part => part.startsWith("`") && part.endsWith("`") ? `<code>${escapeHtml(part.slice(1, -1))}</code>` : escapeHtml(part)).join("");
const taskIndex = () => activeStation * 10 + activeTask;
const stationCompleted = station => completed.filter(index => Math.floor(index / 10) === station).length;
const currentTask = () => taskGroups[activeStation][activeTask];
const saveProgress = () => {
  localStorage.setItem("cpp-park-language", language);
  localStorage.setItem("cpp-park-codes-60", JSON.stringify(codes));
  localStorage.setItem("cpp-park-completed-60", JSON.stringify(completed));
};

function renderLanguage() {
  const copy = ui[language];
  const academy = academyUi[language];
  const lesson = lessonText[language][activeStation];
  document.documentElement.lang = language;
  byId("brandText").textContent = copy.brand;
  byId("brandSub").textContent = copy.brandSub;
  byId("routeLabel").textContent = copy.route;
  byId("eyebrow").textContent = copy.eyebrow;
  byId("heroTop").textContent = copy.heroTop;
  byId("heroBottom").textContent = copy.heroBottom;
  byId("heroLead").textContent = copy.lead;
  byId("startButton").innerHTML = `${escapeHtml(copy.start)} <span>→</span>`;
  byId("rideToggle").querySelector(".round-icon").textContent = running ? "Ⅱ" : "▶";
  byId("rideToggle").querySelector("b").textContent = running ? copy.pause : copy.play;
  byId("tasksLabel").textContent = copy.tasks;
  byId("languagesLabel").textContent = copy.languages;
  byId("feedbackLabel").textContent = academy.totalTasks;
  byId("speedLabel").textContent = copy.speed;
  byId("expressLabel").textContent = copy.express;
  byId("rideStation").textContent = `${copy.station}: ${lesson.stationTitle}`;
  byId("pipelineKicker").textContent = copy.howItWorks;
  byId("pipelineTitle").textContent = copy.pipelineTitle;
  byId("pipelineLead").textContent = copy.pipelineLead;
  byId("mapKicker").textContent = copy.mapKicker;
  byId("routeTitle").textContent = copy.mapTitle;
  byId("mapLead").textContent = copy.mapLead;
  byId("resetDialogTitle").textContent = copy.resetProgressTitle;
  byId("resetDialogMessage").textContent = copy.resetProgressMessage;
  byId("resetDialogNo").textContent = copy.confirmNo;
  byId("resetDialogYes").textContent = copy.confirmYes;
  byId("footerBrand").textContent = copy.brand;
  byId("footerBrandSub").textContent = copy.brandSub;
  byId("footerText").textContent = copy.footer;
  byId("topLink").textContent = `${copy.top} ↑`;
  document.querySelectorAll("[data-language]").forEach(button => button.classList.toggle("active", button.dataset.language === language));
  renderPipeline();
  renderStations();
  renderLesson();
  renderProgress();
  saveProgress();
}

function renderPipeline() {
  const copy = ui[language];
  byId("pipeline").innerHTML = pipelineMeta.map((item, index) => `
    <button class="pipeline-stop ${index === pipelineStep ? "active" : ""}" data-pipeline="${index}">
      <span class="stop-node" style="--stop-color:${item.color}">${index + 1}</span><strong>${escapeHtml(copy.pipelineLabels[index])}</strong><small>${escapeHtml(item.ext)}</small>
    </button>`).join("");
  byId("pipelineNumber").textContent = String(pipelineStep + 1).padStart(2, "0");
  byId("pipelineText").textContent = copy.pipelineTexts[pipelineStep];
  document.querySelectorAll("[data-pipeline]").forEach(button => button.addEventListener("click", () => {
    pipelineStep = Number(button.dataset.pipeline);
    running = false;
    renderLanguage();
  }));
}

function renderStations() {
  const lessons = lessonText[language];
  byId("routeCounter").textContent = `${completed.length} / 60`;
  byId("stationGrid").innerHTML = lessons.map((lesson, index) => {
    const count = stationCompleted(index);
    return `<button class="station-card ${index === activeStation ? "active" : ""} ${count === 10 ? "done" : ""}" data-station="${index}">
      <span class="station-number">${String(index + 1).padStart(2, "0")}</span><span class="station-tag">${count === 10 ? "✓" : stationTags[index]}</span>
      <strong>${escapeHtml(lesson.stationTitle)}</strong><small>${escapeHtml(lesson.stationCaption)}</small><span class="station-progress-mini">${count} / 10</span><span class="station-arrow">↗</span>
    </button>`;
  }).join("") + `<button class="station-reset-control" id="mapResetProgress"><span>↺</span><strong>${escapeHtml(ui[language].resetProgress)}</strong><small>${completed.length} / 60 ${escapeHtml(ui[language].completed)}</small></button>`;
  byId("lessonTabs").innerHTML = lessons.map((lesson, index) => {
    const count = stationCompleted(index);
    return `<button role="tab" aria-selected="${index === activeStation}" class="${index === activeStation ? "active" : ""} ${count === 10 ? "done" : ""}" data-tab="${index}"><span>${count === 10 ? "✓" : `${count}/10`}</span>${escapeHtml(lesson.stationTitle)}</button>`;
  }).join("");
  document.querySelectorAll("[data-station]").forEach(button => button.addEventListener("click", () => openStation(Number(button.dataset.station), true)));
  byId("mapResetProgress").addEventListener("click", openResetDialog);
  document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => openStation(Number(button.dataset.tab), false)));
}

function openStation(index, scroll) {
  activeStation = Math.max(0, Math.min(5, index));
  activeTask = Array.from({ length: 10 }, (_, task) => task).find(task => !completed.includes(activeStation * 10 + task)) ?? 0;
  hintOpen = false;
  renderLanguage();
  if (scroll) setTimeout(() => byId("lesson").scrollIntoView({ behavior: "smooth", block: "start" }), 20);
}

function chooseTask(index) {
  activeTask = Math.max(0, Math.min(9, index));
  hintOpen = false;
  renderLesson();
  saveProgress();
}

function renderLesson() {
  const copy = ui[language];
  const academy = academyUi[language];
  const lesson = lessonText[language][activeStation];
  const guide = lessonGuides[language][activeStation];
  const index = taskIndex();
  const passed = completed.includes(index);
  byId("rideStation").textContent = `${copy.station}: ${lesson.stationTitle}`;
  byId("chooseTaskLabel").textContent = academy.chooseTask;
  byId("stageProgressLabel").textContent = `${academy.stageProgress}: ${stationCompleted(activeStation)} / 10`;
  byId("taskDots").innerHTML = Array.from({ length: 10 }, (_, task) => `<button class="${task === activeTask ? "active" : ""} ${completed.includes(activeStation * 10 + task) ? "done" : ""}" data-task="${task}" aria-label="${escapeHtml(`${academy.task} ${task + 1}`)}"><span>${completed.includes(activeStation * 10 + task) ? "✓" : task + 1}</span></button>`).join("");
  document.querySelectorAll("[data-task]").forEach(button => button.addEventListener("click", () => chooseTask(Number(button.dataset.task))));

  byId("lessonKicker").textContent = `${copy.lesson} ${String(activeStation + 1).padStart(2, "0")} / 06`;
  byId("lessonTitle").textContent = lesson.title;
  byId("lessonSubtitle").textContent = lesson.subtitle;
  byId("theoryLabel").textContent = academy.guide;
  byId("guideIntro").textContent = guide.intro;
  byId("syntaxTitle").textContent = `${academy.example}: ${guide.syntaxTitle}`;
  byId("syntaxExample").textContent = guide.example;
  byId("syntaxParts").innerHTML = guide.parts.map(part => `<article><code>${escapeHtml(part.code)}</code><p>${escapeHtml(part.text)}</p></article>`).join("");
  byId("rememberLabel").textContent = academy.remember;
  byId("rememberList").innerHTML = guide.remember.map(item => `<li><span>✓</span>${escapeHtml(item)}</li>`).join("");

  byId("missionLabel").textContent = `${copy.mission}: ${academy.task} ${activeTask + 1} ${academy.of} 10`;
  byId("missionText").textContent = taskInstructions[language][activeStation][activeTask];
  byId("conceptNoteLabel").textContent = academy.conceptTitle;
  byId("conceptNoteText").innerHTML = inlineCodeHtml(taskExplanations[language][activeStation][activeTask]);
  byId("repetitionNote").textContent = academy.repetition;
  byId("requirementsLabel").textContent = copy.requirements;
  byId("requirementList").innerHTML = academy.genericChecks.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  byId("hintToggle").querySelector("b").textContent = hintOpen ? copy.hideHint : copy.showHint;
  byId("hintToggle").querySelector("span").textContent = hintOpen ? "−" : "+";
  byId("hintBox").hidden = !hintOpen;
  byId("hintBox").innerHTML = `<b>${escapeHtml(academy.hintPattern)}:</b><pre></pre>`;
  byId("hintBox").querySelector("pre").textContent = currentTask().hint;
  byId("codeFilename").textContent = `station_${activeStation + 1}_task_${activeTask + 1}.cpp`;
  byId("editorLabel").textContent = copy.editor;
  byId("codeEditor").value = codes[index];
  renderLineNumbers();
  byId("resetCurrent").textContent = `↺ ${copy.reset}`;
  byId("checkCode").innerHTML = `${escapeHtml(copy.checkCode)} <span>▶</span>`;
  byId("checksLabel").textContent = copy.checks;
  byId("testDisclaimer").textContent = copy.checkDisclaimer;
  byId("lessonPrev").innerHTML = `<span>←</span>${escapeHtml(academy.previousTask)}`;
  byId("lessonPrev").disabled = index === 0;
  byId("lessonNext").innerHTML = `${escapeHtml(academy.nextTask)}<span>→</span>`;
  byId("lessonNext").disabled = index === 59 || !passed;
  byId("testConsole").classList.toggle("success", passed);
  renderTests();
}

function renderLineNumbers() {
  byId("lineNumbers").innerHTML = codes[taskIndex()].split("\n").map((_, index) => `<span>${index + 1}</span>`).join("");
}

function renderTests() {
  const copy = ui[language];
  const academy = academyUi[language];
  const index = taskIndex();
  const current = results[index];
  const passed = completed.includes(index);
  byId("lessonNext").disabled = index === 59 || !passed;
  byId("testConsole").classList.toggle("success", passed);
  byId("testScore").textContent = current ? `${current.filter(Boolean).length} / 3` : "";
  byId("testList").innerHTML = academy.genericChecks.map((check, checkIndex) => {
    const state = !current ? "waiting" : current[checkIndex] ? "pass" : "fail";
    const icon = !current ? "○" : current[checkIndex] ? "✓" : "×";
    return `<div class="${state}"><i>${icon}</i><span>${escapeHtml(check)}</span></div>`;
  }).join("");
  const successText = stationCompleted(activeStation) === 10 ? academy.stagePassed : academy.taskPassed;
  byId("testMessage").innerHTML = current ? `<div class="test-message ${passed ? "success" : ""}"><strong>${escapeHtml(passed ? successText : copy.fixAndRetry)}</strong></div>` : "";
  byId("programOutput").classList.toggle("success", Boolean(current && passed));
  byId("programOutput").classList.toggle("error", Boolean(current && !passed));
  byId("programOutputTitle").textContent = academy.outputTitle;
  byId("programOutputStatus").textContent = current ? `${academy.exitCode}: ${passed ? 0 : 1}` : "...";
  byId("programOutputText").textContent = !current ? academy.outputWaiting : passed ? (taskOutputs[activeStation][activeTask] || academy.noConsoleOutput) : buildFailureOutput({
    code: codes[index],
    checks: current,
    checkHints: taskCheckHints[activeStation][activeTask],
    starter: currentTask().starter,
    solutionHint: currentTask().hint,
    copy: academy,
  });
  byId("programOutputNote").hidden = !(current && passed);
  byId("programOutputNote").textContent = academy.outputNote;
}

function renderProgress() {
  const copy = ui[language];
  const lessons = lessonText[language];
  byId("progressKicker").textContent = copy.progressKicker;
  byId("progressTitle").textContent = copy.progressTitle;
  byId("progressLead").textContent = copy.progressLead;
  byId("finalTicket").classList.toggle("unlocked", completed.length === 60);
  byId("finalTicket").querySelector("span").textContent = completed.length === 60 ? "★" : `${completed.length}/60`;
  byId("finalTicket").querySelector("strong").textContent = completed.length === 60 ? copy.unlocked : copy.locked;
  byId("restartProgress").textContent = `↺ ${copy.restartProgress}`;
  byId("stampGrid").innerHTML = lessons.map((lesson, index) => {
    const count = stationCompleted(index);
    return `<button class="${count === 10 ? "earned" : ""}" data-stamp="${index}"><span>${count === 10 ? "✓" : `${count}/10`}</span><strong>${escapeHtml(lesson.stationTitle)}</strong><small>${escapeHtml(count === 10 ? copy.passed : copy.tryAgain)}</small></button>`;
  }).join("");
  document.querySelectorAll("[data-stamp]").forEach(button => button.addEventListener("click", () => openStation(Number(button.dataset.stamp), true)));
}

byId("codeEditor").addEventListener("input", event => {
  const index = taskIndex();
  codes[index] = event.target.value;
  completed = completed.filter(value => value !== index);
  delete results[index];
  renderLineNumbers();
  renderTests();
  renderStations();
  renderProgress();
  byId("stageProgressLabel").textContent = `${academyUi[language].stageProgress}: ${stationCompleted(activeStation)} / 10`;
  saveProgress();
});

byId("checkCode").addEventListener("click", () => {
  const index = taskIndex();
  const checks = currentTask().validate(codes[index]);
  results[index] = checks;
  if (checks.every(Boolean) && !completed.includes(index)) completed.push(index);
  completed.sort((a, b) => a - b);
  renderLanguage();
});

byId("resetCurrent").addEventListener("click", () => {
  const index = taskIndex();
  codes[index] = currentTask().starter;
  completed = completed.filter(value => value !== index);
  delete results[index];
  renderLanguage();
});

byId("hintToggle").addEventListener("click", () => { hintOpen = !hintOpen; renderLesson(); });
function moveTask(direction) {
  const next = Math.max(0, Math.min(59, taskIndex() + direction));
  activeStation = Math.floor(next / 10);
  activeTask = next % 10;
  hintOpen = false;
  renderLanguage();
  setTimeout(() => byId("practice").scrollIntoView({ behavior: "smooth", block: "start" }), 20);
}
byId("lessonPrev").addEventListener("click", () => moveTask(-1));
byId("lessonNext").addEventListener("click", () => moveTask(1));
byId("startButton").addEventListener("click", () => openStation(0, false));
function openResetDialog() {
  byId("resetDialog").hidden = false;
  document.body.style.overflow = "hidden";
  byId("resetDialogNo").focus();
}
function closeResetDialog() {
  byId("resetDialog").hidden = true;
  document.body.style.overflow = "";
}
function resetAllProgress() {
  codes = allTasks.map(task => task.starter);
  completed = [];
  results = {};
  activeStation = 0;
  activeTask = 0;
  hintOpen = false;
  closeResetDialog();
  renderLanguage();
}
byId("restartProgress").addEventListener("click", openResetDialog);
byId("resetDialogNo").addEventListener("click", closeResetDialog);
byId("resetDialogYes").addEventListener("click", resetAllProgress);
byId("resetDialog").addEventListener("click", event => { if (event.target === byId("resetDialog")) closeResetDialog(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !byId("resetDialog").hidden) closeResetDialog(); });

document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => { language = button.dataset.language; renderLanguage(); }));
byId("rideToggle").addEventListener("click", () => { running = !running; renderLanguage(); });
document.querySelectorAll("[data-speed]").forEach(button => button.addEventListener("click", () => {
  speed = Number(button.dataset.speed);
  document.querySelectorAll("[data-speed]").forEach(item => item.classList.toggle("active", item === button));
}));

function initCanvas() {
  const canvas = byId("parkCanvas");
  const context = canvas.getContext("2d");
  let time = 0;
  let frame = 0;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const resize = () => {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  const polygon = (points, color) => {
    context.beginPath(); points.forEach(([x,y], index) => index ? context.lineTo(x,y) : context.moveTo(x,y)); context.closePath(); context.fillStyle = color; context.fill();
  };
  const draw = () => {
    const ratio = Math.min(devicePixelRatio || 1, 2), w = canvas.width / ratio, h = canvas.height / ratio;
    if (running && !reducedMotion) time += .00135 * speed;
    const target = activeStation / 6;
    if (!running) time += (target - time) * .025;
    const t = ((time % 1) + 1) % 1;
    const sky = context.createLinearGradient(0,0,0,h); sky.addColorStop(0,"#172650"); sky.addColorStop(.55,"#284f72"); sky.addColorStop(1,"#ef9c70"); context.fillStyle=sky; context.fillRect(0,0,w,h);
    context.globalAlpha=.2;
    for(let i=0;i<15;i++){const x=(i*89+frame*.05)%(w+80)-40,y=35+(i*47)%Math.max(60,h*.35);polygon([[x,y],[x+3,y+7],[x+10,y+10],[x+3,y+13],[x,y+20],[x-3,y+13],[x-10,y+10],[x-3,y+7]],"#fff9d1")}
    context.globalAlpha=1; context.beginPath(); context.arc(w*.76,h*.24,Math.min(34,w*.055),0,Math.PI*2); context.fillStyle="#ffd779"; context.fill();
    polygon([[0,h*.6],[w*.22,h*.35],[w*.43,h*.6]],"#375d6c"); polygon([[w*.2,h*.35],[w*.32,h*.49],[w*.43,h*.6]],"#294d62"); polygon([[w*.34,h*.61],[w*.65,h*.32],[w,h*.6]],"#31596a"); polygon([[0,h*.58],[w*.33,h*.5],[w*.56,h*.64],[w,h*.5],[w,h],[0,h]],"#2a896f"); polygon([[0,h*.72],[w*.3,h*.57],[w*.58,h*.69],[w,h*.57],[w,h],[0,h]],"#20745f");
    const track = value => ({x:-30+value*(w+60),y:h*.57-Math.sin(value*Math.PI*2.15-.6)*h*.16-Math.sin(value*Math.PI*4.2)*h*.035});
    context.lineCap="round"; context.lineJoin="round"; context.beginPath(); for(let i=0;i<=90;i++){const point=track(i/90);i?context.lineTo(point.x,point.y):context.moveTo(point.x,point.y)} context.strokeStyle="rgba(17,25,46,.72)";context.lineWidth=10;context.stroke();context.strokeStyle="#83dbd2";context.lineWidth=4;context.stroke();
    [0,-.026,-.052].forEach((offset,index)=>{const point=track((t+offset+1)%1),next=track((t+offset+.004+1)%1);context.save();context.translate(point.x,point.y-9);context.rotate(Math.atan2(next.y-point.y,next.x-point.x));polygon([[-13,-8],[10,-8],[14,7],[-10,7]],index?"#ffc95d":"#ff8b5f");polygon([[-13,-8],[-6,-14],[8,-14],[10,-8]],index?"#ffe29a":"#ffb477");context.restore()});
    frame += 1; requestAnimationFrame(draw);
  };
  resize(); addEventListener("resize", resize); requestAnimationFrame(draw);
}

renderLanguage();
initCanvas();
