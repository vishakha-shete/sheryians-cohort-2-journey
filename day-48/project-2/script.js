
var h1 = document.querySelector('h1')
document.body.addEventListener('keydown',function(dets){
    h1.innerHTML= dets.code
})