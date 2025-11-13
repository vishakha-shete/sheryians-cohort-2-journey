var increament = document.querySelector('#increament')
var h1 = document.querySelector('h1')
var decreament = document.querySelector('#decreament')
var h2 = document.querySelector('h2')


var a = 0;
increament.addEventListener('click', function () {
    a++
    h1.innerHTML = a
});


var b = 0;
decreament.addEventListener('click', function () {
    b--
    h2.innerHTML = b
});