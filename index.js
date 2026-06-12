// window.matchMedia("(prefers-color-scheme: dark)").matches// if this is true means system is true -dark,false-light

/* function setDarkLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  setDarkLight();
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if(!localStorage.getItem("theme"))
   { setDarkLight();}
  });

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}); */

// optmized code

const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const btn = document.querySelector("button");

function applyTheme(theme, save = false) {
  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");

  if (save) {
    localStorage.setItem("theme", theme);
  }
}

function getPreferredTheme() {
  return themeQuery.matches ? "dark" : "light";
}

const storedTheme = localStorage.getItem("theme");
applyTheme(storedTheme || getPreferredTheme());

themeQuery.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(getPreferredTheme());
  }
});

btn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme, true);
});