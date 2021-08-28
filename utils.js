$(document).ready(function() {
    $('.item').on('click', function() {
        if (!$(this).hasClass('item-title')) {
            $('.item').removeClass('item-active');
            $(this).addClass('item-active');
        }
    });

    $('.theme').on('click', function() {
        if (theme.name == 'light') {
            loadTheme('dark');
            $(this).children().css('filter', 'invert(1)');
            localStorage.setItem('theme', 'dark');
        } else {
            loadTheme('light');
            $(this).children().css('filter', 'invert(0)');
            localStorage.setItem('theme', 'light');
        }
        document.body.classList.toggle('dark-theme');
    });

    let copyright = document.getElementById('copyright').firstElementChild;
    copyright.innerHTML = "©Fran Matešić, " + new Date().getFullYear();
});

window.addEventListener('resize', windowResized);

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function loadThemeFromStorage() {
    let theme = localStorage.getItem('theme');
    if (theme == 'dark') {
        document.getElementById('theme').firstElementChild.style.filter = "invert(1)";
        document.body.classList.toggle('dark-theme');
        loadTheme('dark');
    } else {
        loadTheme('light');
    }
}

function loadTheme(themeName) {
    theme = Utils.themes[themeName];
}
let Utils = {
    "accent": "#305C91",
    "themes": {
        "light": {
            "name": "light",
            "background": "#F5F5F5",
            "font": "#282828",
            "menu": "#B8C7E0",
            "menuActive": "#3E5B8E",
            "menuHover": "#4E72B1"
        },
        "dark": {
            "name": "dark",
            "background": "#282828",
            "font": "#F5F5F5",
            "menu": "#254974",
            "menuActive": "#6494CE",
            "menuHover": "#376DAE"
        }
    }
}
