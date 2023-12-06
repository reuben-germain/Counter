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
//Functions
function dec(){}