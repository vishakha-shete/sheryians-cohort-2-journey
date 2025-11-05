//###loops and conditionals in Javascript
//understanding condition operator in javascript - 
//[if else, else-if,unary-operator , ternary operator]
// - 'for' loop in javascript
// - while loop in javascript
// - do.. while loop in javascript
// - forEach in javascript
// - for of loop in javascript
// - for Each in javascript
// - for of loop in javascript
// - recursion in javascript
// - loop control statements in javascript [break,continue]


//conditions...!
// ***in programin lot more time like phase come in which we have to deside what to do choose
//option A option B

// if rains fall then print hello if rain not falls then print byee
//we use if else in this case

// console.log("hello");
// //normal hello printing

// let a =12;
// if(a < 10){
//     console.log("hello");
// }
// else{
//     console.log("byee");
// }


//truthy falsy

// if(kuch aisa jiski value true ho ya false ho ){

// }


// false valuee
// 0 "" false Nan null Undefined document.all
//kuch bhi dikhe vo convert hoga --> true main

//condition 7 true : false
// 12 > 13 ? console.log("hey") : console.log("hello");


// switch case

// switch(3){
//     case 1:
//     console.log("hey");
//     break;
//     case 2:
//     console.log("hey hey");
//     break;
//     case 3:
//     console.log("hey bye");
//     break;
//     case 4:
//     console.log("hey look"); 
//     break;  
//     default:
//      console.log("default case");         
// }

//loop = repeat krna
// 1 2 3 4 5 6 7 8 9 10
//straightforward-loop --> na hi value badlti na printing badalti hai
//dynamic loop ---> value badal sakati hai printing bhi badal sakati hai


//for loop
//for(start,end,change){}

for(let i = 1 ; i < 11; i++) {
    console.log("vishakha");
}

for(i=10; i>0; i--){
    console.log(i);
}

// 1 to 50 
//jab koi ek hi cheej kitni baar ptint honi hai isse koi 
//farak nahi padata ki tumhara loop ki i ki value kaha se shuru 
//ho rahi hai

for (i=45; i<51; i++){
    console.log(i);
}
for(i=30; i>9; i--){
    console.log(i);
}

// ||
for (let i = 12; i > 0; i--){
    if ( i=== 5 || i === 7 ){
        console.log("pass");
    }
    else{
        console.log("nopass");
    }
}


//&&
for (let i = 12; i > 0; i--){
    if ( i=== 5 && i === 7 ){
        console.log("pass");
    }
    else{
        console.log("nopass");
    }
}



