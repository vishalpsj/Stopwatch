let screen = document.querySelector('.screen');
let lapList = document.querySelector('.lapList');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let lap = document.querySelector('.lap');
let clearLap = document.querySelector('.clearLap');

let time = 0;
let intervalId;


const startTimer = () => {
    intervalId = setInterval(() => {
        time++;
        screen.innerText = time;
    }, 1000);
};

const pausetime = () => {
    clearInterval(intervalId);
    screen.innerText = time;
};

// Start button
start.addEventListener('click', () => {
    if (start.innerText === 'Start') {
        start.innerText = 'Pause';
        startTimer();
    }
    else if (start.innerText === 'Pause') {
        start.innerText = 'Resume';
        pausetime();
    }
    else if (start.innerText === 'Resume') {
        start.innerText = 'Pause';
        startTimer();
    }
})

// Stop button

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    start.innerText = 'Start';
    time = 0;
    screen.innerText = time;
});

// lap button

lap.addEventListener('click', () => {
    if (screen.innerText !== '0') {
        let lapTime = time;
        let lapScreen = document.createElement('p');
        lapScreen.innerText = `-> The lap time is ${lapTime}s.`;
        lapList.appendChild(lapScreen);
    }
});

// clear lap button

clearLap.addEventListener('click', () => {
    lapList.innerHTML = '';
});