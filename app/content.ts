export type Language = "ru" | "uk" | "fi" | "en" | "th";

export const languageOptions: { code: Language; short: string; label: string }[] = [
  { code: "ru", short: "RU", label: "Русский" },
  { code: "uk", short: "UA", label: "Українська" },
  { code: "fi", short: "FI", label: "Suomi" },
  { code: "en", short: "EN", label: "English" },
  { code: "th", short: "TH", label: "ไทย" },
];

type UiCopy = {
  brand: string; brandSub: string; route: string; language: string;
  eyebrow: string; heroTop: string; heroBottom: string; lead: string; start: string;
  pause: string; play: string; tasks: string; languages: string; instantFeedback: string;
  speed: string; express: string; station: string;
  howItWorks: string; pipelineTitle: string; pipelineLead: string;
  mapKicker: string; mapTitle: string; mapLead: string;
  lesson: string; theory: string; mission: string; requirements: string; hint: string;
  showHint: string; hideHint: string; editor: string; checks: string; checkCode: string;
  reset: string; passed: string; tryAgain: string; allPassed: string; fixAndRetry: string;
  checkDisclaimer: string; previous: string; next: string; completed: string;
  progressKicker: string; progressTitle: string; progressLead: string; unlocked: string; locked: string;
  restartProgress: string; resetProgress: string; resetProgressTitle: string; resetProgressMessage: string;
  resetStationTitle: string; resetStationMessage: string;
  confirmYes: string; confirmNo: string; footer: string; top: string;
  pipelineLabels: string[]; pipelineTexts: string[];
};

export const ui: Record<Language, UiCopy> = {
  ru: {
    brand: "ПАРК ЗНАНИЙ", brandSub: "ИНТЕРАКТИВНЫЙ МАРШРУТ", route: "МАРШРУТ", language: "Язык",
    eyebrow: "УЧИСЬ, СОЗДАВАЯ КОД", heroTop: "Пиши.", heroBottom: "Проверяй C++", lead: "На каждой станции тебя ждут короткая теория, настоящее задание и автоматическая проверка кода прямо в браузере.", start: "Начать первое задание",
    pause: "Остановить вагончик", play: "Запустить вагончик", tasks: "заданий", languages: "языка", instantFeedback: "мгновенная проверка",
    speed: "СКОРОСТЬ", express: "КОД-ЭКСПРЕСС", station: "Станция",
    howItWorks: "КАК ЭТО РАБОТАЕТ", pipelineTitle: "Путь одной программы", pipelineLead: "До запуска исходный код проходит пять этапов. Нажми на станцию, чтобы узнать её роль.",
    mapKicker: "КАРТА ПАРКА", mapTitle: "Шесть практических станций", mapLead: "Каждый урок заканчивается кодом, который нужно написать и проверить.",
    lesson: "СТАНЦИЯ", theory: "Коротко о главном", mission: "ТВОЁ ЗАДАНИЕ", requirements: "Что должно быть в решении", hint: "Подсказка", showHint: "Показать подсказку", hideHint: "Скрыть подсказку", editor: "РЕДАКТОР", checks: "АВТОМАТИЧЕСКИЕ ТЕСТЫ", checkCode: "Проверить код", reset: "Сбросить", passed: "Пройдено", tryAgain: "Нужно исправить", allPassed: "Все тесты прошли. Станция открыта!", fixAndRetry: "Посмотри, какие проверки не прошли, исправь код и запусти тесты ещё раз.",
    checkDisclaimer: "Тренажёр проверяет структуру и ожидаемую логику решения. Произвольные программы C++ в браузере не запускаются.", previous: "Назад", next: "Следующая станция", completed: "выполнено",
    progressKicker: "ТВОЙ ПРОГРЕСС", progressTitle: "Собери шесть штампов", progressLead: "На каждой станции тебя ждут 10 упражнений. Прогресс сохраняется на этом устройстве.", unlocked: "Маршрут завершён! Ты решил все 60 заданий по базовым темам C++.", locked: "Выполни все 60 заданий, чтобы получить финальный билет.", restartProgress: "Начать заново", resetProgress: "Сбросить весь прогресс", resetProgressTitle: "Сбросить весь прогресс?", resetProgressMessage: "Все выполненные задания и введённый код будут удалены на этом устройстве. Это действие нельзя отменить.", resetStationTitle: "Сбросить программу «{station}»?", resetStationMessage: "Будут удалены выполненные задания и введённый код только этой программы. Прогресс остальных программ сохранится.", confirmYes: "Да, сбросить", confirmNo: "Нет, оставить", footer: "Следующая остановка - твоя собственная программа.", top: "Наверх",
    pipelineLabels: ["Исходник", "Препроцессор", "Компилятор", "Линкер", "Запуск"],
    pipelineTexts: ["Ты пишешь инструкции в файле с расширением .cpp.", "Директивы с решёткой подключают заголовки и подготавливают текст.", "Компилятор проверяет синтаксис и создаёт объектный код.", "Линкер соединяет объектные файлы и библиотеки в программу.", "Операционная система загружает программу в память и запускает её."],
  },
  uk: {
    brand: "ПАРК ЗНАНЬ", brandSub: "ІНТЕРАКТИВНИЙ МАРШРУТ", route: "МАРШРУТ", language: "Мова",
    eyebrow: "НАВЧАЙСЯ, СТВОРЮЮЧИ КОД", heroTop: "Пиши.", heroBottom: "Перевіряй C++", lead: "На кожній станції на тебе чекають коротка теорія, справжнє завдання та автоматична перевірка коду прямо у браузері.", start: "Почати перше завдання",
    pause: "Зупинити вагончик", play: "Запустити вагончик", tasks: "завдань", languages: "мови", instantFeedback: "миттєва перевірка",
    speed: "ШВИДКІСТЬ", express: "КОД-ЕКСПРЕС", station: "Станція",
    howItWorks: "ЯК ЦЕ ПРАЦЮЄ", pipelineTitle: "Шлях однієї програми", pipelineLead: "До запуску вихідний код проходить п’ять етапів. Натисни на станцію, щоб дізнатися її роль.",
    mapKicker: "МАПА ПАРКУ", mapTitle: "Шість практичних станцій", mapLead: "Кожен урок завершується кодом, який треба написати й перевірити.",
    lesson: "СТАНЦІЯ", theory: "Коротко про головне", mission: "ТВОЄ ЗАВДАННЯ", requirements: "Що має бути в розв’язанні", hint: "Підказка", showHint: "Показати підказку", hideHint: "Сховати підказку", editor: "РЕДАКТОР", checks: "АВТОМАТИЧНІ ТЕСТИ", checkCode: "Перевірити код", reset: "Скинути", passed: "Виконано", tryAgain: "Треба виправити", allPassed: "Усі тести пройдено. Станцію відкрито!", fixAndRetry: "Подивися, які перевірки не пройдено, виправ код і запусти тести ще раз.",
    checkDisclaimer: "Тренажер перевіряє структуру та очікувану логіку розв’язання. Довільні програми C++ у браузері не запускаються.", previous: "Назад", next: "Наступна станція", completed: "виконано",
    progressKicker: "ТВІЙ ПРОГРЕС", progressTitle: "Збери шість штампів", progressLead: "На кожній станції на тебе чекають 10 вправ. Прогрес зберігається на цьому пристрої.", unlocked: "Маршрут завершено! Ти виконав усі 60 завдань із базових тем C++.", locked: "Виконай усі 60 завдань, щоб отримати фінальний квиток.", restartProgress: "Почати заново", resetProgress: "Скинути весь прогрес", resetProgressTitle: "Скинути весь прогрес?", resetProgressMessage: "Усі виконані завдання та введений код буде видалено на цьому пристрої. Цю дію не можна скасувати.", resetStationTitle: "Скинути програму «{station}»?", resetStationMessage: "Буде видалено виконані завдання та введений код лише цієї програми. Прогрес інших програм збережеться.", confirmYes: "Так, скинути", confirmNo: "Ні, залишити", footer: "Наступна зупинка - твоя власна програма.", top: "Нагору",
    pipelineLabels: ["Вихідний код", "Препроцесор", "Компілятор", "Лінкер", "Запуск"],
    pipelineTexts: ["Ти пишеш інструкції у файлі з розширенням .cpp.", "Директиви з решіткою підключають заголовки та готують текст.", "Компілятор перевіряє синтаксис і створює об’єктний код.", "Лінкер поєднує об’єктні файли та бібліотеки у програму.", "Операційна система завантажує програму в пам’ять і запускає її."],
  },
  fi: {
    brand: "OPPIMISPUISTO", brandSub: "INTERAKTIIVINEN REITTI", route: "REITTI", language: "Kieli",
    eyebrow: "OPI KIRJOITTAMALLA KOODIA", heroTop: "Kirjoita.", heroBottom: "Testaa C++", lead: "Jokaisella asemalla saat lyhyen teoriaosuuden, oikean koodaustehtävän ja automaattisen tarkistuksen suoraan selaimessa.", start: "Aloita ensimmäinen tehtävä",
    pause: "Pysäytä vaunu", play: "Käynnistä vaunu", tasks: "tehtävää", languages: "kieltä", instantFeedback: "välitön tarkistus",
    speed: "NOPEUS", express: "KOODI-EXPRESS", station: "Asema",
    howItWorks: "NÄIN SE TOIMII", pipelineTitle: "Ohjelman matka", pipelineLead: "Ennen käynnistystä lähdekoodi käy läpi viisi vaihetta. Tutustu vaiheeseen napsauttamalla sitä.",
    mapKicker: "PUISTON KARTTA", mapTitle: "Kuusi käytännön asemaa", mapLead: "Jokainen oppitunti päättyy koodiin, joka sinun pitää kirjoittaa ja tarkistaa.",
    lesson: "ASEMA", theory: "Tärkeimmät asiat lyhyesti", mission: "TEHTÄVÄSI", requirements: "Ratkaisun vaatimukset", hint: "Vihje", showHint: "Näytä vihje", hideHint: "Piilota vihje", editor: "EDITORI", checks: "AUTOMAATTISET TESTIT", checkCode: "Tarkista koodi", reset: "Palauta", passed: "Suoritettu", tryAgain: "Korjaa ratkaisu", allPassed: "Kaikki testit läpäistiin. Asema on avattu!", fixAndRetry: "Katso epäonnistuneet tarkistukset, korjaa koodi ja suorita testit uudelleen.",
    checkDisclaimer: "Harjoitus tarkistaa ratkaisun rakenteen ja odotetun logiikan. Selaimessa ei suoriteta mielivaltaisia C++-ohjelmia.", previous: "Edellinen", next: "Seuraava asema", completed: "suoritettu",
    progressKicker: "EDISTYMISESI", progressTitle: "Kerää kuusi leimaa", progressLead: "Jokaisella asemalla on 10 harjoitusta. Edistyminen tallennetaan tälle laitteelle.", unlocked: "Reitti on valmis! Olet suorittanut kaikki 60 C++-perustehtävää.", locked: "Suorita kaikki 60 tehtävää saadaksesi loppulipun.", restartProgress: "Aloita alusta", resetProgress: "Nollaa koko edistyminen", resetProgressTitle: "Nollataanko koko edistyminen?", resetProgressMessage: "Kaikki suoritetut tehtävät ja kirjoittamasi koodi poistetaan tältä laitteelta. Toimintoa ei voi perua.", resetStationTitle: "Nollataanko ohjelma ”{station}”?", resetStationMessage: "Vain tämän ohjelman suoritetut tehtävät ja kirjoitettu koodi poistetaan. Muiden ohjelmien edistyminen säilyy.", confirmYes: "Kyllä, nollaa", confirmNo: "Ei, säilytä", footer: "Seuraava pysäkki on oma ohjelmasi.", top: "Ylös",
    pipelineLabels: ["Lähdekoodi", "Esikääntäjä", "Kääntäjä", "Linkittäjä", "Käynnistys"],
    pipelineTexts: ["Kirjoitat ohjeet .cpp-päätteiseen tiedostoon.", "Risuaitadirektiivit liittävät otsakkeet ja valmistelevat tekstin.", "Kääntäjä tarkistaa syntaksin ja luo objektikoodin.", "Linkittäjä yhdistää objektitiedostot ja kirjastot ohjelmaksi.", "Käyttöjärjestelmä lataa ohjelman muistiin ja käynnistää sen."],
  },
  en: {
    brand: "KNOWLEDGE PARK", brandSub: "INTERACTIVE ROUTE", route: "ROUTE", language: "Language",
    eyebrow: "LEARN BY WRITING CODE", heroTop: "Write.", heroBottom: "Test C++", lead: "Every station combines a short explanation, a real coding task and automatic feedback directly in your browser.", start: "Start the first task",
    pause: "Pause the train", play: "Start the train", tasks: "tasks", languages: "languages", instantFeedback: "instant feedback",
    speed: "SPEED", express: "CODE EXPRESS", station: "Station",
    howItWorks: "HOW IT WORKS", pipelineTitle: "A program’s journey", pipelineLead: "Before it runs, source code passes through five stages. Select a station to learn its role.",
    mapKicker: "PARK MAP", mapTitle: "Six hands-on stations", mapLead: "Every lesson ends with code you need to write and check.",
    lesson: "STATION", theory: "The essentials", mission: "YOUR TASK", requirements: "Your solution must include", hint: "Hint", showHint: "Show hint", hideHint: "Hide hint", editor: "EDITOR", checks: "AUTOMATIC TESTS", checkCode: "Check code", reset: "Reset", passed: "Completed", tryAgain: "Needs a fix", allPassed: "All tests passed. Station unlocked!", fixAndRetry: "Review the failed checks, update your code and run the tests again.",
    checkDisclaimer: "The trainer checks the structure and expected logic of the solution. It does not execute arbitrary C++ programs in the browser.", previous: "Previous", next: "Next station", completed: "completed",
    progressKicker: "YOUR PROGRESS", progressTitle: "Collect six stamps", progressLead: "Each station contains 10 exercises. Progress is saved on this device.", unlocked: "Route complete! You solved all 60 tasks across the core C++ topics.", locked: "Complete all 60 tasks to receive the final ticket.", restartProgress: "Start over", resetProgress: "Reset all progress", resetProgressTitle: "Reset all progress?", resetProgressMessage: "All completed tasks and entered code will be removed from this device. This action cannot be undone.", resetStationTitle: "Reset the “{station}” program?", resetStationMessage: "Only this program’s completed tasks and entered code will be removed. Progress in the other programs will be kept.", confirmYes: "Yes, reset", confirmNo: "No, keep it", footer: "Next stop: your own program.", top: "Back to top",
    pipelineLabels: ["Source", "Preprocessor", "Compiler", "Linker", "Run"],
    pipelineTexts: ["You write instructions in a file with the .cpp extension.", "Hash directives include headers and prepare the source text.", "The compiler checks syntax and creates object code.", "The linker combines object files and libraries into a program.", "The operating system loads the program into memory and starts it."],
  },
  th: {
    brand: "สวนความรู้", brandSub: "เส้นทางการเรียนรู้แบบโต้ตอบ", route: "เส้นทาง", language: "ภาษา",
    eyebrow: "เรียนรู้ด้วยการเขียนโค้ด", heroTop: "เขียนโค้ด.", heroBottom: "ทดสอบ C++", lead: "แต่ละสถานีมีคำอธิบายสั้น ๆ โจทย์เขียนโค้ดจริง และการตรวจคำตอบอัตโนมัติในเบราว์เซอร์ของคุณ",
    start: "เริ่มโจทย์แรก", pause: "หยุดรถไฟ", play: "เดินรถไฟ", tasks: "แบบฝึกหัด", languages: "ภาษา", instantFeedback: "ตรวจผลทันที",
    speed: "ความเร็ว", express: "รถด่วนโค้ด", station: "สถานี",
    howItWorks: "ทำงานอย่างไร", pipelineTitle: "เส้นทางของโปรแกรม", pipelineLead: "ก่อนโปรแกรมจะทำงาน ซอร์สโค้ดต้องผ่านห้าขั้นตอน เลือกแต่ละขั้นเพื่อดูหน้าที่ของมัน",
    mapKicker: "แผนที่สวน", mapTitle: "หกสถานีฝึกปฏิบัติ", mapLead: "ทุกบทเรียนจบด้วยโค้ดที่คุณต้องเขียนและตรวจสอบด้วยตนเอง",
    lesson: "สถานี", theory: "สาระสำคัญ", mission: "โจทย์ของคุณ", requirements: "สิ่งที่ต้องมีในคำตอบ", hint: "คำใบ้", showHint: "แสดงคำใบ้", hideHint: "ซ่อนคำใบ้", editor: "ตัวแก้ไขโค้ด", checks: "การตรวจอัตโนมัติ", checkCode: "ตรวจโค้ด", reset: "รีเซ็ต", passed: "ผ่านแล้ว", tryAgain: "ต้องแก้ไข", allPassed: "ผ่านการตรวจทั้งหมด เปิดสถานีแล้ว!", fixAndRetry: "ดูรายการที่ยังไม่ผ่าน แก้โค้ด แล้วตรวจอีกครั้ง",
    checkDisclaimer: "แบบฝึกหัดจะตรวจโครงสร้างและตรรกะที่คาดหวังของคำตอบ โดยไม่ได้เรียกใช้โปรแกรม C++ ใด ๆ โดยตรงในเบราว์เซอร์", previous: "ก่อนหน้า", next: "สถานีถัดไป", completed: "เสร็จแล้ว",
    progressKicker: "ความคืบหน้าของคุณ", progressTitle: "สะสมตราประทับทั้งหก", progressLead: "แต่ละสถานีมี 10 แบบฝึกหัด ความคืบหน้าจะถูกบันทึกไว้ในอุปกรณ์นี้", unlocked: "เส้นทางเสร็จสมบูรณ์! คุณทำโจทย์พื้นฐาน C++ ครบทั้ง 60 ข้อแล้ว", locked: "ทำโจทย์ทั้ง 60 ข้อให้ครบเพื่อรับตั๋วรางวัลสุดท้าย", restartProgress: "เริ่มใหม่", resetProgress: "รีเซ็ตความคืบหน้าทั้งหมด", resetProgressTitle: "รีเซ็ตความคืบหน้าทั้งหมดหรือไม่?", resetProgressMessage: "โจทย์ที่ทำเสร็จและโค้ดที่เขียนไว้ทั้งหมดจะถูกลบจากอุปกรณ์นี้ และไม่สามารถย้อนกลับได้", resetStationTitle: "รีเซ็ตโปรแกรม “{station}” หรือไม่?", resetStationMessage: "ระบบจะลบเฉพาะโจทย์ที่ทำเสร็จและโค้ดของโปรแกรมนี้ ความคืบหน้าของโปรแกรมอื่นจะยังคงอยู่", confirmYes: "ใช่ รีเซ็ต", confirmNo: "ไม่ เก็บไว้", footer: "สถานีถัดไปคือโปรแกรมที่คุณสร้างเอง", top: "กลับขึ้นด้านบน",
    pipelineLabels: ["ซอร์สโค้ด", "พรีโพรเซสเซอร์", "คอมไพเลอร์", "ลิงเกอร์", "เรียกใช้"],
    pipelineTexts: ["คุณเขียนคำสั่งไว้ในไฟล์นามสกุล .cpp", "ไดเรกทีฟที่ขึ้นต้นด้วย # จะนำเข้าเฮดเดอร์และเตรียมซอร์สโค้ด", "คอมไพเลอร์ตรวจไวยากรณ์และสร้างออบเจ็กต์โค้ด", "ลิงเกอร์รวมออบเจ็กต์ไฟล์และไลบรารีให้เป็นโปรแกรม", "ระบบปฏิบัติการโหลดโปรแกรมเข้าสู่หน่วยความจำและเริ่มทำงาน"],
  },
};

export type LessonCopy = {
  stationTitle: string; stationCaption: string; title: string; subtitle: string; body: string;
  points: string[]; task: string; requirements: string[]; hint: string; checks: string[];
};

export const lessonText: Record<Language, LessonCopy[]> = {
  ru: [
    {
      stationTitle: "Основа", stationCaption: "Вывод и main", title: "Первая программа", subtitle: "Точка входа и вывод текста",
      body: "Выполнение программы C++ начинается с функции main. Объект std::cout отправляет данные в стандартный вывод, а точка с запятой завершает инструкцию.",
      points: ["#include <iostream> подключает поток вывода", "return 0 сообщает об успешном завершении"],
      task: "Допиши программу так, чтобы она вывела точный текст: Hello, C++!", requirements: ["Функция int main()", "Вывод через std::cout", "Инструкция return 0;"], hint: "Вставь между фигурными скобками: std::cout << \"Hello, C++!\";", checks: ["Найдена функция main", "Выводится точный текст", "Программа возвращает 0"],
    },
    {
      stationTitle: "Данные", stationCaption: "Типы и переменные", title: "Переменные и вычисления", subtitle: "Храним целые и дробные значения",
      body: "Тип задаёт допустимые значения и операции. int используют для целых чисел, double для дробных. Имя переменной позволяет обращаться к сохранённому значению.",
      points: ["Переменную объявляют до использования", "Оператор * выполняет умножение"],
      task: "Создай int visitors со значением 24 и double price со значением 3.5. Выведи их произведение.", requirements: ["Переменная visitors типа int", "Переменная price типа double", "Вывод visitors * price"], hint: "После объявлений напиши: std::cout << visitors * price;", checks: ["visitors равен 24", "price равен 3.5", "Выводится произведение"],
    },
    {
      stationTitle: "Логика", stationCaption: "Цикл for", title: "Повторяем действия", subtitle: "Цикл с известным числом шагов",
      body: "Цикл for содержит начальное значение, условие продолжения и изменение счётчика. Тело цикла выполняется, пока условие остаётся истинным.",
      points: ["Счётчик car начинается с 1", "++car увеличивает значение на единицу"],
      task: "С помощью цикла for выведи значения car от 1 до 3.", requirements: ["Счётчик int car = 1", "Условие car <= 3", "Вывод car внутри цикла"], hint: "Начни с: for (int car = 1; car <= 3; ++car)", checks: ["Цикл начинается с 1", "Цикл идёт до 3", "Счётчик выводится"],
    },
    {
      stationTitle: "Функции", stationCaption: "Параметры и return", title: "Создаём функцию", subtitle: "Повторно используем одну логику",
      body: "Функция получает параметры и может вернуть результат. Это помогает разделить программу на небольшие проверяемые части.",
      points: ["Тип int перед именем задаёт тип результата", "return передаёт значение вызывающему коду"],
      task: "Создай функцию seatsLeft(int total, int occupied), которая возвращает разность total и occupied.", requirements: ["Два параметра типа int", "Результат типа int", "Возврат total - occupied"], hint: "Тело функции может состоять из одной строки: return total - occupied;", checks: ["Сигнатура функции верна", "Разность возвращается", "Функция вызывается с 24 и 19"],
    },
    {
      stationTitle: "Память", stationCaption: "Ссылочные параметры", title: "Изменяем по ссылке", subtitle: "Работаем с исходной переменной",
      body: "Параметр int& является ссылкой на существующую переменную. Изменение ссылки изменяет тот же объект, а копия не создаётся.",
      points: ["Символ & ставят после типа", "Ссылка должна быть привязана к объекту"],
      task: "Создай void addPassenger(int& count), которая увеличивает count на единицу.", requirements: ["Ссылочный параметр int&", "Функция ничего не возвращает", "Значение count увеличивается"], hint: "Внутри функции достаточно инструкции ++count;", checks: ["Параметр передан по ссылке", "count увеличивается", "Функция вызвана для passengers"],
    },
    {
      stationTitle: "Классы", stationCaption: "Объекты и методы", title: "Моделируем аттракцион", subtitle: "Объединяем состояние и поведение",
      body: "Класс описывает новый тип. Конструктор задаёт начальное состояние, private защищает данные, а public-методы образуют доступный интерфейс.",
      points: ["Список инициализации задаёт поле seats_", "Метод const не изменяет объект"],
      task: "Создай класс Ride с приватным int seats_, конструктором Ride(int seats) и методом int capacity() const.", requirements: ["Публичный конструктор", "capacity() возвращает seats_", "Поле seats_ скрыто в private"], hint: "Конструктор: Ride(int seats) : seats_(seats) {}", checks: ["Класс и public-секция найдены", "Конструктор задаёт seats_", "Метод capacity() корректен"],
    },
  ],
  uk: [
    {
      stationTitle: "Основа", stationCaption: "Виведення та main", title: "Перша програма", subtitle: "Точка входу та виведення тексту",
      body: "Виконання програми C++ починається з функції main. Об’єкт std::cout надсилає дані у стандартний вивід, а крапка з комою завершує інструкцію.",
      points: ["#include <iostream> підключає потік виведення", "return 0 повідомляє про успішне завершення"],
      task: "Допиши програму так, щоб вона вивела точний текст: Hello, C++!", requirements: ["Функція int main()", "Виведення через std::cout", "Інструкція return 0;"], hint: "Встав між фігурними дужками: std::cout << \"Hello, C++!\";", checks: ["Знайдено функцію main", "Виводиться точний текст", "Програма повертає 0"],
    },
    {
      stationTitle: "Дані", stationCaption: "Типи та змінні", title: "Змінні та обчислення", subtitle: "Зберігаємо цілі й дробові значення",
      body: "Тип визначає допустимі значення та операції. int використовують для цілих чисел, double для дробових. Ім’я змінної дає доступ до збереженого значення.",
      points: ["Змінну оголошують до використання", "Оператор * виконує множення"],
      task: "Створи int visitors зі значенням 24 і double price зі значенням 3.5. Виведи їхній добуток.", requirements: ["Змінна visitors типу int", "Змінна price типу double", "Виведення visitors * price"], hint: "Після оголошень напиши: std::cout << visitors * price;", checks: ["visitors дорівнює 24", "price дорівнює 3.5", "Виводиться добуток"],
    },
    {
      stationTitle: "Логіка", stationCaption: "Цикл for", title: "Повторюємо дії", subtitle: "Цикл із відомою кількістю кроків",
      body: "Цикл for містить початкове значення, умову продовження та зміну лічильника. Тіло циклу виконується, доки умова істинна.",
      points: ["Лічильник car починається з 1", "++car збільшує значення на одиницю"],
      task: "За допомогою циклу for виведи значення car від 1 до 3.", requirements: ["Лічильник int car = 1", "Умова car <= 3", "Виведення car усередині циклу"], hint: "Почни з: for (int car = 1; car <= 3; ++car)", checks: ["Цикл починається з 1", "Цикл іде до 3", "Лічильник виводиться"],
    },
    {
      stationTitle: "Функції", stationCaption: "Параметри та return", title: "Створюємо функцію", subtitle: "Повторно використовуємо одну логіку",
      body: "Функція отримує параметри й може повернути результат. Це допомагає поділити програму на невеликі частини, які легко перевіряти.",
      points: ["Тип int перед іменем задає тип результату", "return передає значення коду, що викликав функцію"],
      task: "Створи функцію seatsLeft(int total, int occupied), яка повертає різницю total і occupied.", requirements: ["Два параметри типу int", "Результат типу int", "Повернення total - occupied"], hint: "Тіло функції може складатися з одного рядка: return total - occupied;", checks: ["Сигнатура функції правильна", "Різниця повертається", "Функцію викликано з 24 і 19"],
    },
    {
      stationTitle: "Пам’ять", stationCaption: "Посилальні параметри", title: "Змінюємо за посиланням", subtitle: "Працюємо з початковою змінною",
      body: "Параметр int& є посиланням на наявну змінну. Зміна посилання змінює той самий об’єкт, копія не створюється.",
      points: ["Символ & ставлять після типу", "Посилання має бути прив’язане до об’єкта"],
      task: "Створи void addPassenger(int& count), яка збільшує count на одиницю.", requirements: ["Посилальний параметр int&", "Функція нічого не повертає", "Значення count збільшується"], hint: "Усередині функції достатньо інструкції ++count;", checks: ["Параметр передано за посиланням", "count збільшується", "Функцію викликано для passengers"],
    },
    {
      stationTitle: "Класи", stationCaption: "Об’єкти та методи", title: "Моделюємо атракціон", subtitle: "Поєднуємо стан і поведінку",
      body: "Клас описує новий тип. Конструктор задає початковий стан, private захищає дані, а public-методи утворюють доступний інтерфейс.",
      points: ["Список ініціалізації задає поле seats_", "Метод const не змінює об’єкт"],
      task: "Створи клас Ride із приватним int seats_, конструктором Ride(int seats) і методом int capacity() const.", requirements: ["Публічний конструктор", "capacity() повертає seats_", "Поле seats_ приховано у private"], hint: "Конструктор: Ride(int seats) : seats_(seats) {}", checks: ["Знайдено клас і public-секцію", "Конструктор задає seats_", "Метод capacity() правильний"],
    },
  ],
  fi: [
    {
      stationTitle: "Perusteet", stationCaption: "Tulostus ja main", title: "Ensimmäinen ohjelma", subtitle: "Aloituskohta ja tekstin tulostus",
      body: "C++-ohjelman suoritus alkaa main-funktiosta. std::cout lähettää dataa vakiotulosteeseen ja puolipiste päättää lauseen.",
      points: ["#include <iostream> ottaa tulostusvirran käyttöön", "return 0 kertoo onnistuneesta lopetuksesta"],
      task: "Täydennä ohjelma niin, että se tulostaa täsmälleen: Hello, C++!", requirements: ["Funktio int main()", "Tulostus std::cout-oliolla", "Lause return 0;"], hint: "Lisää aaltosulkeiden väliin: std::cout << \"Hello, C++!\";", checks: ["main-funktio löytyi", "Täsmällinen teksti tulostetaan", "Ohjelma palauttaa arvon 0"],
    },
    {
      stationTitle: "Data", stationCaption: "Tyypit ja muuttujat", title: "Muuttujat ja laskenta", subtitle: "Kokonais- ja liukulukujen tallennus",
      body: "Tyyppi määrittää sallitut arvot ja operaatiot. int sopii kokonaisluvuille ja double desimaaliluvuille. Muuttujan nimellä käytetään tallennettua arvoa.",
      points: ["Muuttuja esitellään ennen käyttöä", "Operaattori * suorittaa kertolaskun"],
      task: "Luo int visitors arvolla 24 ja double price arvolla 3.5. Tulosta niiden tulo.", requirements: ["int-tyyppinen visitors", "double-tyyppinen price", "Tulostus visitors * price"], hint: "Kirjoita esittelyiden jälkeen: std::cout << visitors * price;", checks: ["visitors on 24", "price on 3.5", "Tulo tulostetaan"],
    },
    {
      stationTitle: "Logiikka", stationCaption: "for-silmukka", title: "Toistetaan toimintoja", subtitle: "Silmukka tunnetulla askelmäärällä",
      body: "for-silmukka sisältää alkuarvon, jatkoehdon ja laskurin muutoksen. Runko suoritetaan niin kauan kuin ehto on tosi.",
      points: ["Laskuri car alkaa arvosta 1", "++car kasvattaa arvoa yhdellä"],
      task: "Tulosta for-silmukalla car-arvot yhdestä kolmeen.", requirements: ["Laskuri int car = 1", "Ehto car <= 3", "car tulostetaan silmukan sisällä"], hint: "Aloita näin: for (int car = 1; car <= 3; ++car)", checks: ["Silmukka alkaa yhdestä", "Silmukka jatkuu kolmeen", "Laskuri tulostetaan"],
    },
    {
      stationTitle: "Funktiot", stationCaption: "Parametrit ja return", title: "Luodaan funktio", subtitle: "Saman logiikan uudelleenkäyttö",
      body: "Funktio vastaanottaa parametreja ja voi palauttaa tuloksen. Näin ohjelma voidaan jakaa pieniin ja helposti testattaviin osiin.",
      points: ["Nimen edessä oleva int määrittää tulostyypin", "return välittää arvon kutsujalle"],
      task: "Luo seatsLeft(int total, int occupied), joka palauttaa arvojen total ja occupied erotuksen.", requirements: ["Kaksi int-parametria", "Tuloksen tyyppi on int", "Palautus total - occupied"], hint: "Funktion runko voi olla yksi rivi: return total - occupied;", checks: ["Funktion määrittely on oikein", "Erotus palautetaan", "Funktiota kutsutaan arvoilla 24 ja 19"],
    },
    {
      stationTitle: "Muisti", stationCaption: "Viiteparametrit", title: "Muutetaan viitteen kautta", subtitle: "Työskennellään alkuperäisellä muuttujalla",
      body: "Parametri int& on viite olemassa olevaan muuttujaan. Viitteen muuttaminen muuttaa samaa oliota eikä kopiota luoda.",
      points: ["Merkki & kirjoitetaan tyypin jälkeen", "Viite sidotaan aina olioon"],
      task: "Luo void addPassenger(int& count), joka kasvattaa count-arvoa yhdellä.", requirements: ["Viiteparametri int&", "Funktio ei palauta arvoa", "count kasvaa yhdellä"], hint: "Funktion sisällä riittää lause ++count;", checks: ["Parametri välitetään viitteenä", "count-arvo kasvaa", "Funktiota kutsutaan passengers-muuttujalle"],
    },
    {
      stationTitle: "Luokat", stationCaption: "Oliot ja metodit", title: "Mallinnetaan laite", subtitle: "Tila ja toiminta samassa tyypissä",
      body: "Luokka kuvaa uuden tyypin. Konstruktori asettaa alkutilan, private suojaa datan ja public-metodit muodostavat käytettävän rajapinnan.",
      points: ["Alustuslista asettaa seats_-kentän", "const-metodi ei muuta oliota"],
      task: "Luo Ride-luokka, jossa on private int seats_, Ride(int seats) -konstruktori ja int capacity() const -metodi.", requirements: ["Julkinen konstruktori", "capacity() palauttaa seats_", "seats_ on private-osassa"], hint: "Konstruktori: Ride(int seats) : seats_(seats) {}", checks: ["Luokka ja public-osa löytyivät", "Konstruktori asettaa seats_", "capacity()-metodi on oikein"],
    },
  ],
  en: [
    {
      stationTitle: "Basics", stationCaption: "Output and main", title: "Your first program", subtitle: "The entry point and text output",
      body: "A C++ program starts in the main function. std::cout sends data to standard output, and a semicolon ends a statement.",
      points: ["#include <iostream> enables the output stream", "return 0 reports successful completion"],
      task: "Complete the program so it prints exactly: Hello, C++!", requirements: ["An int main() function", "Output through std::cout", "A return 0; statement"], hint: "Place this between the braces: std::cout << \"Hello, C++!\";", checks: ["main function found", "Exact text is printed", "Program returns 0"],
    },
    {
      stationTitle: "Data", stationCaption: "Types and variables", title: "Variables and arithmetic", subtitle: "Store whole and decimal values",
      body: "A type defines allowed values and operations. int stores whole numbers, while double stores decimal values. A variable name gives access to the stored value.",
      points: ["Declare a variable before using it", "The * operator performs multiplication"],
      task: "Create int visitors with value 24 and double price with value 3.5. Print their product.", requirements: ["An int variable named visitors", "A double variable named price", "Output visitors * price"], hint: "After the declarations, write: std::cout << visitors * price;", checks: ["visitors equals 24", "price equals 3.5", "The product is printed"],
    },
    {
      stationTitle: "Logic", stationCaption: "The for loop", title: "Repeat actions", subtitle: "A loop with a known number of steps",
      body: "A for loop has an initial value, a continuation condition and a counter update. Its body runs while the condition remains true.",
      points: ["The car counter starts at 1", "++car increases the value by one"],
      task: "Use a for loop to print car values from 1 through 3.", requirements: ["Counter int car = 1", "Condition car <= 3", "Output car inside the loop"], hint: "Start with: for (int car = 1; car <= 3; ++car)", checks: ["Loop starts at 1", "Loop continues through 3", "Counter is printed"],
    },
    {
      stationTitle: "Functions", stationCaption: "Parameters and return", title: "Build a function", subtitle: "Reuse one piece of logic",
      body: "A function receives parameters and can return a result. It divides a program into small parts that are easier to understand and test.",
      points: ["int before the name sets the result type", "return passes a value back to the caller"],
      task: "Create seatsLeft(int total, int occupied) that returns total minus occupied.", requirements: ["Two int parameters", "An int result", "Return total - occupied"], hint: "The function body can be one line: return total - occupied;", checks: ["Function signature is correct", "Difference is returned", "Function is called with 24 and 19"],
    },
    {
      stationTitle: "Memory", stationCaption: "Reference parameters", title: "Modify by reference", subtitle: "Work with the original variable",
      body: "An int& parameter refers to an existing variable. Changing the reference changes the same object, so no copy is created.",
      points: ["Write & after the type", "A reference must be bound to an object"],
      task: "Create void addPassenger(int& count) that increases count by one.", requirements: ["An int& reference parameter", "No return value", "Increase count"], hint: "The function only needs this statement: ++count;", checks: ["Parameter is passed by reference", "count is increased", "Function is called for passengers"],
    },
    {
      stationTitle: "Classes", stationCaption: "Objects and methods", title: "Model a ride", subtitle: "Keep state and behavior together",
      body: "A class describes a new type. A constructor sets initial state, private protects data, and public methods form the usable interface.",
      points: ["The initializer list sets the seats_ field", "A const method does not modify the object"],
      task: "Create class Ride with private int seats_, a Ride(int seats) constructor and an int capacity() const method.", requirements: ["A public constructor", "capacity() returns seats_", "seats_ is hidden in private"], hint: "Constructor: Ride(int seats) : seats_(seats) {}", checks: ["Class and public section found", "Constructor initializes seats_", "capacity() method is correct"],
    },
  ],
  th: [
    {
      stationTitle: "พื้นฐาน", stationCaption: "การแสดงผลและ main", title: "โปรแกรมแรกของคุณ", subtitle: "จุดเริ่มต้นและการแสดงข้อความ",
      body: "โปรแกรม C++ เริ่มทำงานที่ฟังก์ชัน main ส่วน std::cout ส่งข้อมูลไปยังเอาต์พุตมาตรฐาน และเครื่องหมายอัฒภาคใช้จบคำสั่ง",
      points: ["#include <iostream> ทำให้ใช้สตรีมเอาต์พุตได้", "return 0 แจ้งว่าโปรแกรมทำงานสำเร็จ"],
      task: "เติมโปรแกรมให้แสดงข้อความตรงตามนี้: Hello, C++!", requirements: ["มีฟังก์ชัน int main()", "แสดงผลด้วย std::cout", "มีคำสั่ง return 0;"], hint: "วางบรรทัดนี้ไว้ระหว่างวงเล็บปีกกา: std::cout << \"Hello, C++!\";", checks: ["พบฟังก์ชัน main", "แสดงข้อความได้ตรงตามกำหนด", "โปรแกรมคืนค่า 0"],
    },
    {
      stationTitle: "ข้อมูล", stationCaption: "ชนิดข้อมูลและตัวแปร", title: "ตัวแปรและการคำนวณ", subtitle: "เก็บจำนวนเต็มและทศนิยม",
      body: "ชนิดข้อมูลกำหนดค่าที่เก็บได้และการทำงานที่ใช้ได้ int เก็บจำนวนเต็ม ส่วน double เก็บจำนวนทศนิยม ชื่อตัวแปรช่วยให้เราเข้าถึงค่าที่เก็บไว้",
      points: ["ประกาศตัวแปรก่อนนำไปใช้", "ตัวดำเนินการ * ใช้สำหรับการคูณ"],
      task: "สร้าง int visitors ค่า 24 และ double price ค่า 3.5 แล้วแสดงผลคูณของทั้งสองค่า", requirements: ["ตัวแปร int ชื่อ visitors", "ตัวแปร double ชื่อ price", "แสดง visitors * price"], hint: "หลังการประกาศตัวแปร ให้เขียน: std::cout << visitors * price;", checks: ["visitors เท่ากับ 24", "price เท่ากับ 3.5", "มีการแสดงผลคูณ"],
    },
    {
      stationTitle: "ตรรกะ", stationCaption: "ลูป for", title: "ทำคำสั่งซ้ำ", subtitle: "ลูปที่รู้จำนวนรอบ",
      body: "ลูป for มีค่าเริ่มต้น เงื่อนไขทำต่อ และการเปลี่ยนค่าตัวนับ คำสั่งในบล็อกจะทำซ้ำตราบใดที่เงื่อนไขยังเป็นจริง",
      points: ["ตัวนับ car เริ่มที่ 1", "++car เพิ่มค่าทีละหนึ่ง"],
      task: "ใช้ลูป for เพื่อแสดงค่า car ตั้งแต่ 1 ถึง 3", requirements: ["ตัวนับ int car = 1", "เงื่อนไข car <= 3", "แสดงค่า car ภายในลูป"], hint: "เริ่มด้วย: for (int car = 1; car <= 3; ++car)", checks: ["ลูปเริ่มที่ 1", "ลูปทำงานถึง 3", "มีการแสดงค่าตัวนับ"],
    },
    {
      stationTitle: "ฟังก์ชัน", stationCaption: "พารามิเตอร์และ return", title: "สร้างฟังก์ชัน", subtitle: "นำตรรกะหนึ่งส่วนกลับมาใช้ซ้ำ",
      body: "ฟังก์ชันรับพารามิเตอร์และสามารถคืนผลลัพธ์ได้ ช่วยแบ่งโปรแกรมเป็นส่วนเล็ก ๆ ที่เข้าใจและทดสอบได้ง่ายขึ้น",
      points: ["int หน้าชื่อฟังก์ชันกำหนดชนิดผลลัพธ์", "return ส่งค่ากลับไปยังจุดที่เรียกใช้"],
      task: "สร้าง seatsLeft(int total, int occupied) ที่คืนค่า total ลบ occupied", requirements: ["พารามิเตอร์ int สองตัว", "ผลลัพธ์เป็น int", "คืนค่า total - occupied"], hint: "ภายในฟังก์ชันใช้เพียงบรรทัดเดียวได้: return total - occupied;", checks: ["รูปแบบฟังก์ชันถูกต้อง", "คืนค่าผลต่าง", "เรียกฟังก์ชันด้วย 24 และ 19"],
    },
    {
      stationTitle: "หน่วยความจำ", stationCaption: "พารามิเตอร์แบบอ้างอิง", title: "แก้ค่าผ่านการอ้างอิง", subtitle: "ทำงานกับตัวแปรต้นฉบับ",
      body: "พารามิเตอร์ int& อ้างถึงตัวแปรที่มีอยู่ การเปลี่ยนค่าผ่าน reference จะเปลี่ยนออบเจ็กต์เดิมโดยไม่สร้างสำเนา",
      points: ["เขียน & หลังชนิดข้อมูล", "reference ต้องผูกกับออบเจ็กต์เสมอ"],
      task: "สร้าง void addPassenger(int& count) ที่เพิ่มค่า count หนึ่งหน่วย", requirements: ["พารามิเตอร์อ้างอิง int&", "ไม่คืนค่า", "เพิ่มค่า count"], hint: "ในฟังก์ชันต้องมีเพียงคำสั่งนี้: ++count;", checks: ["ส่งพารามิเตอร์แบบอ้างอิง", "เพิ่มค่า count", "เรียกฟังก์ชันกับ passengers"],
    },
    {
      stationTitle: "คลาส", stationCaption: "ออบเจ็กต์และเมธอด", title: "สร้างแบบจำลองเครื่องเล่น", subtitle: "เก็บสถานะและพฤติกรรมไว้ด้วยกัน",
      body: "คลาสใช้อธิบายชนิดข้อมูลใหม่ constructor กำหนดสถานะเริ่มต้น private ปกป้องข้อมูล และเมธอด public สร้างอินเทอร์เฟซสำหรับใช้งาน",
      points: ["initializer list กำหนดค่าให้ฟิลด์ seats_", "เมธอด const ไม่แก้ไขออบเจ็กต์"],
      task: "สร้างคลาส Ride ที่มี private int seats_, constructor Ride(int seats) และเมธอด int capacity() const", requirements: ["constructor เป็น public", "capacity() คืนค่า seats_", "seats_ อยู่ในส่วน private"], hint: "Constructor: Ride(int seats) : seats_(seats) {}", checks: ["พบคลาสและส่วน public", "constructor กำหนดค่า seats_", "เมธอด capacity() ถูกต้อง"],
    },
  ],
};

export const exercises = [
  {
    starter: `#include <iostream>\n\nint main() {\n    // Write your output here\n\n    return 0;\n}`,
    validate: (code: string) => [
      /int\s+main\s*\(\s*\)/.test(code),
      /std::cout\s*<<\s*"Hello,\s*C\+\+!"/.test(code),
      /return\s+0\s*;/.test(code),
    ],
  },
  {
    starter: `#include <iostream>\n\nint main() {\n    // Create visitors and price\n\n    // Print the total cost\n\n    return 0;\n}`,
    validate: (code: string) => [
      /int\s+visitors\s*=\s*24\s*;/.test(code),
      /double\s+price\s*=\s*3(?:\.5|\.50)\s*;/.test(code),
      /std::cout\s*<<\s*visitors\s*\*\s*price\s*;/.test(code),
    ],
  },
  {
    starter: `#include <iostream>\n\nint main() {\n    // Use a for loop to print 1 2 3\n\n    return 0;\n}`,
    validate: (code: string) => [
      /for\s*\(\s*int\s+car\s*=\s*1\s*;/.test(code),
      /car\s*<=\s*3\s*;\s*(?:\+\+car|car\+\+)/.test(code),
      /std::cout\s*<<\s*car/.test(code),
    ],
  },
  {
    starter: `#include <iostream>\n\n// Create seatsLeft here\n\nint main() {\n    std::cout << seatsLeft(24, 19);\n    return 0;\n}`,
    validate: (code: string) => [
      /int\s+seatsLeft\s*\(\s*int\s+total\s*,\s*int\s+occupied\s*\)/.test(code),
      /return\s+total\s*-\s*occupied\s*;/.test(code),
      /seatsLeft\s*\(\s*24\s*,\s*19\s*\)/.test(code),
    ],
  },
  {
    starter: `#include <iostream>\n\n// Create addPassenger here\n\nint main() {\n    int passengers = 7;\n    addPassenger(passengers);\n    std::cout << passengers;\n}`,
    validate: (code: string) => [
      /void\s+addPassenger\s*\(\s*int\s*&\s*count\s*\)/.test(code),
      /(?:\+\+count|count\+\+)/.test(code),
      /addPassenger\s*\(\s*passengers\s*\)/.test(code),
    ],
  },
  {
    starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride coaster(24);\n    std::cout << coaster.capacity();\n}`,
    validate: (code: string) => [
      /class\s+Ride\s*\{[\s\S]*?public\s*:/.test(code),
      /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code),
      /int\s+capacity\s*\(\s*\)\s*const\s*\{\s*return\s+seats_\s*;\s*\}/.test(code),
    ],
  },
];
