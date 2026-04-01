"use strict";
console.log("hello");
// hello
const a = "world";
const b = 5;
console.log(a + b);
// world5
// const c = "world";
// const d = 5
// console.log(c - d);
// - NaN -spported in js  but not supported in ts
// string
const e = "hello world";
console.log(typeof e);
const f = "vishakha";
console.log(f);
// const g : string = 123 not possible here
// number
const g1 = 1234;
console.log(typeof g1);
const g = 1234;
console.log(g);
// boolean
const h1 = true;
console.log(typeof h1);
const h = false;
console.log(h);
// array 
const i1 = [1];
console.log(typeof i1); // object - in js arrays are of type object but in ts we can define the type of array as well
const i2 = [1, 2];
console.log(i2);
const i = [3, 4];
i.push(5, 6, 7);
// i.push("hello") - not possible here as we have defined the array type as number
console.log(i);
// tuple - it is a fixed length array where we can define the type of each element in the array
const j = ["hello", 123];
console.log(j);
const j1 = [1, 2, 3];
console.log(j1);
// const j2 : [number , number , number]=[1,2] - not possible
// const j2 : [number , string , number]=[1,2,3] - type number is not assignable to type string 
const j2 = [1, "sheryians", 3];
console.log(j2);
// void 
//- the greet function dosent return anything yah its worked something so in that time type is void
function greet(name) {
    console.log("hello" + name);
}
greet(" ankur");
// if its returning something we have give returning type
function greet1(name) {
    return "hello" + name;
}
greet1("vishakha");
// function greet2(name: string):string{
//     return  1234
// }
// greet2("vishakha") // not possible here as we have defined the return type as string but we are returning number
// never
// function greet2(name: string):never{
//     throw new Error("something went wrong !")
// }
// greet2("vishakha") // function not ending in ts is of type never as it will throw an error and it will never return anything
const user = {
    name: "vishakha",
    age: 22,
    isStudent: true
};
// type
// type - it is a way to define a custom type in ts
// here we dont define the type of user object but we can define the type of user object as well using type
// generally we use type for function
// function greet3(data){
//     console.log("hello" + data.name + " your age is " + data.age + " and you are a student " + data.isStudent);   
// }
// greet3(user)
function greet3(name, age, isStudent) {
    console.log("hello " + name + " your age is " + age + " and you are a student " + isStudent);
}
greet3(user.name, user.age, user.isStudent);
const user5 = {
    name: "ankur",
    age: 22,
    isStudent: false
};
function greet4(data) {
    console.log("hello " + data.name + " your age is " + data.age);
}
greet4(user5);
// - 1) any , object
// any - any means it accessable any datatype
// problem is 
let l;
l = "hello";
if (typeof l === "string") {
    console.log(l.toUpperCase());
} // - possible here as we have defined the type of l as any
// 2) unknown 
let l1;
l = "hello";
if (typeof l1 === "string") {
    console.log(l1.toUpperCase());
} // - possible here as we have defined the type of l as any
let l2;
l = "hello";
if (typeof l2 === "string") {
    console.log(l2.toUpperCase());
}
