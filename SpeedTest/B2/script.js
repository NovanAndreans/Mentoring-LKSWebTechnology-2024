var body = document.getElementById('body');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var start = document.getElementById('start');
var stops = document.getElementById('stop');
var reset = document.getElementById('reset');
var tick;
var ms = 0;
var sc = 0;
var mt = 0;
var hr = 0;

function time() {
    ms++;

    if (ms < 9) {
        milliseconds.innerHTML = '0' + ms;
    }

    if (ms > 9) {
        milliseconds.innerHTML = ms;
    }

    if (ms > 99) {
        ms = 0;
        milliseconds.innerHTML = '0' + ms;

        sc++;

        if (sc < 9) {
            seconds.innerHTML = '0' + sc;
        }

        if (sc > 9) {
            seconds.innerHTML = sc;
        }

        if (sc > 59) {
            sc = 0;
            seconds.innerHTML = '0' + sc;

            mt++;

            if (mt < 9) {
                minutes.innerHTML = '0' + mt;
            }

            if (mt > 9) {
                minutes.innerHTML = mt;
            }

            if (mt > 59) {
                mt = 0;
                minutes.innerHTML = '0' + mt;

                hr++;
                if (hr < 9) {
                    hours.innerHTML = '0' + hr;
                } else {
                    hours.innerHTML = hr;
                }
            }
        }
    }
}

start.onclick = function () {
    clearInterval(tick);
    tick = setInterval(time, 10);

    start.classList.add('disappear');
    stops.classList.remove('disappear');
    reset.classList.remove('disappear');

    body.classList.replace('body', 'body-animate');
};

stops.onclick = function () {
    if (stops.innerHTML == 'stop') {
        clearInterval(tick);
        stops.innerHTML = 'resume';
    } else {
        tick = setInterval(time, 10);
        stops.innerHTML = 'stop';
    }
};

reset.onclick = function () {
    clearInterval(tick);
    ms = 0;
    sc = 0;
    mt = 0;
    hr = 0;

    milliseconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    stops.innerHTML = 'stop';

    start.classList.remove('disappear');
    stops.classList.add('disappear');
    reset.classList.add('disappear');

    body.classList.replace('body-animate', 'body');
};

