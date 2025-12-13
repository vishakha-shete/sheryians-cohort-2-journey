// # Day 62 – Error Handling

// ## Introduction to Error Handling
// Error handling allows JavaScript applications to detect, manage, and recover from unexpected issues during execution.

// ### Why it's important:
// - Prevents app crashes
// - Helps debug issues faster
// - Ensures smooth user experience
// - Makes code more predictable and stable

//-Introduction to Error Handling
// ---->any error accurs in code to solve the error means error handlling

//-common types of error in jvascript - ['syntax errors',run error,logical error]
// ---->syntax error => if we make mistake while writting the code is called syntax error
// a let =12

// ---->runtime error => while youu erititing the code then no error while running the code error occurs
function ab() {
    let a = 12;
    console.log(a.name);
}
ab();


//logical error => your codes need to to write in different style but u wrote in different u bilt your logic not correct
// --->it dont give any error
function add(a, b) {
    return a - b;
}
console.log(add(1, 2));


//-understanding the error using `try=catch`,`try-catch-finally`
// -->if error occurs still next code will run it dont stope the code from running
try {
    let a = 12;
    console.log(a.age.name);
}
catch (err) {
    console.error(err);
}

//-How to Throw errors in javascript
try {
    let b = 12;
    console.log(a.name.age);
}
catch (err) {
    throw new error("something went wrong");
}


//-Error Handling in asynchronous code



// ### Basic flow:

// 1. Code executes
// 2. If an error occurs, control jumps to the nearest `catch` block

// ### Simple example:

console.log("Start");

try {
    let result = x + 5;   // x is not defined → error
} catch (error) {
    console.log("Error occurred:", error.message);
}

console.log("End");


// ## Common Types of Errors in JavaScript
// ### Syntax Errors
// These occur before code executes — due to invalid JavaScript syntax.

// Missing closing bracket → SyntaxError
// if (true {
//     console.log("Hello");
// };



// ### Runtime Errors
// Errors occurring while the code is running.

function demo() {
    console.log(a);  // ReferenceError: a is not defined
}
demo();


// ### Logical Errors
// Code runs without crashing but produces incorrect output.

// Intent: multiply numbers
function multiply(a, b) {
    return a + b;   // Wrong logic → logical error
}

console.log(multiply(5, 3)); // 8 instead of 15

// ## Understanding the Error Object

// The JavaScript `Error` object contains metadata about the failure.

// ### Properties:

// - `message` – description of the error
// - `name` – error type: `ReferenceError`, `TypeError`, `SyntaxError`, etc.
// - `stack` – stack trace (where the error occurred)

// ### Example:

try {
    let obj = undefined;
    obj.name; // TypeError
} catch (err) {
    console.log("Name:", err.name);
    console.log("Message:", err.message);
    console.log("Stack:", err.stack);
}

// ## Handling Exceptions: try-catch and try-catch-finally
// ### Basic try-catch

try {
    let num = 10 / 0;
    console.log(num);
} catch (error) {
    console.log("Something went wrong!");
}

// ### Detailed catch

try {
    JSON.parse("{ bad json }");
} catch (error) {
    console.log("Error:", error.message);
}

// ### Using finally
// `finally` executes whether an error occurs or not.

try {
    console.log("Opening file...");
    throw new Error("File corrupted");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Closing file...");
}


// **Output:**

// ```
// Opening file...
// Error: File corrupted
// Closing file...


// 
// ## How to Throw Errors in JavaScript
// You can create custom errors using `throw`.
// ### Throwing a simple error
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}


// ### Throwing custom error types

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(age) {
    if (age < 18) {
        throw new ValidationError("User must be 18+");
    }
    return "User registered";
}

try {
    registerUser(15);
} catch (err) {
    console.log(err.name);    // ValidationError
    console.log(err.message); // User must be 18+
}
