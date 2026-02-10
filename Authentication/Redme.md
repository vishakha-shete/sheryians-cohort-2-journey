🔐 Authentication – Why and How It Works
📌 Why Do We Need Authentication?
# In real applications:
* We have one server
- But multiple users
- Many users send requests at the same time

Example APIs:
POST /api/post/:postId/like
POST /api/post/:postId/save


Two different users may call the same API.
- So the server must understand:

❓ Which user is sending this request?
* Without authentication:
- Anyone could like, save, delete, or modify anything
- The server would not know the identity of the user

That’s why authentication is required.
🧠 What is Authentication?
- Authentication means identifying which user is sending the request.

* Simple meaning:
“Yeh request kis user ne bheji hai?”

🛠 How Authentication Works (Step-by-Step)
1️⃣ User Registration
- First, the user registers by sending data to the server through a Register API.

Example request body:
{
  "name": "Vishakha",
  "email": "vishakha@gmail.com",
  "password": "123456"
}


This data is received in:
req.body

2️⃣ Server's Two Main Jobs During Registration
* When a user registers, the server:
- Saves user data in the database
- Creates a token using the user's information

🎟 What is a Token?
- A token is like a digital ID card.
- It proves that the user is authenticated.
- It is created by the server.
- The server sends this token back to the user.

Example:
TOKEN: abc123xyz

3️⃣ After Registration / Login
- After the user gets a token:
- Every request sent to the server must include this token.
- This is the main rule of authentication systems.

🍪 What Are Cookies?
- Cookies are storage on the client side (browser).
- The token can be stored inside cookies.
- Every time the user sends a request, the cookie (with token) goes along with it.

4️⃣ What Happens on the Server?
* When a request comes:
- Server checks if the token is included.
- Server verifies the token.
- If token is valid → user is authenticated ✅
- If token is invalid → access denied ❌

🔄 Complete Flow Summary
- User registers
- Server saves user data
- Server creates token
- Server sends token to user
- User stores token (cookie/local storage)
- User sends token with every request
- Server verifies token
- Server allows or denies access

🔥 Final Understanding
- Authentication helps the server:
- Identify users
- Secure APIs
- Prevent unauthorized access
- Manage multiple users correctly
- Without authentication, a real-world application cannot be secure.