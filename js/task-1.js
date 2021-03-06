const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btn = document.querySelectorAll('button')
const start = btn[0];
const stop = btn[1];


function changeBgColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

let intervalId = 0;

function activationStart() {
  intervalId = setInterval(changeBgColor, 1000);
  start.disabled = 'true';
}

function clickStop() {
  clearInterval(intervalId);
  start.disabled = '';
}


start.addEventListener('click', activationStart);
stop.addEventListener('click', clickStop);