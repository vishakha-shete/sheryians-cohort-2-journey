//SECTION 1: OBJECTS AND OOPS THINKING (FOUNDATION)

//CREATE A USER OBJECT THAT STORES NAME AND EMAIL AND HAS A LOGIN METHOD
// WHICH PRINTS "USER LOGGED IN".

//IMAGINE YOU NOW HAVE 5 USERS
//FIRST , THINK HOW YOU WOULD MANAGE THEM WITHOUT USING A CLASS.
//THEN CONVERT THE SAME LOGIC USING A CLASS AND OBSERVE HOW THE CODE 
//BECOMES CLEANER.WRITE CODE FOR BOTH APPROACHES.

//CREATE A PRODUCT OBJECT THAT STORES NAME AND PRICE AND HAS A METHOD
//WHICH RETURNS A FINAL PRICE AFTER DISCOUNT

//THE GOAL OF THIS SECTION IS TO UNDERSTAND WHY KEEPING DATA 
//BEHAVIOUR TOGETHER MAKES CODE EASIER TO MANAGE



// Questions-1
//CREATE A USER OBJECT THAT STORES NAME AND EMAIL AND HAS A LOGIN METHOD
// WHICH PRINTS "USER LOGGED IN".

let user = {
    name: "vishakha",
    email: "vishakha@gmail.com",
    login: function () {
        console.log("USER LOGGED IN");
    }
};

user.login();



// Questions-2
// Create a student object with properties name, age, and a method study() which prints "<name> is studying".

let student = {
    name: "rutvik",
    age: 15,
    study: function () {
        console.log(this.name + " is studying");
    }

}
student.study();



// Questions-3
// Create a car object that stores brand, model, and has a method start() that prints "Car Started"

let car = {
    brand: "lamborghini",
    model: 9,
    start: function () {
        console.log("car started");
    }
}
car.start();



// Questions-4
// Create a book object with title, author, and a method read() that prints "Reading <book title>".

let book = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();


// Questions-5


//IMAGINE YOU NOW HAVE 5 USERS
//FIRST , THINK HOW YOU WOULD MANAGE THEM WITHOUT USING A CLASS.
//THEN CONVERT THE SAME LOGIC USING A CLASS AND OBSERVE HOW THE CODE 
//BECOMES CLEANER.WRITE CODE FOR BOTH APPROACHES.


let book1 = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();

let book2 = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();


let book3 = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();


let book4 = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();


let book5 = {
    title: "i love myself",
    author: "rudransh thakur",
    read: function () {
        console.log("reading " + this.title);
    }
}
book.read();

class user1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    loggedin() {
        console.log("level-upp");
    }
}

let usernew1 = new user1("dipanshu", "dip@213")
let usernew2 = new user1("priyaanshu", "priyu@213")
let usernew3 = new user1("nilima", "niluu@213")
let usernew4 = new user1("dipanshu", "dip@213")
let usernew5 = new user1("dipanshu", "dip@213")


//CREATE A PRODUCT OBJECT THAT STORES NAME AND PRICE AND HAS A METHOD
//WHICH RETURNS A FINAL PRICE AFTER DISCOUNT

let product = {
    name: "bottle",
    price: "150",
    discountedprice: function () {
        return this.price - 50;
    }
}

console.log(product.discountedprice());


// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// ⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.


// question-1
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed