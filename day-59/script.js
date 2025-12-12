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
//----->callback is a funcyion which we can pass it into another function
setTimeout(function () {
  console.log("hey");
}, 2000);


// getdatafrominstagram("vishalkha",function(){

// })

//here function calls a another function call
function abcd(fn) {
  fn();
}
abcd(function () {
  console.log("how are you");
})


// its look like a callback hell function calling
function abcd(fn) {
  fn(function (fn) {
    console.log("i am fine");
    fn();
  });
}
abcd(function (fn) {
  fn(function () {
    console.log("your ok");
  });
});


//
function vishakha(fn){
  fn();
}
vishakha(function(fn){
  console.log("understand");
});


//
function abcd(fn) {
  fn(function (fn2) {
    console.log("hey");
    fn2(function (fn4) {
      console.log("lettel bit scarry but trying to understand");
      fn4(function(fn6){
        console.log("loving the function");
        fn6();
      });
    });
  });
}
abcd(function (fn1) {
  console.log("kjefjf");
  fn1(function (fn3) {
    console.log("i am in love with function");
    fn3(function (fn5) {
      console.log(5 + 6);
      fn5(function(){
        console.log("love coding");
      });
    });
  });
});


// callbacks = now we are going to forward how call works actually
//situation --> github se repository data laao

//getUserDetails(Username,cb)
// getAllRepos(userId,cb)
//getRepoDetail(Repos[0],cb)

//amitSeDetailsLaao(address,cb)
//dukaanKoDhundho(datails,cb)
//samaanLelo(samaanlist,cb)
//gharAaajaao(address,cb)

// Example-1
function amitSeDetailsLaao(address,cb){
  console.log("feaching details....!");
  setTimeout(() => {
    cb({lat:33.3,lang:55.5});
  }, 3000);
}
amitSeDetailsLaao("indrapuri 231-B Block",function(details){
  console.log(details);
})

// Example-2
function amit(adress,cb){
  console.log("yess working");
 setTimeout(() => {
  cb({lang:3455,lat:3535});
 }, 4000);
}
amit("nawsasal",function(details){
  console.log(details);

});


// Example-3
function icecreamLaao(address, cb){
  cb("icecreame is ready")
}

icecreamLaao("amaravati",function(ice){
  console.log(ice);

});