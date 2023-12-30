function setTheme(themeButton, sun, moon) {
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
            themeButton.checked = true;
            moon.classList.remove("hide");
        } else {
            sun.classList.remove("hide");
        }
    }
}

function switchTheme(themeButton, sun, moon) {
    if (themeButton.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        sun.classList.add("hide");
        moon.classList.remove("hide");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        sun.classList.remove("hide");
        moon.classList.add("hide");
    }

    console.log('l');
}

export { setTheme, switchTheme }