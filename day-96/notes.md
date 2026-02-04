🔐 Authentication System – Core Concepts

* Today I learned the four main pillars of an Authentication System used in backend development.

🧱 Four Pillars of Authentication System

1) Authentication
2) Authorization
3) Validation
4) Verification

1️⃣ Authentication

* Authentication means:

- Identifying who the user is.

It checks:
- Which user is sending the request
- Whether the user is logged in or not
* Simple meaning:
- “User kaun hai?”

Example:
- User logs in with email & password
- Server checks identity

If correct → user is authenticated ✅

2️⃣ Authorization
* Authorization means:
- What actions the user is allowed to perform.

Simple meaning:
- “User kya kar sakta hai?”

Example – Spotify
* Normal User can:
- Listen to songs
- Watch content
- Play music
- Like songs

But:
- Cannot upload songs ❌

Artist can:
Upload songs ✅

👉 This difference in permissions is authorization.

3️⃣ Validation
* Validation means:
- Checking if the data format is correct.
Simple meaning:
- “Data ka format sahi hai ya nahi?”

Examples:
- Valid email format → abc@gmail.com
- Password length requirement
- Phone number format

If format is wrong → request rejected ❌

4️⃣ Verification
* Verification means:
- Checking if the data is actually correct.

Simple meaning:
“Data sach me sahi hai ya nahi?”

Examples:
- OTP verification
- Email verification link
- Checking password matches stored password


🛠.1) Q How Authentication is Implemented (Using JWT)

Step 1: Save User Data
- User registers
- Their data is saved in the database

Step 2: Create a Token (User ID Card)
When user logs in:
- Server creates a token
- Token contains user information
- This token acts like a digital ID card

Step 3: JWT Token Creation
We use JWT (JSON Web Token).

* The server:
- Creates a token
- Adds a signature
- Signs it using a secret key (JWT_SECRET)

👉 This secret ensures:
- The token was created by our server only

Step 4: Sending Token to User
- Token is sent to user
- User sends token with every request

Step 5: Server Verifies Token
- Server checks token signature using JWT_SECRET

If valid → user is authenticated ✅
If not → access denied ❌

🔥 Summary
| Pillar         | Meaning                |
| -------------- | ---------------------- |
| Authentication | Who the user is        |
| Authorization  | What the user can do   |
| Validation     | Data format check      |
| Verification   | Data correctness check |

🎯 Final Understanding

An authentication system:
- Identifies users
- Controls permissions
- Validates input
- Verifies correctness
  
Q.2) How we can implement autherization ?

Q.1) How we can implement authenticayion ?

Q.1) How we can implement authenticayion ?