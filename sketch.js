let unit;
let font;
let canvas = {
    "width": 0,
    "height": 0,
    "top": 0
}

let ball = {
    "x": 183,
    "y": 113,
    "sx": 1,
    "sy": 1,
    "r": 50,
    "s": 10
}

function preload() {
    font = loadFont('assets/fonts/Inconsolata.ttf');
}

function setup() {
    calculateMenuHeight();
    createCanvas(canvas.width, canvas.height);
    repositionCanvas(canvas.top);

    unit = windowWidth * 0.05;
    loadTheme('light');

    ball.x = random(ball.r * 2, canvas.width - ball.r * 2);
    ball.y = random(ball.r * 2, canvas.height - ball.r * 2);
}

function draw() {
    background(theme.background);

    noStroke();
    fill(theme.accent);
    ellipse(ball.x, ball.y, ball.r, ball.r);

    ball.x += ball.sx * ball.s;
    ball.y += ball.sy * ball.s;

    if (ball.x - ball.r / 2 <= 0 || ball.x + ball.r / 2 >= canvas.width) ball.sx *= -1;
    if (ball.y - ball.r / 2 <= 0 || ball.y + ball.r / 2 >= canvas.height) ball.sy *= -1;
}
