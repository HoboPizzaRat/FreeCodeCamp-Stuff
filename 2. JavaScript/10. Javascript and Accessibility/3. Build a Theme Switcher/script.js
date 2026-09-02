const themes = [
  {
    name: "dark",
    message: "fuck dark",
    color: "black"
  },
  {
    name: "light",
    message: "fuck light",
    color: "white"
  },
  {
    name: "salmon",
    message: "fuck salmon",
    color: "salmon"
  },
  {
    name: "lemon",
    message: "fuck lemon",
    color: "yellow"
  }
];
const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");

const darkTheme = document.getElementById("theme-dark");
const lightTheme = document.getElementById("theme-light");
const salmonTheme = document.getElementById("theme-salmon");
const lemonTheme = document.getElementById("theme-lemon");

const themeList = [darkTheme, lightTheme, salmonTheme, lemonTheme];

function changeTheme(theme){
  let body = document.querySelector("body");
  body.style.backgroundColor = theme.color;
  let p = document.querySelector("p");
  p.style.textContent = theme.message;
}
themeList.forEach((themeItem, index) => {
  themeItem.addEventListener("click", () => {
    changeTheme(themes[index]);
  });
});

themeSwitcherButton.addEventListener("click", () => {
  const opposite = themeDropDown.style.display == "block" ? "none" : "block";
  themeDropDown.style.display = opposite;
  if(opposite == "block"){
    themeDropDown.removeAttribute("hidden");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }else{
    themeDropDown.setAttribute("hidden", "true");
    themeSwitcherButton.setAttribute("aria-expanded", "true");

  }
});

themeSwitcherButton.addEventListener("click", () => {
  
  console.log("this occurs")
})