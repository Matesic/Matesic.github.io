let theme;

window.addEventListener('resize', windowResized);

function windowResized() {
    let menuHeight = calculateMenuHeight();
    resizeCanvas(windowWidth, windowHeight - menuHeight);
    repositionCanvas(menuHeight);
}

function calculateMenuHeight() {
    let menu = document.getElementById("navbar");
    let menuStyle = getComputedStyle(menu);
    canvas.top = menu.offsetHeight + menu.offsetTop;
    canvas.width = windowWidth;
    canvas.height = windowHeight - canvas.top;
}

function repositionCanvas(offset) {
    let main = document.querySelector('main');
    main.style.top = offset + 'px';
}

function loadTheme(themeName) {
    theme = Utils.themes[themeName];
}
let Utils = {
    "whiteColor": "#F9F7F7",
    "themes": {
        "light": {
            "name": "light",
            "background": "#FFF",
            "font": "#000",
            "primary": "#DBE2EF",
            "secondary": "#112D4E",
            "accent": "#305C91"
        },
        "dark": {
            "name": "dark",
            "background": "#000",
            "font": "#FFF",
            "primary": "#112D4E",
            "secondary": "#DBE2EF",
            "accent": "#305C91"
        }
    }
}
