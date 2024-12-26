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
        start.innerHTML= '<p>Pause</p><i class="ri-pause-circle-fill"></i>';
        startTimer();
    }
    else if (start.innerText === 'Pause') {
        start.innerHTML= '<p>Resume</p><i class="ri-play-circle-fill"></i>';
        pausetime();
    }
    else if (start.innerText === 'Resume') {
        start.innerHTML= '<p>Pause</p><i class="ri-pause-circle-fill"></i>';
        startTimer();
    }
})

// Stop button

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    start.innerHTML= `<p>Start</p><i class="ri-play-circle-fill"></i>`;
    time = 0;
    screen.innerText = time;
});

// lap button

lap.addEventListener('click', () => {
    if (screen.innerText !== '0') {
        let lapTime = time;
        let lapScreen = document.createElement('p');
        lapScreen.innerText = `-> Lap created at ${lapTime}s`;
        lapList.appendChild(lapScreen);
    }
});

// clear lap button

clearLap.addEventListener('click', () => {
    lapList.innerHTML = '';
});