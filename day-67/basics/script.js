// from today i am trying to learn react js...!
//lets reacall first yesterdays topic

import user from "./app.js";
import {non} from "./app.js";
import app from "./app.js";
import test from "./test.js"

console.log(test());
console.log(app());


// we allready know about the function

function hero(){
    console.log("lokkikng forward to run1");

}
hero()
//it will print looking forward to run


function logo(){
    console.log("hello");
    return 10
}
console.log(logo());
//it will print hello
             // 10

function para() {
    console.log("i am the best");

    return 1
}             
var a = para()
console.log(a);


function A(a,b){
    return (a+b)
}
console.log(A(20,30));
console.log(A(30,30));
console.log(A(40,30));

