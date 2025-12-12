//promises
//async-await
//settimeout and setinterval

//promises
// --->promises meanes complete one work at one time
//==pending state
//==resolved == if work is done
//==reject   == if work is not done

//facebook --> user data
//pending
//resolve
//reject


// ## Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

// States:
// - `pending`
// - `fulfilled`
// - `rejected`


// ### Basic syntax

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});




// ### Consuming Promises (.then / .catch)

myPromise
  .then(result => {
    console.log(result); // Operation Successful!
  })
  .catch(error => {
    console.error(error);
  });

// ### Example: Promise with setTimeout

function waitForMe() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds completed!");
    }, 2000);
  });
}

waitForMe().then(msg => console.log(msg));


// Example:-1

const prm = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    },3000);
});

prm
.then(function(){
    console.log("lovely");
});

prm.catch(function(){
    console.log("unlovely");

});



// lets understand the api call
//we can go to the any url using fetch
//fetch data is not in radable form
//we can use json for make it readable
//after using the data which data shows this data in readable form


// API-Example
fetch(`https://randomuser.me/api/`)
.then(function(notreadable){
    return notreadable.json();
})

.then(function(asalidata){
    console.log(asalidata.results[0].name.first);
});


// API-Example:-2
fetch(`https://randomuser.me/api/`)
.then((raw)=>raw.json()) 
.then((data)=>{

    console.log(data.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
});



// ## async / await
// `async` makes a function return a Promise.
async function example() {
  return "Hello";
}
example().then(console.log);
 // Hello


//`await` pauses execution until the Promise resolves. You can use `await` only inside `async` functions.
// ### Example: Using await with a Promise

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting!"), ms);
  });
}

async function run() {
  console.log("Waiting...");
  const result = await delay(2000);
  console.log(result);
}

run();

//async await 

let prm1 = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    }, 3000);
});


async function abcd(){
    let raw = await fetch (`https://randomuser.me/api/`)
    let data = await raw.json();
    console.log("data");
}
abcd();


function getNum(){
    let prm2 = new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10);
            if (num<5){
                resolve(true);
            }else{
                reject(false);
            }
        }, 3000);
    
    });
}
async function abcde(){
    let v = await getNum();
    console.log(v);
}
abcde();


// ### Example: Fetch API with Promises

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


// ### Example: fetch wrapped in a callback

function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))   // success callback
    .catch(error => callback(error, null)); // error callback
}

// usage
fetchData("https://jsonplaceholder.typicode.com/posts/1", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  console.log("Data:", data);
});



// ## Why use Promises?

// - To avoid callback hell
// - Cleaner async code
// - Better error handling
// - Easy chaining
