# 🚀 Introduction to TypeScript  

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Learning-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner-green?style=for-the-badge)

---

## 📌 Overview  

This repository contains my **TypeScript learning journey** 🚀  
It covers **fundamentals, data types, and real examples** to understand why TypeScript is important in modern web development.

---

📘 Introduction to TypeScript
🚀 Why TypeScript?

JavaScript is powerful, but sometimes it behaves in unexpected ways:

console.log("5" + 1); // 51
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("5" + true); // "5true"
console.log(typeof ([] + [])); // string
console.log([1] + 1); // "11"
console.log([1,2] + 1); // "1,21"
console.log(5 + true); // 6
console.log({} + []); // [object Object]
console.log([] == false); // true

👉 These issues happen because JavaScript is loosely typed.

✅ TypeScript solves this by enforcing strict types, making code:

More predictable
Easier to debug
Better for large-scale applications

## 🤔 Why TypeScript?  

JavaScript is flexible, but sometimes **too flexible** 😅  

```js
console.log("5" + 1); // 51
console.log("5" - 1); // 4
console.log([] == false); // true

👉 These unexpected behaviors can create bugs.

✅ TypeScript solves this by adding types, making code:

🔒 Safer
🧠 Easier to understand
⚡ More scalable
⚙️ Setup Guide
📦 Initialize Project
npm init -y
npm install typescript --save-dev
npx tsc --init
📁 Create File
touch index.ts
# OR (PowerShell)
ni index.ts
▶️ Compile & Run
npx tsc index.ts
node index.js

👉 PowerShell users:

npx tsc index.ts; node index.js
🧠 Basic Example
console.log("Hello World");

const a: string = "world";
const b: number = 5;

console.log(a + b); // world5
📊 TypeScript Data Types
🔹 Primitive Types
🟢 String
const name: string = "Vishakha";
🔵 Number
const num: number = 1234;
🟣 Boolean
const isActive: boolean = true;
🔹 Array
const arr: number[] = [1, 2, 3];
arr.push(4); // ✅
// arr.push("hello"); ❌ Error

👉 Fixed type, dynamic size

🔹 Tuple
const user: [number, string] = [1, "Vishakha"];

👉 Fixed type + fixed length

🔹 Void
function greet(name: string): void {
  console.log("Hello " + name);
}
🔹 Never
function error(): never {
  throw new Error("Something went wrong");
}
🧩 Custom Types
type USER = {
  name: string;
  age: number;
  isStudent: boolean;
};

const user: USER = {
  name: "Ankur",
  age: 22,
  isStudent: false,
};
⚠️ Special Types
🔸 any
let value: any = "hello";
value = 10; // allowed

⚠️ Avoid using any (removes type safety)

🔸 unknown
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

✅ Safer than any

🎯 Key Takeaways

✨ TypeScript = JavaScript + Type Safety
✨ Helps catch errors early
✨ Improves code quality
✨ Must-have skill for modern developers

🛠️ Tech Stack
💻 TypeScript
🌐 JavaScript
⚙️ Node.js
📈 Learning Goals
✅ Understand TypeScript basics
✅ Build strong type concepts
🔄 Apply in real-world projects
🚀 Prepare for MNC-level development
🤝 Connect With Me

👩‍💻 Vishakha Shete
🚀 Aspiring Full Stack Developer
