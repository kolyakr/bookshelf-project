const toggleSwitch = document.querySelector(
  '.theme-switch-wrapper input[type="checkbox"]'
);

const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
} else if (systemPrefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
