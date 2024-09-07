// Отримуємо елемент перемикача теми
const toggleSwitch = document.querySelector(
  '.theme-switch-wrapper input[type="checkbox"]'
);

// Перевірка системної теми користувача
const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

// Перевірка збереженої теми в localStorage
const currentTheme = localStorage.getItem('theme');

// Якщо є збережена тема, використовуємо її, інакше беремо системну
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
} else if (systemPrefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true; // Відзначаємо перемикач для темної теми
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

// Функція для перемикання теми
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Зберігаємо вибір темної теми
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Зберігаємо вибір світлої теми
  }
}

// Додаємо слухач для перемикання теми
toggleSwitch.addEventListener('change', switchTheme, false);
