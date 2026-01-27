# 1. How to Run JavaScript Outside the Browser

- Till now, you have only run JavaScript inside the browser. But
JavaScript is not a browser-only language.

- Node.js allows us to run JavaScript directly on our computer,
without Chrome, without HTML, without React.

* That means:
- JavaScript can create servers
- JavaScript can talk to databases
- JavaScript can run scripts
- JavaScript can power backend logic

* Technical Definition
  >Node.js is a JavaScript runtime environment that allows JavaScript
  to run outside the browser using the V8 engine.

* Steps to Run a Script
  1. Install Node.js
  - Download from official site
  - Verify installation:
     node -v

  2. Create a JavaScript file
  - File name can be anything
  - Example: `app.js`

  3. Write JavaScript code
   console.log("hello world from node.js")
  4. Open terminal in that folder
  5. Run the file
   node app.js
  6. Output appears in the terminal (not browser)

4. Run server
   node index.js

5. Open browser:
  http://localhost:3000

2.3 What Is a Server?
A server is a program that listens for requests and sends
responses.
Client asks:
> “Give me data”
Server replies:
> “Here is the data”
Browser, mobile apps, Postman → all are **clients**
.

* Technical Definition
-A server is a software application that listens on a network port and
handles incoming HTTP requests by sending responses.
Why Do We Need Servers?
To store data
To authenticate users
To connect frontend with database
To apply business logic
Interview Questions
What is a server?
Difference between client and server?
Can frontend act as a server?
2.4 Create a Server Using Express
Why Express?
Writing servers using plain Node.js is painful and verbose.
Express:
Simplifies server creation
Handles routing
Handles middleware


Steps to Create Server
1. Initialize project
    npm init -y

2. Install Express
   npm install express

3. Create `index.js`
   const express = require ("express");
   const app = express();

   app.get("/",(req, res)=>{
    res.send("server is running");
   });

   app.listen(3000,()=>{
    console.los("server running pon port 3000")
   });

What Is Happening?
`app.get`→ route
`/`→ endpoint
`req`→ request from client
`res`→ response from server
`listen`→ starts server

Common Pitfalls
❌ Port already in use
❌ Forgetting to restart server
❌ Syntax errors crashing server
❌ Using browser-only APIs
  
  Interview Questions
What is Express?
Why Express over Node HTTP module?
What is a route?
What does
`
app.listen
` do?

Optional Tasks
Change port number
Add one more route (`/about`)
Return JSON instead of text