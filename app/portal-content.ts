import type { Language } from "./content";

export type PortalCopy = {
  brand: string;
  brandSub: string;
  language: string;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  lead: string;
  choose: string;
  cppName: string;
  cppDesc: string;
  cppTopics: string[];
  pythonName: string;
  pythonDesc: string;
  pythonTopics: string[];
  openCourse: string;
  tasks: string;
  stations: string;
  languages: string;
  progress: string;
  savedLocally: string;
  footer: string;
};

export const portalCopy: Record<Language, PortalCopy> = {
  en: {
    brand: "CODE KNOWLEDGE PARK", brandSub: "LEARN BY BUILDING", language: "Language",
    eyebrow: "CHOOSE YOUR LEARNING TRACK", titleTop: "Two languages.", titleBottom: "One practical park.",
    lead: "Choose a route and learn by writing real code. Every topic starts with a careful explanation, then gives you ten exercises with instant, specific feedback.",
    choose: "SELECT A COURSE", cppName: "C++ Knowledge Park", cppDesc: "Learn program structure, data, logic, functions, memory and classes step by step.", cppTopics: ["Output", "Variables", "Loops", "Functions", "Memory", "Classes"],
    pythonName: "Python Knowledge Park", pythonDesc: "Learn Python syntax, data, control flow, functions, collections and objects through practice.", pythonTopics: ["Output", "Variables", "Logic", "Functions", "Collections", "Classes"],
    openCourse: "Open course", tasks: "exercises", stations: "topics", languages: "languages", progress: "Your progress", savedLocally: "Progress is saved separately for each course on this device.", footer: "Pick a language. Write code. Make it work.",
  },
  ru: {
    brand: "ПАРК ПРОГРАММИРОВАНИЯ", brandSub: "УЧИСЬ, СОЗДАВАЯ", language: "Язык",
    eyebrow: "ВЫБЕРИ СВОЙ МАРШРУТ", titleTop: "Два языка.", titleBottom: "Один практический парк.",
    lead: "Выбери маршрут и учись, самостоятельно создавая настоящий код. Каждая тема начинается с подробного объяснения, а затем предлагает десять заданий с мгновенной и конкретной проверкой.",
    choose: "ВЫБЕРИ КУРС", cppName: "Парк знаний C++", cppDesc: "Пошагово изучи структуру программы, данные, логику, функции, память и классы.", cppTopics: ["Вывод", "Переменные", "Циклы", "Функции", "Память", "Классы"],
    pythonName: "Парк знаний Python", pythonDesc: "Изучи синтаксис Python, данные, управление, функции, коллекции и объекты на практике.", pythonTopics: ["Вывод", "Переменные", "Логика", "Функции", "Коллекции", "Классы"],
    openCourse: "Открыть курс", tasks: "заданий", stations: "тем", languages: "языков", progress: "Твой прогресс", savedLocally: "Прогресс каждого курса сохраняется отдельно на этом устройстве.", footer: "Выбери язык. Напиши код. Заставь его работать.",
  },
  uk: {
    brand: "ПАРК ПРОГРАМУВАННЯ", brandSub: "НАВЧАЙСЯ, СТВОРЮЮЧИ", language: "Мова",
    eyebrow: "ОБЕРИ СВІЙ МАРШРУТ", titleTop: "Дві мови.", titleBottom: "Один практичний парк.",
    lead: "Обери маршрут і навчайся, самостійно створюючи справжній код. Кожна тема починається з докладного пояснення, а потім пропонує десять завдань із миттєвою та конкретною перевіркою.",
    choose: "ОБЕРИ КУРС", cppName: "Парк знань C++", cppDesc: "Крок за кроком вивчи структуру програми, дані, логіку, функції, пам’ять і класи.", cppTopics: ["Виведення", "Змінні", "Цикли", "Функції", "Пам’ять", "Класи"],
    pythonName: "Парк знань Python", pythonDesc: "Вивчи синтаксис Python, дані, керування, функції, колекції та об’єкти на практиці.", pythonTopics: ["Виведення", "Змінні", "Логіка", "Функції", "Колекції", "Класи"],
    openCourse: "Відкрити курс", tasks: "завдань", stations: "тем", languages: "мов", progress: "Твій прогрес", savedLocally: "Прогрес кожного курсу зберігається окремо на цьому пристрої.", footer: "Обери мову. Напиши код. Змусь його працювати.",
  },
  fi: {
    brand: "OHJELMOINNIN OPPIMISPUISTO", brandSub: "OPI RAKENTAMALLA", language: "Kieli",
    eyebrow: "VALITSE OPPIMISREITTISI", titleTop: "Kaksi kieltä.", titleBottom: "Yksi käytännön puisto.",
    lead: "Valitse reitti ja opi kirjoittamalla oikeaa koodia. Jokainen aihe alkaa huolellisella selityksellä ja jatkuu kymmenellä tehtävällä, joista saat välittömän ja täsmällisen palautteen.",
    choose: "VALITSE KURSSI", cppName: "C++-oppimispuisto", cppDesc: "Opi vaiheittain ohjelman rakenne, data, logiikka, funktiot, muisti ja luokat.", cppTopics: ["Tulostus", "Muuttujat", "Silmukat", "Funktiot", "Muisti", "Luokat"],
    pythonName: "Python-oppimispuisto", pythonDesc: "Opi Pythonin syntaksi, data, ohjausrakenteet, funktiot, kokoelmat ja oliot harjoittelemalla.", pythonTopics: ["Tulostus", "Muuttujat", "Logiikka", "Funktiot", "Kokoelmat", "Luokat"],
    openCourse: "Avaa kurssi", tasks: "tehtävää", stations: "aihetta", languages: "kieltä", progress: "Edistymisesi", savedLocally: "Kunkin kurssin edistyminen tallennetaan erikseen tälle laitteelle.", footer: "Valitse kieli. Kirjoita koodia. Saa se toimimaan.",
  },
  th: {
    brand: "สวนแห่งการเขียนโปรแกรม", brandSub: "เรียนรู้ด้วยการลงมือสร้าง", language: "ภาษา",
    eyebrow: "เลือกเส้นทางการเรียนรู้", titleTop: "สองภาษาโปรแกรม.", titleBottom: "หนึ่งสวนฝึกปฏิบัติ.",
    lead: "เลือกเส้นทางแล้วเรียนรู้ด้วยการเขียนโค้ดจริง แต่ละหัวข้อเริ่มด้วยคำอธิบายอย่างละเอียด จากนั้นมีแบบฝึกหัดสิบข้อพร้อมผลตรวจที่รวดเร็วและชัดเจน",
    choose: "เลือกหลักสูตร", cppName: "สวนความรู้ C++", cppDesc: "เรียนรู้โครงสร้างโปรแกรม ข้อมูล ตรรกะ ฟังก์ชัน หน่วยความจำ และคลาสทีละขั้น",
    cppTopics: ["การแสดงผล", "ตัวแปร", "ลูป", "ฟังก์ชัน", "หน่วยความจำ", "คลาส"],
    pythonName: "สวนความรู้ Python", pythonDesc: "เรียนรู้ไวยากรณ์ Python ข้อมูล การควบคุม ฟังก์ชัน คอลเลกชัน และออบเจ็กต์ด้วยการฝึกปฏิบัติ",
    pythonTopics: ["การแสดงผล", "ตัวแปร", "ตรรกะ", "ฟังก์ชัน", "คอลเลกชัน", "คลาส"],
    openCourse: "เปิดหลักสูตร", tasks: "แบบฝึกหัด", stations: "หัวข้อ", languages: "ภาษา", progress: "ความคืบหน้าของคุณ", savedLocally: "ความคืบหน้าของแต่ละหลักสูตรจะถูกบันทึกแยกกันในอุปกรณ์นี้", footer: "เลือกภาษา เขียนโค้ด และทำให้มันทำงาน",
  },
};
