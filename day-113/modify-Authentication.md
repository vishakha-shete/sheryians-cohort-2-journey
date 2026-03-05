# balckbox programming tells 
📘 Day 112 – Black Box Programming & Token Blacklisting
🧠 Concept 1: Black Box Programming

Black box programming means:
We know what a function does.
But we do not need to understand how it works internally.
In development, many libraries and functions are used as black boxes.

Example:
We know bcrypt.hash() hashes passwords.
But we don’t need to study its internal cryptographic algorithm.
If we try to understand every internal implementation, it would slow down development.
So developers focus on:
Input → Function → Output
without worrying about internal implementation.

🧩 Project Refactoring
FaceExpression.jsx

This file is mainly responsible for UI rendering.
To improve code structure, we separate logic from UI.

Folder Structure
expression/
│
├── FaceExpression.jsx
│
└── utils/
    └── util.js
util.js

We moved two important functions here:
init() → Initializes face detection setup
detect() → Detects the user's facial expression
This improves code readability and maintainability.

🔐 Authentication System Flow
Step 1 – User Registration

User sends request:
POST /register

with data:

{
  "username": "xyz",
  "email": "xyz@gmail.com",
  "password": "123456"
}

Server actions:
Save user data in database
Create a JWT token
Send token to the user

Step 2 – Token Usage
Whenever a user sends a request:
GET /profile
POST /transfer-money
The request includes the token.
Server reads the token and extracts user data.

Example token contains:

{
  id: user_id,
  username: "xyz"
}

Server now understands:
Request is coming from user "xyz"
🍪 Cookies
Token is usually stored in cookies.

Cookies are stored on the client side, but:
Server can read cookies
Server can update cookies
Server can delete cookies

🚨 Security Problem (Without Token Blacklisting)

Imagine this scenario:
User XYZ logs in
Server generates token XYZ_TOKEN
Token is stored in cookies
Now another user (N) somehow copies the token.
We don’t know how.

User XYZ → Logs out
Server → Clears cookie

But user N still has the copied token.

Now user N sends request:
Transfer ₹10,000 from XYZ account
Server reads the token and thinks:
Request is from user XYZ
Money gets transferred.
This is a security risk.

🛡️ Solution – Token Blacklisting

* When a user logs out:
User sends logout request
Token is sent to server
Server adds token to a Blacklist
Example:
Blacklist = [
  XYZ_TOKEN
]

Then server clears the cookie.
When Request Comes

If user N sends request with stolen token:
Server performs two checks:
1️⃣ Validate token
2️⃣ Check if token exists in Blacklist

If token exists in blacklist:
Server returns:
401 Unauthorized

Meaning:
Token is no longer valid
So the request is rejected.

⚙️ Project Setup
Initialize project:
npm init -y
Install required packages:

npm install express mongoose dotenv cookie-parser bcryptjs jsonwebtoken
🗄️ Mongoose Middleware
Mongoose allows us to run functions before or after database actions.
These are called Middleware (Hooks).
Pre Middleware
Runs before saving data to database.

Example:

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    // password hashing logic here

    next();
});

Purpose:
Hash password before saving
Validate data before database insert
Post Middleware
Runs after data is saved to database.

Example:
userSchema.post("save", function (doc, next) {
    console.log("User saved successfully:", doc);
    next();
});

Purpose:
Logging
Notifications
Analytics
Sending emails

📌 Key Learnings
Black Box Programming
Code Refactoring
Authentication flow
JWT token usage
Cookie-based authentication
Token Blacklisting for security
Express project setup
Mongoose middleware (pre and post hooks)