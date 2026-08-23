import type { Language } from "./content";

type AuthCopy = {
  account: string;
  signIn: string;
  signedIn: string;
  email: string;
  password: string;
  enter: string;
  signingIn: string;
  signOut: string;
  cloudTitle: string;
  cloudOn: string;
  cloudOff: string;
  guestTitle: string;
  guestText: string;
  accountText: string;
  changePassword: string;
  newPassword: string;
  savePassword: string;
  passwordSaved: string;
  admin: string;
  back: string;
  loading: string;
};

export const authCopy: Record<Language, AuthCopy> = {
  en: {
    account: "Account", signIn: "Sign in", signedIn: "Signed in", email: "Email", password: "Password", enter: "Sign in", signingIn: "Signing in…", signOut: "Sign out", cloudTitle: "Cloud progress", cloudOn: "Your C++ and Python progress is synchronized across your devices.", cloudOff: "This account is signed in, but cloud synchronization is disabled.", guestTitle: "Guest mode", guestText: "All courses remain available. Progress is saved only in this browser until you sign in.", accountText: "Sign in with the account issued by your teacher to continue on any device.", changePassword: "Change password", newPassword: "New password", savePassword: "Save password", passwordSaved: "Password updated.", admin: "Admin panel", back: "Back to courses", loading: "Loading account…",
  },
  ru: {
    account: "Аккаунт", signIn: "Войти", signedIn: "Выполнен вход", email: "Электронная почта", password: "Пароль", enter: "Войти", signingIn: "Выполняется вход…", signOut: "Выйти", cloudTitle: "Облачный прогресс", cloudOn: "Прогресс C++ и Python синхронизируется между твоими устройствами.", cloudOff: "Вход выполнен, но синхронизация для этого аккаунта отключена.", guestTitle: "Гостевой режим", guestText: "Все курсы доступны. До авторизации прогресс сохраняется только в этом браузере.", accountText: "Войди с аккаунтом, выданным преподавателем, чтобы продолжать обучение на любом устройстве.", changePassword: "Изменить пароль", newPassword: "Новый пароль", savePassword: "Сохранить пароль", passwordSaved: "Пароль изменён.", admin: "Панель администратора", back: "Назад к курсам", loading: "Загрузка аккаунта…",
  },
  uk: {
    account: "Обліковий запис", signIn: "Увійти", signedIn: "Вхід виконано", email: "Електронна пошта", password: "Пароль", enter: "Увійти", signingIn: "Виконується вхід…", signOut: "Вийти", cloudTitle: "Хмарний прогрес", cloudOn: "Прогрес C++ і Python синхронізується між твоїми пристроями.", cloudOff: "Вхід виконано, але синхронізацію для цього облікового запису вимкнено.", guestTitle: "Гостьовий режим", guestText: "Усі курси доступні. До авторизації прогрес зберігається лише в цьому браузері.", accountText: "Увійди з обліковим записом, виданим викладачем, щоб продовжувати навчання на будь-якому пристрої.", changePassword: "Змінити пароль", newPassword: "Новий пароль", savePassword: "Зберегти пароль", passwordSaved: "Пароль змінено.", admin: "Панель адміністратора", back: "Назад до курсів", loading: "Завантаження облікового запису…",
  },
  fi: {
    account: "Tili", signIn: "Kirjaudu", signedIn: "Kirjautunut", email: "Sähköposti", password: "Salasana", enter: "Kirjaudu", signingIn: "Kirjaudutaan…", signOut: "Kirjaudu ulos", cloudTitle: "Pilvitallennus", cloudOn: "C++- ja Python-edistymisesi synkronoidaan laitteidesi välillä.", cloudOff: "Olet kirjautunut, mutta tämän tilin synkronointi ei ole käytössä.", guestTitle: "Vierastila", guestText: "Kaikki kurssit ovat käytettävissä. Ennen kirjautumista edistyminen tallennetaan vain tähän selaimeen.", accountText: "Kirjaudu opettajan antamalla tilillä jatkaaksesi millä tahansa laitteella.", changePassword: "Vaihda salasana", newPassword: "Uusi salasana", savePassword: "Tallenna salasana", passwordSaved: "Salasana vaihdettu.", admin: "Ylläpitopaneeli", back: "Takaisin kursseihin", loading: "Ladataan tiliä…",
  },
  th: {
    account: "บัญชี", signIn: "เข้าสู่ระบบ", signedIn: "เข้าสู่ระบบแล้ว", email: "อีเมล", password: "รหัสผ่าน", enter: "เข้าสู่ระบบ", signingIn: "กำลังเข้าสู่ระบบ…", signOut: "ออกจากระบบ", cloudTitle: "ความคืบหน้าบนคลาวด์", cloudOn: "ความคืบหน้า C++ และ Python จะซิงค์ระหว่างอุปกรณ์ของคุณ", cloudOff: "เข้าสู่ระบบแล้ว แต่การซิงค์สำหรับบัญชีนี้ถูกปิด", guestTitle: "โหมดผู้เยี่ยมชม", guestText: "ทุกหลักสูตรยังใช้งานได้ ก่อนเข้าสู่ระบบความคืบหน้าจะบันทึกเฉพาะในเบราว์เซอร์นี้", accountText: "เข้าสู่ระบบด้วยบัญชีที่ครูมอบให้เพื่อเรียนต่อจากอุปกรณ์ใดก็ได้", changePassword: "เปลี่ยนรหัสผ่าน", newPassword: "รหัสผ่านใหม่", savePassword: "บันทึกรหัสผ่าน", passwordSaved: "เปลี่ยนรหัสผ่านแล้ว", admin: "แผงผู้ดูแล", back: "กลับไปยังหลักสูตร", loading: "กำลังโหลดบัญชี…",
  },
};
