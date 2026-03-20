Full Stack Authentication System with Redis
🚀 Overview

This project implements a full-stack authentication system using:
React (Frontend)
Node.js + Express (Backend)
MongoDB (Database)
Redis (Token Blacklisting)
The system is designed with a layered architecture for scalability and clean code organization.
🧠 Why Redis for Blacklisting?
Previously, blacklisted tokens were stored in the database.

❌ Problem:

Increased load on database
Slower authentication checks
✅ Solution: Redis
We moved token blacklist to Redis because:

⚡ In-memory → extremely fast

📈 High throughput
🔄 Reduces database load
🚀 Ideal for real-time auth checks

🔐 Authentication Flow
User Login → Token Issued
           ↓
User Logout → Token stored in Redis (blacklist)
           ↓
Request → Check Redis
           ↓
Token in Redis? → ❌ Reject
Token not in Redis? → ✅ Allow
⚙️ Redis Configuration

We use a Redis Cloud instance (public endpoint)

🔑 Credentials:
REDIS_HOST=redis-15408.crce283.ap-south-1-2.ec2.cloud.redislabs.com
REDIS_PORT=15408
REDIS_PASSWORD=**************
🧩 Redis Data Structure

Redis stores data in key-value pairs.

Example:
{
  token: "blacklisted"
}
🏗 Project Architecture


The frontend is structured into 4 main layers:

🎨 1. UI Layer

Responsible for:
Rendering UI
Handling navigation

📂 Structure:
auth/
 ├── pages/
 │    ├── login.jsx
 │    ├── register.jsx
 │
 ├── components/
 │    ├── Formgroup.jsx
 │    ├── Protected.jsx
🧠 2. Hook Layer

Responsible for:
Managing auth logic
Handling API calls

📂 Example:
hooks/
 ├── useAuth.js
 
Features:
handleLogin
handleRegister
handleLogout
handleGetMe

🗄 3. State Layer

Responsible for:
Storing global user data
Managing authentication state

📂 Example:
context/
 ├── auth.context.jsx
 ├── post.context.jsx

🌐 4. API Layer
Responsible for:
Communication with backend

📂 Structure:
services/
 ├── auth.api.js

Example:
axios.post("/api/auth/login")
axios.post("/api/auth/register")

🔀 Routing Setup

We use React Router for navigation.

Routes:
/login     → Login Page
/register  → Register Page

All routes are managed in:

app.routes.js
🔐 Protected Routes

We created a:
Protected.jsx

👉 This component ensures:
Only authenticated users can access protected pages
Unauthorized users are redirected



🔄 Development Flow

We built the project layer by layer:

✅ UI Layer (Login & Register Pages)
✅ API Layer (Axios setup)
✅ State Layer (AuthContext)
✅ Hook Layer (useAuth)
✅ Protected Routes
✅ Redis Integration for Blacklisting

🧠 Key Features

🔐 JWT Authentication
🍪 Cookie-based auth
⚡ Redis token blacklist
🧩 Clean architecture
🔄 Reusable hooks
🚫 Route protection

🚀 Tech Stack

Frontend: React, SCSS
Backend: Node.js, Express
Database: MongoDB
Cache: Redis
Auth: JWT + Cookies