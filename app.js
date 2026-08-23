const { languageOptions, portalCopy } = LearningParkPortal;
let language = localStorage.getItem("learning-park-language") || localStorage.getItem("cpp-park-language") || "en";
if (!languageOptions.some(option => option.code === language)) language = "en";

const byId = id => document.getElementById(id);
const readProgress = key => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter(item => Number.isInteger(item) && item >= 0 && item < 60).length : 0;
  } catch { return 0; }
};

function render() {
  const copy = portalCopy[language];
  document.documentElement.lang = language;
  localStorage.setItem("learning-park-language", language);
  localStorage.setItem("cpp-park-language", language);
  localStorage.setItem("python-park-language", language);
  ["brand", "brandSub", "eyebrow", "titleTop", "titleBottom", "lead", "choose", "tasks", "stations", "languages", "cppName", "cppDesc", "pythonName", "pythonDesc", "savedLocally", "footer"].forEach(id => byId(id).textContent = copy[id]);
  byId("cppTopics").innerHTML = copy.cppTopics.map(topic => `<span>${topic}</span>`).join("");
  byId("pythonTopics").innerHTML = copy.pythonTopics.map(topic => `<span>${topic}</span>`).join("");
  byId("cppProgressLabel").textContent = copy.progress;
  byId("pythonProgressLabel").textContent = copy.progress;
  byId("cppProgress").textContent = `${readProgress("cpp-park-completed-60")} / 60`;
  byId("pythonProgress").textContent = `${readProgress("python-park-completed-60")} / 60`;
  byId("cppOpen").textContent = copy.openCourse;
  byId("pythonOpen").textContent = copy.openCourse;
  document.querySelectorAll("[data-language]").forEach(button => button.classList.toggle("active", button.dataset.language === language));
}

document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => { language = button.dataset.language; render(); }));
render();
