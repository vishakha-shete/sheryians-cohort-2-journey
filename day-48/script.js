//learning about mouseenter
//learning about mouseleave

// var box = document.querySelector('#box')
var chutki = document.querySelector('img')
var msg = document.querySelector('h2 span')
var h2 = document.querySelector('h2')
var body = document.body

chutki.addEventListener('mouseenter', ()=>{
    msg.innerHTML='chutki ko hat mat lagana'
    body.style.backgroundColor='skyblue'
    msg.style.color='black'
    h2.style.color='black'

});

chutki.addEventListener('mouseleave', ()=>{
    msg.innerHTML='chutki se dur hi raho'
    body.style.backgroundColor='black'
    msg.style.color='white'
    h2.style.color='white'
});

