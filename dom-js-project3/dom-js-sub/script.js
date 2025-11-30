var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['hey! I am learning dom','its really intresting','step by step stepping forword','sheryians is best','js is intresting','keep practicing']
btn.addEventListener('click',()=>{

var h1 = document.createElement('h1')
var x = Math.random()*90
var y = Math.random()*90
var r = Math.random()*365
var scl = Math.random()*3

var a = Math.floor(Math.random()*arr.length)

h1.innerHTML=arr[a]
h1.style.position= 'absolute'
h1.style.left= x+ '%'
h1.style.top= y+ '%'
h1.style.rotate= r+ 'deg'
h1.style.rotate= scl
console.log(h1);

main.appendChild(h1)

})