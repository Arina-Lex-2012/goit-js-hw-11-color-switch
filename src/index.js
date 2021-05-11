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

console.log(randomIntegerFromInterval(0,colors.length));

const btnStartEl = document.querySelector('[data-action = start]');
console.log(btnStartEl.getAttribute('data-action'));

const btnStopEl = document.querySelector('[data-action = stop]');
console.log(btnStopEl.getAttribute('data-action'));

btnStartEl.addEventListener('click', onClick);
btnStopEl.addEventListener('click', onClick);

function onClick(){ 
    if (this.getAttribute('data-action') === 'start'){
     document.body.classList.add(background);
        console.log('меняем фон', this.getAttribute('data-action'));
    } else {
        console.log('НЕ меняем фон', this.getAttribute('data-action'));
    };    
};



