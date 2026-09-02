const themes = [
  {
    name: "dark",
    message: "fuck dark",
    cls: "theme-dark"
  },
  {
    name: "light",
    message: "fuck light",
    cls: "theme-light"
  },
  {
    name: "salmon",
    message: "fuck salmon",
    cls: "theme-salmon"
  },
  {
    name: "lemon",
    message: "fuck lemon",
    cls: "theme-lemon"
  }
];
const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");

const darkTheme = document.getElementById("theme-dark");
const lightTheme = document.getElementById("theme-light");
const salmonTheme = document.getElementById("theme-salmon");
const lemonTheme = document.getElementById("theme-lemon");

const themeList = [darkTheme, lightTheme, salmonTheme, lemonTheme];

function changeTheme(newTheme){
  let body = document.querySelector("body");
  for(let theme of themes){
    body.classList.remove(theme.cls);
  }
  body.classList.add(newTheme.cls);
  let p = document.querySelector('[aria-live="polite"]')
  p.textContent = newTheme.message;
}
themeList.forEach((themeItem, index) => {
  themeItem.addEventListener("click", () => {
    changeTheme(themes[index]);
  });
});

themeSwitcherButton.addEventListener("click", () => {
  if(themeDropDown.hidden){
    themeDropDown.removeAttribute("hidden");
    themeSwitcherButton.setAttribute("aria-expanded", "true");

  }else{
    themeDropDown.setAttribute("hidden", "true");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});