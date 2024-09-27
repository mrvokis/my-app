const tap = document.getElementsByClassName('tap');
const calc = document.getElementsByClassName('calc');
var i = 0;
tap[0].addEventListener('click', ()=> {
 i = i+1;
calc[0].innerHTML = i;
})