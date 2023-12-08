const Counter = {
    count: 0,
    init: function(){
        Counter.cacheDom();
        Counter.addListeners();
        Counter.render();
    },
    cacheDom: function(){
        Counter.rootElement = document.querySelector('#app');
        Counter.increaseButton = Counter.rootElement.querySelector('.increase');
        Counter.decreaseButton = Counter.rootElement.querySelector('.decrease');
        Counter.display = Counter.rootElement.querySelector('.display');
    },
    addListeners: function(){
        Counter.increaseButton.addEventListener('click', Counter.inc);
        Counter.decreaseButton.addEventListener('click', Counter.dec);
    },
    render: function(){
        Counter.display.textContent = Counter.count;
    },
    inc: function(){
        Counter.count += 1;
        Counter.render();
    },
    dec: function(){
        Counter.count -= 1;
        Counter.render();
    }
};
Counter.init();

//Data & Variables
let count = 0;
const element = '#app';

//Caching or retrieving refences to the DOM
const rootElement = document.querySelector('#app');
const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const display = document.querySelector('#display');
console.log(rootElement, increaseButton, decreaseButton, display);
//Setup
decreaseButton.addEventListener('click', dec);
increaseButton.addEventListener('click', inc);
render();
//Functions
function dec(){
    count -= 1;
    render();
}
function inc(){
    count += 1;
    render();
}

function render(){
    display.textContent = count;
}