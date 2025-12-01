//today we are going to learn about setTimeout setInterval
//syncronus -- one process runs at multiple process
//asyncronus -- one process runs at a one time 

//**javasceipt is syncronus langauge

// *** setTimeout - st time is a method which is used for - delay
//*** setInterval - 

//setTimeout

setTimeout(function(){
    console.log('helooe-1');

},3000)

setTimeout(function(){
    console.log('helooe-2');

},2000)

setTimeout(function(){
    console.log('helooe-3');

},4000)


var user = 'vishakha'

var btn = document.querySelector('button')
var h1 = document.querySelector ('h1')

btn.addEventListener('click',function(){
    h1.innerHTML= 'changing sentence...!'
    setTimeout(() => {
        h1.innerHTML='lets start new journey'

    },2000 );
})



// setInterval -- controlled loop its print same thing again

var a = 0 

var int = setInterval(function(){
    a++
    console.log(a);
},100);

setTimeout(() => {
    clearInterval(int)
}, 4000);