import { languageOptions, ui, type Language, type LessonCopy } from "../content";
import { academyUi } from "../curriculum";
import type { PythonTask } from "./python-tasks";
import { pythonTaskGoals } from "./python-goals";

export { languageOptions, academyUi, type Language };

const pythonOverrides: Record<Language, Partial<(typeof ui)[Language]>> = {
  en: {
    brand: "Python Park", brandSub: "Interactive Python route", eyebrow: "LEARN BY WRITING CODE", heroTop: "Write code.", heroBottom: "Understand Python.",
    lead: "Every station explains new syntax before you use it, then gives you 10 practical exercises with precise feedback.", start: "Start the first exercise",
    pipelineTitle: "How Python runs your script", pipelineLead: "Python usually runs source code through an interpreter. Select each stop to see what happens.",
    mapTitle: "Six Python practice stations", mapLead: "Each station introduces one layer at a time and finishes with code you write and check yourself.",
    checkDisclaimer: "The trainer checks the expected Python structure and logic in your answer. It does not execute arbitrary Python code in the browser.",
    progressLead: "Each station contains 10 exercises. Python progress is saved separately on this device.", unlocked: "Route complete! You finished all 60 Python foundation exercises.",
    locked: "Complete all 60 Python exercises to unlock the final ticket.", footer: "Next stop: a Python project of your own.",
    pipelineLabels: ["Source", "Tokenize", "Compile", "Bytecode", "Run"],
    pipelineTexts: ["You write readable instructions in a file with the .py extension.", "Python recognizes names, numbers, strings and punctuation as tokens.", "The interpreter checks syntax and compiles the source internally.", "Python creates bytecode, a compact set of instructions for its virtual machine.", "The Python virtual machine executes the bytecode and produces the result."],
  },
  ru: {
    brand: "Парк Python", brandSub: "Интерактивный маршрут Python", eyebrow: "УЧИСЬ, ПИШУЩИ КОД", heroTop: "Пиши код.", heroBottom: "Понимай Python.",
    lead: "На каждой станции новый синтаксис сначала подробно объясняется, а затем закрепляется в 10 практических заданиях с точной проверкой.", start: "Начать первое задание",
    pipelineTitle: "Как Python запускает скрипт", pipelineLead: "Обычно Python выполняет исходный код через интерпретатор. Выбери этап, чтобы узнать, что происходит.",
    mapTitle: "Шесть практических станций Python", mapLead: "Каждая станция добавляет знания постепенно и заканчивается кодом, который ты пишешь и проверяешь сам.",
    checkDisclaimer: "Тренажёр проверяет ожидаемую структуру и логику ответа на Python. Произвольный Python-код напрямую в браузере не запускается.",
    progressLead: "На каждой станции 10 заданий. Прогресс Python сохраняется на этом устройстве отдельно от C++.", unlocked: "Маршрут завершён! Ты выполнил все 60 базовых заданий по Python.",
    locked: "Выполни все 60 заданий Python, чтобы получить финальный билет.", footer: "Следующая остановка: твой собственный проект на Python.",
    pipelineLabels: ["Исходник", "Токены", "Проверка", "Байт-код", "Запуск"],
    pipelineTexts: ["Ты пишешь понятные инструкции в файле с расширением .py.", "Python распознаёт имена, числа, строки и знаки как отдельные токены.", "Интерпретатор проверяет синтаксис и внутренне компилирует исходный код.", "Python создаёт байт-код, то есть компактные инструкции для виртуальной машины.", "Виртуальная машина Python выполняет байт-код и создаёт результат."],
  },
  uk: {
    brand: "Парк Python", brandSub: "Інтерактивний маршрут Python", eyebrow: "НАВЧАЙСЯ, ПИШУЧИ КОД", heroTop: "Пиши код.", heroBottom: "Розумій Python.",
    lead: "На кожній станції новий синтаксис спочатку докладно пояснюється, а потім закріплюється у 10 практичних завданнях із точною перевіркою.", start: "Почати перше завдання",
    pipelineTitle: "Як Python запускає скрипт", pipelineLead: "Зазвичай Python виконує код через інтерпретатор. Обери етап, щоб дізнатися, що відбувається.",
    mapTitle: "Шість практичних станцій Python", mapLead: "Кожна станція додає знання поступово й завершується кодом, який ти пишеш і перевіряєш сам.",
    checkDisclaimer: "Тренажер перевіряє очікувану структуру й логіку відповіді Python. Довільний Python-код безпосередньо в браузері не запускається.",
    progressLead: "На кожній станції 10 завдань. Прогрес Python зберігається на цьому пристрої окремо від C++.", unlocked: "Маршрут завершено! Ти виконав усі 60 базових завдань Python.",
    locked: "Виконай усі 60 завдань Python, щоб отримати фінальний квиток.", footer: "Наступна зупинка: твій власний проєкт на Python.",
    pipelineLabels: ["Код", "Токени", "Перевірка", "Байт-код", "Запуск"],
    pipelineTexts: ["Ти пишеш зрозумілі інструкції у файлі з розширенням .py.", "Python розпізнає імена, числа, рядки та знаки як окремі токени.", "Інтерпретатор перевіряє синтаксис і внутрішньо компілює код.", "Python створює байт-код, тобто компактні інструкції для віртуальної машини.", "Віртуальна машина Python виконує байт-код і створює результат."],
  },
  fi: {
    brand: "Python-puisto", brandSub: "Interaktiivinen Python-reitti", eyebrow: "OPI KIRJOITTAMALLA KOODIA", heroTop: "Kirjoita koodia.", heroBottom: "Ymmärrä Pythonia.",
    lead: "Jokaisella asemalla uusi syntaksi selitetään ensin tarkasti ja sitä harjoitellaan sitten 10 tehtävässä täsmällisen palautteen avulla.", start: "Aloita ensimmäinen tehtävä",
    pipelineTitle: "Näin Python suorittaa skriptin", pipelineLead: "Python suorittaa lähdekoodin tavallisesti tulkin kautta. Valitse vaihe ja katso, mitä tapahtuu.",
    mapTitle: "Kuusi Python-harjoitusasemaa", mapLead: "Jokainen asema lisää vain yhden uuden kerroksen ja päättyy itse kirjoitettavaan ja tarkistettavaan koodiin.",
    checkDisclaimer: "Harjoitin tarkistaa vastauksen odotetun Python-rakenteen ja logiikan. Se ei suorita vapaata Python-koodia selaimessa.",
    progressLead: "Jokaisella asemalla on 10 tehtävää. Python-edistyminen tallennetaan tälle laitteelle erikseen.", unlocked: "Reitti valmis! Suoritit kaikki 60 Python-perustehtävää.",
    locked: "Suorita kaikki 60 Python-tehtävää avataksesi loppulipun.", footer: "Seuraava pysäkki: oma Python-projektisi.",
    pipelineLabels: ["Lähde", "Tokenit", "Tarkistus", "Tavukoodi", "Suoritus"],
    pipelineTexts: ["Kirjoitat luettavat ohjeet .py-päätteiseen tiedostoon.", "Python tunnistaa nimet, numerot, merkkijonot ja välimerkit tokeneiksi.", "Tulkki tarkistaa syntaksin ja kääntää lähteen sisäisesti.", "Python luo tavukoodin virtuaalikoneensa ohjeiksi.", "Pythonin virtuaalikone suorittaa tavukoodin ja tuottaa tuloksen."],
  },
  th: {
    brand: "สวน Python", brandSub: "เส้นทาง Python แบบโต้ตอบ", eyebrow: "เรียนรู้ด้วยการเขียนโค้ด", heroTop: "เขียนโค้ด", heroBottom: "เข้าใจ Python",
    lead: "ทุกสถานีอธิบายไวยากรณ์ใหม่อย่างละเอียดก่อน แล้วให้ฝึก 10 ข้อพร้อมคำตรวจที่ชัดเจน", start: "เริ่มโจทย์แรก",
    pipelineTitle: "Python รันสคริปต์อย่างไร", pipelineLead: "โดยทั่วไป Python ทำงานผ่านอินเทอร์พรีเตอร์ เลือกแต่ละขั้นเพื่อดูว่าเกิดอะไรขึ้น",
    mapTitle: "หกสถานีฝึก Python", mapLead: "แต่ละสถานีเพิ่มความรู้ทีละเรื่องและจบด้วยโค้ดที่คุณเขียนและตรวจเอง",
    checkDisclaimer: "แบบฝึกหัดตรวจโครงสร้างและตรรกะ Python ที่คาดหวัง โดยไม่ได้รันโค้ด Python ใด ๆ โดยตรงในเบราว์เซอร์",
    progressLead: "แต่ละสถานีมี 10 แบบฝึกหัด ความคืบหน้า Python จะบันทึกแยกจาก C++ บนอุปกรณ์นี้", unlocked: "เส้นทางเสร็จสมบูรณ์! คุณทำโจทย์พื้นฐาน Python ครบทั้ง 60 ข้อแล้ว",
    locked: "ทำโจทย์ Python ทั้ง 60 ข้อให้ครบเพื่อรับตั๋วสุดท้าย", footer: "สถานีถัดไปคือโปรเจกต์ Python ของคุณเอง",
    pipelineLabels: ["ซอร์สโค้ด", "โทเคน", "ตรวจสอบ", "ไบต์โค้ด", "เรียกใช้"],
    pipelineTexts: ["คุณเขียนคำสั่งที่อ่านง่ายในไฟล์นามสกุล .py", "Python แยกชื่อ ตัวเลข สตริง และเครื่องหมายออกเป็นโทเคน", "อินเทอร์พรีเตอร์ตรวจไวยากรณ์และคอมไพล์ภายใน", "Python สร้างไบต์โค้ดเป็นคำสั่งแบบย่อสำหรับเครื่องเสมือน", "เครื่องเสมือน Python รันไบต์โค้ดและสร้างผลลัพธ์"],
  },
};

export const pythonUi = Object.fromEntries(languageOptions.map(({ code }) => [code, { ...ui[code], ...pythonOverrides[code] }])) as typeof ui;

const lesson = (stationTitle: string, stationCaption: string, title: string, subtitle: string, body: string, points: string[]): LessonCopy => ({
  stationTitle, stationCaption, title, subtitle, body, points, task: "", requirements: [], hint: "", checks: [],
});

export const pythonLessons: Record<Language, LessonCopy[]> = {
  en: [
    lesson("Basics", "print and text", "Your first Python script", "Parentheses, quotes and visible output", "A Python command can call a function. In print(\"Hello\"), print is the function name, parentheses contain its arguments, and quotes mark text. Numbers are values and normally do not need quotes.", ["Every opening quote and parenthesis needs a matching closing one", "Python separates multiple print values with commas"]),
    lesson("Data", "values and variables", "Variables and data types", "Store, change and combine values", "The equals sign assigns the value on the right to the name on the left. Python determines whether that value is an integer, decimal, Boolean or string from the value itself.", ["Text needs quotes; numbers and True do not", "A variable name is used later without quotes"]),
    lesson("Logic", "conditions and loops", "Choose and repeat", "Colons and indentation control blocks", "if chooses a block when a condition is true. for and while repeat a block. A colon starts the block and consistent indentation shows which lines belong to it.", ["== compares values, while = assigns a value", "range stops before its final number"]),
    lesson("Functions", "parameters and return", "Create reusable functions", "Give logic a name", "def creates a function. Parameters receive values from a call, an indented body performs the work, and return sends a result back to the calling code.", ["A definition does not run until the function is called", "print shows a value; return gives a value back"]),
    lesson("Collections", "lists and dictionaries", "Work with groups of values", "Store, find and transform data", "A list keeps ordered values and uses numeric indexes starting at 0. A dictionary connects keys to values, so you can find data by a meaningful name.", ["Square brackets create lists and select items", "append changes a list; len and sum calculate results"]),
    lesson("Classes", "objects and methods", "Model your own objects", "Combine state and behaviour", "A class describes a new kind of object. __init__ prepares each object, self refers to that current object, attributes store its state, and methods describe what it can do.", ["Every instance method receives self first", "Different objects keep independent attribute values"]),
  ],
  ru: [
    lesson("Основа", "print и текст", "Первый скрипт Python", "Скобки, кавычки и видимый вывод", "Команда Python может вызывать функцию. В print(\"Hello\") слово print является именем функции, круглые скобки содержат её аргументы, а кавычки обозначают текст. Числа являются значениями и обычно пишутся без кавычек.", ["У каждой открывающей кавычки и скобки должна быть закрывающая", "Несколько значений внутри print разделяются запятыми"]),
    lesson("Данные", "значения и переменные", "Переменные и типы данных", "Сохраняем, изменяем и объединяем значения", "Знак равенства присваивает имя слева значению справа. Python сам определяет, является ли значение целым числом, дробью, логическим значением или строкой.", ["Текст пишется в кавычках, а числа и True без них", "Имя переменной при использовании не берут в кавычки"]),
    lesson("Логика", "условия и циклы", "Выбираем и повторяем", "Двоеточие и отступы управляют блоками", "if выполняет блок, когда условие истинно. for и while повторяют блок. Двоеточие начинает блок, а одинаковый отступ показывает, какие команды находятся внутри него.", ["== сравнивает значения, а = присваивает значение", "range не включает последнее указанное число"]),
    lesson("Функции", "параметры и return", "Создаём функции", "Даём повторяемой логике имя", "def создаёт функцию. Параметры получают значения из вызова, тело с отступом выполняет работу, а return возвращает результат в место вызова.", ["Определение не запускается, пока функцию не вызвали", "print показывает значение, а return передаёт его обратно"]),
    lesson("Коллекции", "списки и словари", "Работаем с группами значений", "Храним, находим и преобразуем данные", "Список хранит значения по порядку и использует индексы, начиная с 0. Словарь связывает ключи со значениями, поэтому данные можно найти по понятному имени.", ["Квадратные скобки создают списки и выбирают элементы", "append изменяет список, len и sum вычисляют результаты"]),
    lesson("Классы", "объекты и методы", "Моделируем собственные объекты", "Объединяем состояние и поведение", "Класс описывает новый вид объектов. __init__ подготавливает каждый объект, self обозначает именно этот объект, атрибуты хранят его состояние, а методы описывают действия.", ["Каждый обычный метод первым получает self", "Разные объекты хранят независимые значения атрибутов"]),
  ],
  uk: [
    lesson("Основа", "print і текст", "Перший скрипт Python", "Дужки, лапки та видимий вивід", "Команда Python може викликати функцію. У print(\"Hello\") print є назвою функції, круглі дужки містять аргументи, а лапки позначають текст. Числа є значеннями й зазвичай пишуться без лапок.", ["Кожна відкрита лапка та дужка повинна мати пару", "Кілька значень у print розділяються комами"]),
    lesson("Дані", "значення та змінні", "Змінні й типи даних", "Зберігаємо, змінюємо та поєднуємо значення", "Знак рівності надає імені ліворуч значення праворуч. Python сам визначає, чи є значення цілим числом, дробом, логічним значенням або рядком.", ["Текст пишуть у лапках, а числа й True без них", "Ім’я змінної під час використання не беруть у лапки"]),
    lesson("Логіка", "умови та цикли", "Обираємо й повторюємо", "Двокрапка та відступи керують блоками", "if виконує блок, коли умова істинна. for і while повторюють блок. Двокрапка починає блок, а однаковий відступ показує команди всередині нього.", ["== порівнює значення, а = надає значення", "range не включає останнє вказане число"]),
    lesson("Функції", "параметри та return", "Створюємо функції", "Даємо повторюваній логіці ім’я", "def створює функцію. Параметри отримують значення з виклику, тіло з відступом виконує роботу, а return повертає результат до місця виклику.", ["Визначення не працює, доки функцію не викликали", "print показує значення, а return передає його назад"]),
    lesson("Колекції", "списки та словники", "Працюємо з групами значень", "Зберігаємо, знаходимо та перетворюємо дані", "Список зберігає значення за порядком та використовує індекси від 0. Словник пов’язує ключі зі значеннями, тому дані можна знайти за зрозумілим ім’ям.", ["Квадратні дужки створюють списки та обирають елементи", "append змінює список, len і sum обчислюють результати"]),
    lesson("Класи", "об’єкти та методи", "Моделюємо власні об’єкти", "Поєднуємо стан і поведінку", "Клас описує новий вид об’єктів. __init__ готує кожен об’єкт, self означає саме цей об’єкт, атрибути зберігають його стан, а методи описують дії.", ["Кожен звичайний метод першим отримує self", "Різні об’єкти зберігають незалежні значення атрибутів"]),
  ],
  fi: [
    lesson("Perusteet", "print ja teksti", "Ensimmäinen Python-skripti", "Sulkeet, lainausmerkit ja tulostus", "Python-komento voi kutsua funktiota. Komennossa print(\"Hello\") print on funktion nimi, sulkeet sisältävät argumentit ja lainausmerkit merkitsevät tekstin. Numerot kirjoitetaan tavallisesti ilman lainausmerkkejä.", ["Jokainen avattu lainausmerkki ja sulje tarvitsee parin", "Useat print-arvot erotetaan pilkuilla"]),
    lesson("Tiedot", "arvot ja muuttujat", "Muuttujat ja tietotyypit", "Tallenna, muuta ja yhdistä arvoja", "Yhtäsuuruusmerkki antaa vasemmalla olevalle nimelle oikealla olevan arvon. Python päättelee itse, onko arvo kokonaisluku, desimaali, totuusarvo vai merkkijono.", ["Teksti tarvitsee lainausmerkit, numerot ja True eivät", "Muuttujan nimeä ei käytettäessä lainata"]),
    lesson("Logiikka", "ehdot ja silmukat", "Valitse ja toista", "Kaksoispiste ja sisennys muodostavat lohkot", "if valitsee lohkon ehdon ollessa tosi. for ja while toistavat lohkoa. Kaksoispiste aloittaa lohkon, ja yhtenäinen sisennys osoittaa sen sisältämät rivit.", ["== vertaa arvoja, kun taas = antaa arvon", "range ei sisällä viimeistä rajaa"]),
    lesson("Funktiot", "parametrit ja return", "Luo uudelleenkäytettäviä funktioita", "Anna logiikalle nimi", "def luo funktion. Parametrit vastaanottavat kutsun arvot, sisennetty runko tekee työn ja return palauttaa tuloksen kutsujalle.", ["Määrittely ei suoritu ennen funktion kutsua", "print näyttää arvon, return palauttaa sen"]),
    lesson("Kokoelmat", "listat ja sanakirjat", "Käsittele arvoryhmiä", "Tallenna, etsi ja muunna tietoa", "Lista säilyttää arvot järjestyksessä ja käyttää indeksejä nollasta alkaen. Sanakirja yhdistää avaimet arvoihin, joten tieto löytyy kuvaavalla nimellä.", ["Hakasulkeet luovat listan ja valitsevat alkion", "append muuttaa listaa, len ja sum laskevat tuloksia"]),
    lesson("Luokat", "oliot ja metodit", "Mallinna omia olioita", "Yhdistä tila ja toiminta", "Luokka kuvaa uuden oliotyypin. __init__ alustaa jokaisen olion, self tarkoittaa nykyistä oliota, attribuutit tallentavat tilan ja metodit kuvaavat toiminnan.", ["Jokainen instanssimetodi saa ensin self-parametrin", "Eri oliot säilyttävät omat attribuuttiarvonsa"]),
  ],
  th: [
    lesson("พื้นฐาน", "print และข้อความ", "สคริปต์ Python แรก", "วงเล็บ เครื่องหมายคำพูด และผลลัพธ์", "คำสั่ง Python เรียกฟังก์ชันได้ ใน print(\"Hello\") คำว่า print คือชื่อฟังก์ชัน วงเล็บเก็บอาร์กิวเมนต์ และเครื่องหมายคำพูดบอกว่าเป็นข้อความ ส่วนตัวเลขปกติไม่ต้องใส่เครื่องหมายคำพูด", ["เครื่องหมายคำพูดและวงเล็บที่เปิดต้องมีคู่ปิด", "ค่าหลายค่าใน print คั่นด้วยจุลภาค"]),
    lesson("ข้อมูล", "ค่าและตัวแปร", "ตัวแปรและชนิดข้อมูล", "เก็บ เปลี่ยน และรวมค่า", "เครื่องหมายเท่ากับกำหนดค่าด้านขวาให้ชื่อด้านซ้าย Python ตรวจเองว่าค่านั้นเป็นจำนวนเต็ม ทศนิยม บูลีน หรือสตริง", ["ข้อความต้องมีเครื่องหมายคำพูด แต่ตัวเลขและ True ไม่ต้องมี", "เวลาใช้ชื่อตัวแปรไม่ต้องใส่เครื่องหมายคำพูด"]),
    lesson("ตรรกะ", "เงื่อนไขและลูป", "เลือกและทำซ้ำ", "โคลอนและการเยื้องสร้างบล็อก", "if เลือกทำบล็อกเมื่อเงื่อนไขเป็นจริง ส่วน for และ while ทำบล็อกซ้ำ โคลอนเริ่มบล็อก และการเยื้องที่เท่ากันบอกว่าบรรทัดใดอยู่ในบล็อก", ["== ใช้เปรียบเทียบ ส่วน = ใช้กำหนดค่า", "range ไม่รวมเลขขอบเขตตัวสุดท้าย"]),
    lesson("ฟังก์ชัน", "พารามิเตอร์และ return", "สร้างฟังก์ชันใช้ซ้ำ", "ตั้งชื่อให้ตรรกะ", "def สร้างฟังก์ชัน พารามิเตอร์รับค่าจากการเรียก บล็อกที่เยื้องทำงาน และ return ส่งผลลัพธ์กลับไปยังจุดที่เรียก", ["การประกาศยังไม่ทำงานจนกว่าจะเรียกฟังก์ชัน", "print แสดงค่า ส่วน return ส่งค่ากลับ"]),
    lesson("คอลเลกชัน", "ลิสต์และดิกชันนารี", "ทำงานกับกลุ่มค่า", "เก็บ ค้นหา และแปลงข้อมูล", "ลิสต์เก็บค่าตามลำดับและใช้อินเด็กซ์เริ่มที่ 0 ดิกชันนารีเชื่อมคีย์กับค่า จึงค้นข้อมูลด้วยชื่อที่เข้าใจง่ายได้", ["วงเล็บเหลี่ยมใช้สร้างลิสต์และเลือกสมาชิก", "append เปลี่ยนลิสต์ ส่วน len และ sum คำนวณผลลัพธ์"]),
    lesson("คลาส", "ออบเจ็กต์และเมธอด", "สร้างแบบจำลองออบเจ็กต์", "รวมสถานะและพฤติกรรม", "คลาสอธิบายออบเจ็กต์ชนิดใหม่ __init__ เตรียมแต่ละออบเจ็กต์ self หมายถึงออบเจ็กต์ปัจจุบัน แอตทริบิวต์เก็บสถานะ และเมธอดอธิบายการทำงาน", ["เมธอดของออบเจ็กต์รับ self เป็นตัวแรก", "ออบเจ็กต์แต่ละตัวเก็บค่าแอตทริบิวต์แยกกัน"]),
  ],
};

const instructionPrefix: Record<Language, string> = {
  en: "Write the code shown by the goal, paying attention to every symbol",
  ru: "Напиши решение по условию, обращая внимание на каждый знак",
  uk: "Напиши розв’язання за умовою, звертаючи увагу на кожен знак",
  fi: "Kirjoita tavoitteen mukainen ratkaisu ja huomioi jokainen merkki",
  th: "เขียนคำตอบตามเป้าหมายและสังเกตเครื่องหมายทุกตัว",
};

const stationPractice: Record<Language, string[]> = {
  en: ["Use print, parentheses and the correct form of values.", "Create variables, use the requested data type and print the result.", "Build the condition or loop with a colon and correct indentation.", "Define the function, return or print the requested value, and use the call.", "Create or change the collection with the requested list or dictionary operation.", "Define the class, store data through self and call the requested method."],
  ru: ["Используй print, круглые скобки и правильную форму значений.", "Создай переменные, используй нужный тип данных и выведи результат.", "Собери условие или цикл с двоеточием и правильными отступами.", "Определи функцию, верни или выведи нужное значение и используй вызов.", "Создай или измени коллекцию нужной операцией списка либо словаря.", "Определи класс, сохрани данные через self и вызови нужный метод."],
  uk: ["Використай print, круглі дужки та правильну форму значень.", "Створи змінні, використай потрібний тип і виведи результат.", "Склади умову або цикл із двокрапкою та правильними відступами.", "Визнач функцію, поверни або виведи потрібне значення та використай виклик.", "Створи або зміни колекцію потрібною операцією списку чи словника.", "Визнач клас, збережи дані через self і виклич потрібний метод."],
  fi: ["Käytä print-funktiota, sulkeita ja arvojen oikeaa muotoa.", "Luo muuttujat, käytä pyydettyä tietotyyppiä ja tulosta tulos.", "Rakenna ehto tai silmukka kaksoispisteellä ja oikealla sisennyksellä.", "Määritä funktio, palauta tai tulosta arvo ja käytä kutsua.", "Luo tai muuta kokoelmaa pyydetyllä lista- tai sanakirjaoperaatiolla.", "Määritä luokka, tallenna tieto self-viittauksella ja kutsu metodia."],
  th: ["ใช้ print วงเล็บ และรูปแบบค่าที่ถูกต้อง", "สร้างตัวแปร ใช้ชนิดข้อมูลที่กำหนด และแสดงผลลัพธ์", "สร้างเงื่อนไขหรือลูปด้วยโคลอนและการเยื้องที่ถูกต้อง", "ประกาศฟังก์ชัน คืนค่าหรือแสดงค่าที่กำหนด แล้วใช้การเรียก", "สร้างหรือแก้คอลเลกชันด้วยคำสั่งของลิสต์หรือดิกชันนารี", "ประกาศคลาส เก็บข้อมูลผ่าน self และเรียกเมธอดที่กำหนด"],
};

const expectedResult: Record<Language, string> = { en: "Expected result", ru: "Ожидаемый результат", uk: "Очікуваний результат", fi: "Odotettu tulos", th: "ผลลัพธ์ที่คาดหวัง" };

export const buildPythonInstruction = (language: Language, station: number, task: PythonTask, taskIndex = 0) => `${pythonTaskGoals[language][station][taskIndex]} ${instructionPrefix[language]}. ${stationPractice[language][station]} ${expectedResult[language]}: ${task.output}`;

const conceptLead: Record<Language, string[]> = {
  en: ["Before typing: text belongs inside matching quotes, numbers do not. A print call starts with print, opens (, contains the value, and closes ).", "Before typing: = assigns a value to a name. Quote strings, write numbers directly, and use the variable name without quotes when reading it.", "Before typing: a colon opens the block and indentation is part of Python syntax. Lines at the same indentation belong to the same block.", "Before typing: def names the function and its parameters. The indented body runs on a call; return sends a value back instead of displaying it.", "Before typing: lists use ordered positions starting at 0, while dictionaries use named keys. Brackets select an item and methods such as append change a list.", "Before typing: __init__ receives self and the starting values. Store them as self.name, then other methods can read or change the same object's data."],
  ru: ["Перед набором кода: текст помещают между парными кавычками, а числа пишут без них. Вызов начинается со слова print, затем открывается (, внутри находится значение и в конце закрывается ).", "Перед набором кода: знак = присваивает значение имени. Строки заключай в кавычки, числа пиши напрямую, а при чтении переменной используй её имя без кавычек.", "Перед набором кода: двоеточие открывает блок, а отступ является частью синтаксиса Python. Строки с одинаковым отступом относятся к одному блоку.", "Перед набором кода: def задаёт имя функции и параметры. Тело с отступом работает при вызове, а return возвращает значение вместо его вывода на экран.", "Перед набором кода: список хранит позиции от 0, а словарь использует именованные ключи. Квадратные скобки выбирают элемент, а методы вроде append изменяют список.", "Перед набором кода: __init__ получает self и начальные значения. Сохрани их как self.name, после чего другие методы смогут читать и изменять данные того же объекта."],
  uk: ["Перед набором коду: текст розміщують між парними лапками, а числа пишуть без них. Виклик починається зі слова print, далі відкривається (, усередині стоїть значення і в кінці закривається ).", "Перед набором коду: знак = надає значення імені. Рядки бери в лапки, числа пиши прямо, а під час читання змінної використовуй її ім’я без лапок.", "Перед набором коду: двокрапка відкриває блок, а відступ є частиною синтаксису Python. Рядки з однаковим відступом належать одному блоку.", "Перед набором коду: def задає назву функції та параметри. Тіло з відступом працює під час виклику, а return повертає значення замість показу на екрані.", "Перед набором коду: список зберігає позиції від 0, а словник використовує іменовані ключі. Квадратні дужки обирають елемент, методи на кшталт append змінюють список.", "Перед набором коду: __init__ отримує self і початкові значення. Збережи їх як self.name, після чого інші методи зможуть читати й змінювати дані цього об’єкта."],
  fi: ["Ennen koodausta: teksti kuuluu lainausmerkkien väliin, numerot eivät. Kutsu alkaa sanalla print, avaa sulkeen (, sisältää arvon ja sulkee lopuksi ).", "Ennen koodausta: = antaa arvon nimelle. Lainaa merkkijonot, kirjoita numerot suoraan ja lue muuttujaa sen nimellä ilman lainausmerkkejä.", "Ennen koodausta: kaksoispiste avaa lohkon ja sisennys kuuluu Pythonin syntaksiin. Samalla sisennyksellä olevat rivit kuuluvat samaan lohkoon.", "Ennen koodausta: def nimeää funktion ja parametrit. Sisennetty runko suoritetaan kutsussa, ja return palauttaa arvon näyttämisen sijasta.", "Ennen koodausta: listan järjestysnumerot alkavat nollasta, sanakirja käyttää nimettyjä avaimia. Hakasulkeet valitsevat alkion ja append muuttaa listaa.", "Ennen koodausta: __init__ saa self-viitteen ja alkuarvot. Tallenna ne muodossa self.name, jotta muut metodit voivat käyttää saman olion tietoja."],
  th: ["ก่อนพิมพ์โค้ด: ข้อความอยู่ในเครื่องหมายคำพูดที่เป็นคู่ แต่ตัวเลขไม่ต้องมี การเรียกเริ่มด้วย print เปิด ( ใส่ค่าไว้ข้างใน และปิดด้วย )", "ก่อนพิมพ์โค้ด: = กำหนดค่าให้ชื่อ สตริงต้องมีเครื่องหมายคำพูด ตัวเลขเขียนตรง ๆ และเวลาอ่านตัวแปรให้ใช้ชื่อโดยไม่ใส่เครื่องหมายคำพูด", "ก่อนพิมพ์โค้ด: โคลอนเปิดบล็อก และการเยื้องเป็นส่วนหนึ่งของไวยากรณ์ Python บรรทัดที่เยื้องเท่ากันอยู่ในบล็อกเดียวกัน", "ก่อนพิมพ์โค้ด: def ตั้งชื่อฟังก์ชันและพารามิเตอร์ บล็อกที่เยื้องทำงานเมื่อเรียก และ return ส่งค่ากลับแทนการแสดงผล", "ก่อนพิมพ์โค้ด: ลิสต์ใช้ตำแหน่งเริ่มที่ 0 ส่วนดิกชันนารีใช้คีย์ วงเล็บเหลี่ยมเลือกสมาชิก และเมธอดอย่าง append เปลี่ยนลิสต์", "ก่อนพิมพ์โค้ด: __init__ รับ self และค่าเริ่มต้น เก็บเป็น self.name แล้วเมธอดอื่นจะอ่านหรือเปลี่ยนข้อมูลของออบเจ็กต์เดียวกันได้"],
};

export const pythonConceptExplanation = (language: Language, station: number) => conceptLead[language][station];

const guideExamples = [
  `print("Score:", 10)`,
  `seats = 24\nprint(seats)`,
  `for car in range(1, 4):\n    print(car)`,
  `def add(a, b):\n    return a + b`,
  `rides = ["Coaster", "Wheel"]\nprint(rides[0])`,
  `class Ride:\n    def __init__(self, name):\n        self.name = name`,
];

const guideParts = [
  ["print", "( ... )", "\"text\" / 10"],
  ["seats", "=", "24"],
  ["for ... in range(...):", "    print(car)"],
  ["def add(a, b):", "    return a + b"],
  ["[ ... ]", "rides[0]"],
  ["class Ride:", "self.name = name"],
];

export const pythonLessonGuides = Object.fromEntries(languageOptions.map(({ code }) => [code, pythonLessons[code].map((item, station) => ({
  intro: item.body,
  syntaxTitle: item.subtitle,
  example: guideExamples[station],
  parts: guideParts[station].map((part, index) => ({ code: part, text: item.points[index % item.points.length] })),
  remember: item.points,
}))])) as Record<Language, Array<{ intro: string; syntaxTitle: string; example: string; parts: Array<{ code: string; text: string }>; remember: string[] }>>;
