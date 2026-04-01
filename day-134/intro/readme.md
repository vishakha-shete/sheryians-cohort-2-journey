# Introduction to typescript

why we need typescript when we have js
- in javascript we can do anything  but aise hona nahi chahiye  fro example 
        //string + number = string
        console.log("5" + 1); //51
        // string - number = number
        console.log("5" - 1); //4
        // string * number = number
        console.log("5" * 2); //10
        // string + boolean = string
        console.log("5" + true); //5true
        // array + array = empty string 
        console.log(typeof ([] + [])); //string
        // Array + Number = String
        console.log([1] + 1); //11
        // [1,2] + 1 = 1,21
        console.log([1,2] + 1); //1,21
        // number + boolean = number 
        console.log(5 + true); //6
        // object + array = string 
        console.log({}+[]); //[object object]   
        // arrray == false = true   
        console.log([] == false); // true  
        for not happend like we use typescript this are the problems in js , js dont know about types for solving this all numbers used javascript 
        typescript says that you have to write and perform perfect operations 

now we are setting up the typescript folder 
firstlly run npm init -y 
         npx tsc init-y
then install package name called 
typescript and for development tsc 
npm i typescript --save-dev
npx tsc --init
touch index.ts
npx tsc index.ts
npx tsc

running the file
- npx tsc index.ts --ignoreconfig
- npx tsc index.ts --ignoreconfig && node index.js
<!-- npm i ts-node --save-dev -->

in this we are witing a code in ts but the final file running on js 

console.log("hello");
// hello

const a = "world";
const b = 5
console.log(a + b);
// world5

// const c = "world";
// const d = 5
// console.log(c - d);
// - NaN -spported in js  but not supported in ts

# firstlly learning the type of  datatypes in ts 
# - PREMITIVE DATATYPES
1) STRING
2) NUMBER
3) BOOLEAN
4) array
5) TUPLE
6) VOIDE NEVER

# STRING DATATYPE
- const a = "hello world"

const f : string = "vishakha"
console.log(f);

// const g : string = 123 not possible here
- type number is not assignable to type string 

# NUMBER DATATYPE
const g1 = 1234
console.log(typeof g1);

const g : number = 1234
console.log(g);

const a : number = 1234
- i want to create a name constant in which i am able to assign number 

# BOOLEAN DATATYPE
const h1 = true
console.log(typeof h1);

const h : boolean = false
console.log(h);

# Array 
- array and tuple has big differernce 
- we can array defined it by two types like this
const a:Array<number> = [1,2]
const a:number[] = [1,2]

const i1 = [1]
console.log(typeof i1); // object - in js arrays are of type object but in ts we can define the type of array as well

const i2:Array<number> = [1,2]
console.log(i2);

const i:number[] = [3,4]
i.push(5,6,7)
// i.push("hello") - not possible here as we have defined the array type as number
console.log(i);

- array dont have limit we make array but not desided how many numbers limit u want then their is thing called tuple 

Array - fixed type but not the length 

# TUPLE DATATYPE
tuple = fixed sized and type 
const a : [number , number , number]=[1,2,3]
const a : [number , number , number]=[1,2] - not possible
const a : [number , string , number]=[1,2,3] - type number is not assignable to type string 
const a : [number , string , number]=[1,"sheryians",3]

# VOIDE  DATATYPE
//- the greet function dosent return anything yah its worked something so in that time type is void
function greet(name :string): void{
        console.log("hello" + name)
}
greet(" ankur")

// if its returning something we have give returning type
function greet1(name: string):string{
    return  "hello" + name
}
greet1("vishakha")

// function greet2(name: string):string{
//     return  1234
// }
// greet2("vishakha") // not possible here as we have defined the return type as string but we are returning number

# NEVER DATATYPE

// function greet2(name: string):never{
//     throw new Error("something went wrong !")
// }
// greet2("vishakha") 

// function not ending in ts is of type never as it will throw an error and it will never return anything


# type
// type - it is a way to define a custom type in ts
// here we dont define the type of user object but we can define the type of user object as well using type
// generally we use type for function
// function greet3(data){
//     console.log("hello" + data.name + " your age is " + data.age + " and you are a student " + data.isStudent);   
// }
// greet3(user)

function greet3(name: string, age: number, isStudent: boolean): void {
    console.log("hello " + name + " your age is " + age + " and you are a student " + isStudent);   
}
greet3(user.name, user.age, user.isStudent)

type USER = {
    name: string,
    age: number,
    isStudent: boolean
}
const user5: USER = {
    name: "ankur",
    age : 22,
    isStudent : false
}
function greet4(data: USER){
    console.log("hello " + data.name + " your age is " + data.age);
}
greet4(user5)


# there are another two types 
- 1) any 
- 2) unknown

- 1) any
// any - any means it accessable any datatype

let l: any
l = "hello"
if (typeof l === "string") {
    console.log(l.toUpperCase());
} // - possible here as we have defined the type of l as any


- 2) unknown 
// it close any typescript benifits 
let l1: unknown
l = "hello"
if (typeof l1 === "string") {
    console.log(l1.toUpperCase());
} // - possible here as we have defined the type of l as any

let l2: unknown
l = "hello"
if (typeof l2 === "string") {
    console.log(l2.toUpperCase());
} 