//ADVANCE JAVASCRIPT= day-64//
//TODAY I AM GOING TO LEARN ABOUT THROATTLLING IN JAVASCRIPT
//debouncing and throttling

//LETS UNDERSTAND THROATLING WITH EXAMPLE

//lets imagine u have input box 
// lets understand debouncing user stops then send respone otherwise no response

//jab user rukega ek bar kam hoga apke upar dependant hai kitane sec time lagega


//debouncing

// function debounce(fn, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(fn, delay);
//     };
// }
// Document.querySelector("#search")
//     .addEventListener("input", debounce(function () {
//         console.log("chala");

//     }, 400)
//     );


//throattling    
window.addEventListener("mousemove",function(e){
    console.log(e.clientX,e.clientY);
})

function throttle(fun, delay){
    let last = 0;
    return function(){
        const now =  date.now();
        if (now - last >= delay){
            last = now;
            fun();
        }
    };
}

window.addEventListener("mousemove",throttle(function(e){
    console.log("vishakha");
},2000))
// const searchInput = document.getElementById("search");

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function handleSearch(e) {
//   console.log("Searching for:", e.target.value);
//   // API call or filtering logic goes here
// }

// const debouncedSearch = debounce(handleSearch, 500);

// searchInput.addEventListener("input", debouncedSearch);
