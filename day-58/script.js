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

//MORE TIPICS IN OOPS -[CLASS EXPRESSION,HOISTING,INHERITANCE,GETTER & SETER]

//** */ CLASS EXPRESSION

let Animal = class {
    constructor() {
        this.name = "Tiger";
        this.age = 22;
    }
};

let Animal1 = new Animal();


// ** INHERITANCE
// if one class is present and in that class something is written and one more class which extend this class
//then the all feature of old class can use/borrow in new class extension and also we can add a new feauture in class

// Example-1

class Animal2 {
    constructor() {
        this.hands = 2;
        this.legs = 2;
    }
    eat() { }
    breathe() { }
}
class khekada extends Animal2 {
    constructor() {
        super();
        this.legs = 8;
        this.hands = 0;
        this.color = "brown";

    }
    potty() { }
}
let khekada1 = new khekada();


// Example-2

class Marker {
    constructor() {
        this.write = "writting";
    }
}
class blueMarker extends Marker {

}

//Example-3

class Animal3 {
    constructor() {
        this._age = 12;
    }

    set age(val) {
        if (val < 0) {
            console.error("not possible");
        }
        this._age = val;
        return this._age;
    }
    get age() {
        return this._age;
    }
}
let a1 = new Animal3();
console.log(a1.age);
a1.age = 27;