document.addEventListener('keydown', onKeyDown)
document.addEventListener('click', onMouseMove)

const map = document.getElementById('canvas');
const context = map.getContext('2d');
map.width = 850;
map.height = 585;

const body = document.getElementById('body');
const scoreSidebar = document.getElementById('score-sidebar');
const timeSidebar = document.getElementById('time-sidebar');
const heartSidebar = document.getElementById('heart-sidebar');
const cooldown = document.getElementById('cooldown');

const btnQuit = document.getElementById('quit')

const cowImage = new Image;
cowImage.src = './assets/life.png'
const cowImage2 = new Image;
cowImage2.src = './assets/dead.png'

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

var isPlay = false;
var isPause = false;
var isStart = false;
var initiationPlay = false;

let score = 0
let seconds = 0
let minutes = 0
let life = 5
let lostLife = 0
let cd = 3
let time

var cow = {
}

var cowDie = {
}

var inter1, inter2

function main() {
    init()
    randomCow()
    inter1 = setInterval(() => {
        if (isPlay) {
            updateStats()
            background()
            if (cow.x != 0) {
                drawCow(cowImage, cow.x, cow.y, 150, 150)
            } else {
                drawCow(cowImage2, cowDie.x, cowDie.y, 150, 150)
            }
        }
    }, 100)
    inter2 = setInterval(() => {
        if (isPlay) {
            if (seconds == 59) {
                minutes++
                seconds = 0
            } else {
                seconds++
            }

            updateTime()
        }
    }, 1000)
}

function init() {
    life = 5
    lostLife = 0
    score = 0
    seconds = 0
    minutes = 0

    updateStats()
    updateTime()
}

function updateStats() {
    scoreSidebar.innerHTML = score;
    heartSidebar.innerHTML = null;

    for (let index = 0; index < life; index++) {
        heartSidebar.innerHTML += "<i class='fa fa-heart'></i>";
    }

    for (let index = 0; index < lostLife; index++) {
        heartSidebar.innerHTML += "<i class='fa fa-heart-o'></i>";
    }

    if (life == -1) {
        clearInterval(inter1)
        clearInterval(inter2)

        let player = {
            name: localStorage.getItem('name'),
            score: score,
            time: time
        }

        var highscore =
            localStorage.getItem('highscore');

        if (highscore == null) {
            highscore = []
        } else {
            highscore = JSON.parse(highscore)
        }

        highscore.find((hs) => {
            if (hs.name == player.name) {
                if (hs.score <= player.score) {
                    hs.score = player.score
                    hs.time = player.time
                }
            }
        })

        if (!highscore.find((hs) => {
            return hs.name == player.name
        })) {
            highscore.push(player)
        }

        highscore.sort((a, b) => b.score - a.score)
        localStorage.setItem('highscore', JSON.stringify(highscore))

        if (confirm('Your Score : ' + score + '\n'
            + 'You wanna restart ? '
        )) {
            main()
        }
        else {
            window.location.reload()
        }
    }
}

function randomCow() {
    cowDie = {}
    let random = Math.floor(Math.random() * 9);
    var cowCoor = [
        { x: 70, y: 30 }, { x: 70, y: 220 }, { x: 70, y: 410 },
        { x: 350, y: 30 }, { x: 350, y: 220 }, { x: 350, y: 410 },
        { x: 630, y: 30 }, { x: 630, y: 220 }, { x: 630, y: 410 }
    ]

    cow = cowCoor[random]
}

function updateTime() {
    let second, minute;

    if (seconds < 9) {
        second = '0' + seconds;
    } else {
        second = seconds
    }

    if (minutes < 9) {
        minute = '0' + minutes
    } else {
        minute = minutes
    }

    time = minute + ':' + second;
    timeSidebar.innerHTML = time;
}

function background() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, map.width, map.height)

    drawStrokeRetangle(20, 10, 250, 180, 5, 'white')
    drawStrokeRetangle(20, 200, 250, 180, 5, 'white')
    drawStrokeRetangle(20, 390, 250, 180, 5, 'white')

    drawStrokeRetangle(300, 10, 250, 180, 5, 'white')
    drawStrokeRetangle(300, 200, 250, 180, 5, 'white')
    drawStrokeRetangle(300, 390, 250, 180, 5, 'white')

    drawStrokeRetangle(580, 10, 250, 180, 5, 'white')
    drawStrokeRetangle(580, 200, 250, 180, 5, 'white')
    drawStrokeRetangle(580, 390, 250, 180, 5, 'white')
}

function drawCow(src, x, y, width, height) {
    context.drawImage(src, x, y, width, height)
}

function drawStrokeRetangle(x, y, width, height, lineWidth, lineColor) {
    context.beginPath();
    context.fillStyle = lineColor;
    context.lineWidth = lineWidth;
    context.strokeRect(x, y, width, height);
    context.closePath();
}

function playGame() {
    isPlay = true
    isPause = false
    btnQuit.innerHTML = 'Quit'
    btnQuit.classList.remove('disabled')

    body.classList.remove('menu')
}

function pauseGame() {
    isPlay = false
    isPause = true
    btnQuit.innerHTML = 'Paused'
    btnQuit.classList.add('disabled')

    body.classList.add('menu')
}

function preGame() {
    cooldown.innerHTML = 'Press enter to Play'
}

function onUserClickRight() {
    cowDie = cow;
    cow = {
        x: 0,
        y: 0
    }
    score++
    audio.play()

    setTimeout(() =>
        randomCow(), 150)
}

function onUserClickWrong() {
    life--
    lostLife++
}

function onKeyDown(key) {
    if (isPlay || isPause) {
        if (key.key == 'Escape' && isPlay) {
            pauseGame()
        } else if (key.key == 'Escape' && isPause) {
            playGame()
        }
    }

    if (key.key == 'Enter') {
        initiationPlay = true
    }

    if (initiationPlay) {
        setInterval(() => {
            if (cd == 0) {
                cooldown.classList.add('hidden')
                map.classList.remove('hidden')
                initiationPlay = false
                isPlay = true
            } else {
                cooldown.innerHTML = cd
                cd--
            }
        }, 1000)

        setTimeout(() =>
            main(), 3000)
    } else {
        preGame()
    }
}

function onMouseMove(event) {
    if (isPlay) {
        //kolom 1
        if (event.clientX >= 499 && event.clientX <= 740 && cow.x >= 20 && cow.x <= 280) {
            //row 1
            if (event.clientY >= 61 && event.clientY <= 235 && cow.y >= 10 && cow.y <= 200) onUserClickRight()
            //row 2
            else if (event.clientY >= 250 && event.clientY <= 424 && cow.y >= 201 && cow.y <= 390) onUserClickRight()
            //row 3
            else if (event.clientY >= 443 && event.clientY <= 614 && cow.y >= 391 && cow.y <= 570) onUserClickRight()
            else onUserClickWrong()
        }

        //kolom 2
        else if (event.clientX >= 777 && event.clientX <= 1019 && cow.x >= 300 && cow.x <= 560) {
            //row 1
            if (event.clientY >= 61 && event.clientY <= 235 && cow.y >= 10 && cow.y <= 200) onUserClickRight()
            //row 2
            else if (event.clientY >= 250 && event.clientY <= 424 && cow.y >= 201 && cow.y <= 390) onUserClickRight()
            //row 3
            else if (event.clientY >= 443 && event.clientY <= 614 && cow.y >= 391 && cow.y <= 570) onUserClickRight()
            else onUserClickWrong()
        }

        //kolom 3
        else if (event.clientX >= 1058 && event.clientX <= 1299 && cow.x >= 580 && cow.x <= 730) {
            //row 1
            if (event.clientY >= 61 && event.clientY <= 235 && cow.y >= 10 && cow.y <= 200) onUserClickRight()
            //row 2
            else if (event.clientY >= 250 && event.clientY <= 424 && cow.y >= 201 && cow.y <= 390) onUserClickRight()
            //row 3
            else if (event.clientY >= 443 && event.clientY <= 614 && cow.y >= 391 && cow.y <= 570) onUserClickRight()
            else onUserClickWrong()
        } else onUserClickWrong()
    }
}