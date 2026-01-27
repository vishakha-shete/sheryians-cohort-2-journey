🚀 Backend Development – Day 1

Origin: 20

{
What I’m learning today 👇
1️⃣ How to run JavaScript outside the browser
- We can run JavaScript using Node.js

Command:
- node filename.js
- This allows JavaScript to work on the server side, not just in the browser.

}


{
📦 Packages in Backend Development
What are Packages?

* A package is code that we did not write ourselves
* It is already written by other developers
* These packages are shared publicly
Other developers can install and use this code in their projects
* This reusable code is called a package

🌐 Where do packages come from?

* Packages are available on the npm website (npmjs.com)
* npm has thousands of ready-made packages
* We use npm (Node Package Manager) to install packages

⬇️ How to install a package
Example: installing cat-me

npm install cat-me
or
npm i cat-me


✔️ This command:

* Fetches the package from npmjs.com
* Stores it in the node_modules folder
* Adds the package info to package.json

🧠 How to use a package in a project

const catMe = require("cat-me");

console.log(catMe());

✔️ require("cat-me") → imports the package
✔️ catMe() → runs the package code
✔️ Output is shown in the terminal

🔑 Important Notes

* Packages must be installed before use
* Package names are written inside quotes
* Packages help developers:
* Save time
* Reuse code
* uild applications faster 🚀

✅ Summary

* Packages = reusable code written by others
* npm = tool to install packages
* node_modules = stores installed packages
* package.json = tracks dependencies

📦 Understanding package.json, node_modules & package-lock.json
1️⃣ package.json

Think of package.json as the identity card of your backend project.

It tells:
- Which packages (dependencies) your project needs

- Which JS file runs first (entry point → usually index.js)

- Project info (name, version, scripts, etc.)

👉 When you install a package:
- Its name and version are saved in package.json
- This file decides which packages your code depends on
💡 Example idea:
“My project needs Express and Nodemon to run”


2️⃣ What happens when we install a package?

When you run:
npm install express

👇 This happens:
- npm fetches the code from the npm    website
- That package’s code is downloaded into a folder called node_modules
- The package name is added to package.   json

✔️ Installing a package = downloading someone else’s code

3️⃣ node_modules
This folder contains the actual code of all installed packages
Every package you install lives here
It can be very large, so we don’t push it to GitHub

👉 Important rule:
If you want to run a project that uses packages,
you must install packages first

npm install

📌 That command reads package.json and recreates node_modules
4️⃣ Why do we need to install packages before running code?

Because:
Your JS file uses external code
That code exists only inside node_modules
Without installing packages → ❌ code will fail

5️⃣ package-lock.json

This file:
Locks the exact versions of all packages
Keeps track of dependencies of dependencies
Ensures the project runs the same on every system

👉 In short:

package.json → what packages we want
package-lock.json → exact versions we actually got
}

{
3️⃣ What is a Server?

* A server is a machine (computer) that has:
- Its own operating system
- Processor (CPU)
- RAM
- Storage

This machine is programmed to:
- Receive requests from users (clients)
- Process those requests
- Send a proper response back to the users

👉 In simple words:
- A server listens for requests and responds with data or results.

🧠 Example

- User opens a website
- Browser sends a request to the server
- Server processes it
}

{
4️⃣ Create a Server using Express
npm init -y - it means we are starting node js application in this folder
for initialization of node js application we have this file
we need to use express because it helps us to make server easilly
express is package for installing express we run npm i express 
then we create app.js file in it and now if i want to use express.js package then
const express = require("express")
const app = express() we created server with the help of this
app.listen(3800) we use this for starting ther server run this in js file
Use Express.js (a Node.js framework)
It helps us create servers faster and easier
}


{
5️⃣ Program the Server to Respond to Users
Handle different routes (URLs)
Send responses like:

Text
JSON data
Messages
}


{
6️⃣ Deploy the Server
Make the server live on the internet
So anyone can access it using a URL
}

✨ Today marks the start of my Backend Development journey
From browser → server → real-world applications 💪


//package. json tells us in which package the javascript is depend


nodemodules -> 

//package.json