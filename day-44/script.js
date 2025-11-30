//create element

//appending a child


var h1 = document.createElement('h1')
console.log("h1");


var h2 = document.createElement('h1')
h1.innerHTML = 'hello from vishakha'
console.log(h1);


var body = document.querySelector('body')
body.appendChild(h1)

var btn = document.createElement('button')

btn.innerHTML='download'
btn.style.color="red"

var body = document.querySelector('body')

body.appendChild(btn)





