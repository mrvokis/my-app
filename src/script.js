const tap = document.getElementsByClassName('tap');
const calc = document.getElementsByClassName('calc');
var i = 0;
if (localStorage.getItem('taps')>0) {
    calc[0].innerHTML = localStorage.getItem('taps');
    i= localStorage.getItem('taps');
} else {
    i=0;
}

tap[0].addEventListener('click', ()=> {
    i = i-(-1);
    localStorage.setItem('taps', i)
    calc[0].innerHTML = localStorage.getItem('taps');
});