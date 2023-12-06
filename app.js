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