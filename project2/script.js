

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const zero= document.querySelector('#zero')
let counter =0;

minus.addEventListener('click', () => {
     counter--;
     document.getElementById('number').innerText= counter;
})

plus.addEventListener('click', () => {
     
     counter++;
     document.getElementById('number').innerText = counter;
})

zero.addEventListener('click', () => {
     counter =0;
     document.getElementById('number').innerText= counter;
})