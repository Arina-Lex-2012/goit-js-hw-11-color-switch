import './sass/main.scss';

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

const btnStartEl = document.querySelector('[data-action = start]');
const btnStopEl = document.querySelector('[data-action = stop]');

btnStartEl.addEventListener('click', onClick);
btnStopEl.addEventListener('click', onClick);

const changeBodyBackground = () => {
    document.body.style.background = colors[randomIntegerFromInterval(0,colors.length)];
};

let intervalId = 0;

function onClick() {     
    if (this.getAttribute('data-action') === 'start'){
        const interId = setInterval(changeBodyBackground, 300, 300);
        intervalId = interId;
        btnStartEl.setAttribute('disabled', true);    
    } else {
        clearInterval(intervalId);
        btnStartEl.removeAttribute('disabled');      
    };
};




