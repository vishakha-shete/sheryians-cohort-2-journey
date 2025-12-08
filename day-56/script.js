// today i am starting to learn the concepts of ADvance javascript
// **ADVANCED-JAVASCRIPT

// IN ADVANCED JAVASCRIPT STARTS THE TOPICS
// Object-ORIENTED-PROGRAMMING
//ASYNCRONUS-JAVASCRIPT


//FROM TODAY GOING TO LEARN ABOUT JS FOR WHAT NOW THE JS WW WILL LEARN THIS JS IS USED IN BIG MNC PROJECTS


//**OBJECT-ORIENTED CONCEPTS IN JAVASCRIPT */
// -introduction to oops in javascript
// understanding 'classes' and Objects in javascript
// understanding constructor and prototypes - [this keyword,call,apply,bind]
//more topics in oops -[ class expression,hoisting,inheritance getter & setter]

// whenever the code is small and understable we can do anything 
// without any guideline but when the code is big and complecated
//  then we have to use the guidelines

// oops => objects classes and functions
// we write a code in object classes and function
// modular,scalable,managable,promise,eas to fix ,reuse 


// understanding 'classes' and Objects in javascript

// **object
//object is used to store more than one information of user
let obj ={
    name: "vshakha",
    age : 22,
    email : "vishkah@123",
    address : "akola;"
}

//**classes => classes is blueprint */
//class - sachaaa
//constructor - automatic running function


// example-1
class Remote{
    constructor(){
        this.product = "daikin";
        this.price = 12300;
        this.color = "white"
    }
    powerOn(){
        console.log("the machine is on now.");
    }
    powerOff(){
        console.log("the machine is off now.");
    }
}

let Remote1 = new Remote();

// whenever we right a code and class in class we satrt a class name with capital letter and firstly start inner with constructor
//new means blanckobject
// we make classes for wanted a new a object each time
//classes is a factory objects
//everytimw with a new word when we run the class then we see a new object



// example-2
class Biscuitmaker{
    constructor(){
        this.name= "happy-happy"
        this.price= 5;
        this.color= "brown"
    }
}

let biscuit= new Biscuitmaker();
let biscuit1= new Biscuitmaker();
let biscuit2= new Biscuitmaker();



// example-3
class Alloochat{
    constructor(){
        this.name= "special-alloochat"
        this.price= 20;
    }
    packed(){
        console.log("aallochat is packed");
    }
    unpacked(){
        console.log("aallochat is unpacked");
    }
}
let newAllochat = new Alloochat();
let newAllochat1= new Alloochat();


// example-4
class Books{
    constructor(bookname,author,price,pages){
        this.bookname= bookname;
        this.author = author;
        this.price = price;
        this.pages = pages;
    }
    booked(){
        console.log("booked is placed");
    }
    deliver(){
        console.log("booked is delivered");
    }
}
let book1 = new Books("i know english","cak bonk goik",800,7300);
let book2 = new Books("i know","cak goik",500,700);
let book3 = new Books("i know more","cak the goik",100,600);


// example-5
class User{
    constructor(){
        this.username= "vishakha"
        this.useradress="akola"
        this.usergender="female"
    }
    reed(){
        console.log("reeds a book in freetime");
    }
    write(){
        console.log("user write a story each sunday");
    }
}

//THIS KEYWORD
//this value deside while running the code not when we right the code
//this value changes
// -- onew function which runs automatic when the class create a new instance
class Animal{
    constructor(){
        this
    }
}

//prototype

class Human{
    constructor(){
        this.name="vish";
        this.age = 22;
    }
}
 Human.prototype.this = function(){
    console.log("hii");
}
Human.prototype.that = function(){
    console.log("hii guyss");

};
let human1 = new Human();