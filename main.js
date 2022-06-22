import { loadImage } from './functions/graphic.js';
import { start, click } from './functions/mechanics.js'

// let soundDir = confirm("Turn on NSFW mode?") ? "NSFW" : "NORMAL";
let soundDir = "NORMAL";
const gameMedia = {
    sounds: {
        "start": new Audio(`./sounds/${soundDir}/start.mp3`),
        "click": new Audio(`./sounds/${soundDir}/leftClick.mp3`),
        "flag": new Audio(`./sounds/${soundDir}/rightClick.mp3`),
        "loose1": new Audio(`./sounds/${soundDir}/loose1.mp3`),
        "loose2": new Audio(`./sounds/${soundDir}/loose2.mp3`),
        "win": new Audio(`./sounds/${soundDir}/win.mp3`)
    },
    images: [
        loadImage("pictures/zero.png"),
        loadImage("pictures/one.png"),
        loadImage("pictures/two.png"),
        loadImage("pictures/three.png"),
        loadImage("pictures/four.png"),
        loadImage("pictures/five.png"),
        loadImage("pictures/six.png"),
        loadImage("pictures/seven.png"),
        loadImage("pictures/eight.png"),
        loadImage("pictures/mine.png"),
        loadImage("pictures/flag.png")
    ],
    cheers: [
        "NICE", "COOL", "HEROIC", "MAGNIFICENT",
        "WHOLESOME", "GOD MOVE", "GREAT", "JUST DO IT",
        "TOUGH", "KAWAIIII", "CUTE", "ABSOLUTE"
    ],
    heightInput: document.getElementById("height"),
    widthInput: document.getElementById("width"),
    buttonInput: document.getElementById("button"),
    statusBar: document.getElementById("statusBar"),
    flagsBar: document.getElementById("flagAmount"),
    timerBar: document.getElementById("timer"),
    canvas: document.getElementById("canvas")
}

const gameObj = {
    contex: canvas.getContext("2d"),
    board: new Array(2),
    viewMap: new Array(2),
    width: 0,
    height: 0,
    flags: 0,
    timerId: 0,
    timer: 0,
    state: -1,
    openedCells: 0,
    mousePosition: new Array(2),
    clickPosition: new Array(2),
    clickState: 0
}

gameMedia.buttonInput.addEventListener("click", () => start(gameObj, gameMedia));
gameMedia.canvas.addEventListener("mousedown", (mouseEvent) => click(gameObj, gameMedia, mouseEvent));
