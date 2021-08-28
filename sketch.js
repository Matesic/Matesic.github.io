let theme;
let font;

function preload() {
    font = loadFont('assets/fonts/Inconsolata.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadThemeFromStorage();
}

function draw() {
    background(theme.background);
}
