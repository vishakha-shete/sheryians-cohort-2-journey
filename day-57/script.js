// thiss for example
//this is special keyword because this value changes

//global => window
//function => window
//es5 function inside object => value object
// es6 function inside objects => windows
//es5 function inside es5 function inside object => window
//es6 function inside es5 function inside object => object


//global => window
console.log(this);
// output =window



//function => window
function abcd() {
    console.log(this);
}
// output =window




//es5 function inside object => value object
let obj = {
    name: "vishakha",
    func: function () {
        console.log(this);
    }
}
obj.func()
// exact output name ,fnc





// es6 function inside objects => windows
let obj1 = {
    fnc: () => {
        console.log(this);
    }
}
obj1.fnc()
//windows


//es5 function inside es5 function inside object => window
let obj2 = {
    fnc: function () {
        function abcd() {
            console.log(this);
        }
        abcd();
    }
}
//windows




//es6 function inside es5 function inside object => object
let obj4 = {
    fnc: () => {
        function efgh() {
            console.log(this);
        }
        efgh();
    }
}
// object


//Example-1
class Bottle {
    constructor() {
        this.color = "skyblue";
        this.material = "plastic";
        this.price = 300;
    }
    filled() { }
    drink() { }
}
let Bottle1 = new Bottle();


//prototype
//prototype is a shared memory


// Example-1
class Skeach {
    constructor(character, color, height, artist) {
        this.character = character;
        this.color = color;
        this.height = height;
        this.artist = artist;
    }
}
Skeach.prototype.skeachcompleted = function () {
    console.log("yess done");
}
Skeach.prototype.skeachuncompleted = function () {
    console.log("not done");
}


let Skeach4 = new Skeach("doremon", "blue", 4, "vishakha");
let Skeach1 = new Skeach("nobita", "skinny", 5, "rutuja");
let Skeach2 = new Skeach("sunio", "midium-white", 4, "dhanashri");
let Skeach3 = new Skeach("giyan", "black", 6, "sampada");


// calls apply bind
// in function this value is window if you want that value dont window but any object
// then we use call apply bind

//call runs a function and set this value
//call
let obj5 = {
    name: "Akshara"
}
function abcd(a, b, c) {
    console.log(this);
}
abcd.call(obj5, 1, 2, 3);


//same work as a call and in parameters and arguments first value of this and second value is array
//apply
let obj6 = {
    name: "Akshara"
}
function abcd(a, b, c) {
    console.log(this, a, b, c);
}
abcd.call(obj6, [1, 2, 3]);


//same works as a call and gives a new function
//bind
let obj7 = {
    name: "Akshara"
}
function abcd(a, b, c) {
    console.log(this, a, b, c);
}
let newfnc = abcd.bind(obj7, 1, 2, 3);
newfnc();