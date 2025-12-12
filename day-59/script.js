// -Introduction to asynchrony in javascript
// - INtroduction to callbacks and problem in callbacks
// - Understanding 'promises'-'pendig' 'resolved' 'rejection'
// - How to Prevent callback hell using 'async' & 'await'.
// -'setInterval' & 'settimeout' in javascript



//** */ -Introduction to asynchrony in javascript
// --->js is single threaded language
//---->because its complete one work at a one time
//---->This process is called Synchronous Approach 
//--->for solving every error in javascript we use asynchronous approach

// ##  Synchronous JavaScript  
// JavaScript is **single-threaded**, meaning it executes code **line-by-line**.  
// The next line runs **only after** the previous line finishes.

// ### **Example**

console.log("A");
console.log("B");
console.log("C");

// ### **Output**
// A
// B
// C


// Everything runs in order.

// ##  Asynchronous JavaScript  
// Some tasks take time → JS offloads them to browser APIs  
// (e.g., **setTimeout, fetch, DOM events**).  
// These tasks **do not block** the main thread.

// ### **Example**


console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

// ### **Output order**

// A
// C
// B   //← (printed after 2 seconds)



// - INtroduction to callbacks and problem in callbacks
// Callbacks
// ---->callback is function which not work imediatelly
//----->its run whenever the work is complete

setTimeout(function(){
    console.log("hey");
},1000);