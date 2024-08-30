const toggleSwitch = document.querySelector(
  '.theme-switch-wrapper input[type="checkbox"]'
);

function switchTheme(e) {
  console.log('Switch');
  let lightThemeText = document.getElementById('light-theme-text');
  let darkThemeText = document.getElementById('dark-theme-text');
  lightThemeText.classList.toggle('disabled');
  darkThemeText.classList.toggle('disabled');
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
