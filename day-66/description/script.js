//today i am going to start my learning in react js
// topics to cover before startiting the journey of react

// BOASICS OF JS
// -var ,let ,const
// datatypes
// operators
// -console statements
// -conditionals - tirnary ,switch case
// -loops

// ***javascript-topics

// 2) ARRAY / OBJECT

    //  -var,let,const
    // methods of array (push,pop,shift,unshift)
    //HOF (foreach ,map, filter, reduce, some )
    //use of objects
    //array of objects
    // basic question of array of objects
    // -datatype
    // -operators (*, - , + , %,&&,)
    // -console statement
    // - conditions


// 3) DESTRUCTURING
    //of array
    // of object
    //spread operator
    // rest operator
    // -methods of array (push,pop)
    // -HDF (for-Each)  
    
    
// 4) FUNCTIONS
    // -arrow function 
    // - basics of function
    // -return statement
    // -parameter ,argument-     

// 5)PROMISES,ASYNC AWAIT ,FETCH API     

// 6) ERROR HANDLLING   

// 7) IMPORT EXPORT   


// DESTRUCTURING
//lets understand destructuring in react-js


// EXAMPLES

// 1)
var arr = [10,20,30,40,50]
var arr2 = arr
arr2.push (34)
console.log(arr); 

// 2)
var obj = {
    user:"vishakha",
    age :22
}

var obj2 = obj
obj.user= "nikhil"
console.log(obj);

// for solving this problem we use destructuring

// 3)
//SPREAD OPERATOR = [...arr]

var arr = [20,30,40,50]
var arr2 = [arr[0],arr[1],arr[3],arr[4]]
// while using using this long array concept we prefare to use SPREAD OPERATOR [...arr]
var arr2 = [...arr]
console.log(arr2);
var a = arr[0]
var b = arr[1]
var c = [...arr];
console.log(a);
console.log(...arr);


var arr =  ["vishakha","sakshi","pragati","roopa","sima" ]
var a =arr[0]
var b =arr[1]
var c =arr[2]
var d = [a,b,...c]=arr;
console.log(a,b,c);
console.log(...arr);
console.log(arr2);


// lets understand the concept using object
var obj = {
    user:"sarthak",
    age: 22,
    city: "akola",
}

obj2=obj
obj2.city="washim"
console.log(obj2);

var arr = [10,20,30,40,50]
var [a,b] = arr
console.log(a);
console.log(b);

var arr = [10,20,30,40,50]
var [b,a] = arr
console.log(a);
console.log(b);

var arr = [1,2,3,4]
var [a,b,...c] = arr
console.log(...c);



var obj = {
    user : "anubhav",
    age  : 24,
    city : 'ranchi',
    skills : ["js","react","mern"]
}

var {user} = obj
var {skills}= obj
var [first,...restskills] = skills
console.log(user);
console.log(first);
console.log(restskills);


