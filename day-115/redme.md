# Redis vs MongoDB and Throughput Concept

## Why We Do Not Use Redis as a Primary Database

Redis is a very fast data storage system, but it is **not usually used as the main database** for applications.

### 1. Cost
Redis stores data in **RAM (memory)**.  
RAM is **much more expensive** than disk storage.

Because of this, storing large amounts of data in Redis can become **very costly**.

### 2. Query Limitations
Redis mainly stores data in **key–value format**.

Example:

key → value

The value is often stored as a **string**.

Because of this:
- Complex queries are difficult
- Filtering and searching large datasets is limited

### 3. Best Use Case of Redis
Redis is mainly used for **high-speed temporary operations**, such as:

- Session storage
- Caching
- Token blacklisting
- Rate limiting
- Tracking logged-in users

Example:
Checking whether a user is logged in can be done very quickly using Redis.

---

# MongoDB

MongoDB is commonly used as a **primary database**.

### Data Format
MongoDB stores data in **BSON (Binary JSON)** format.

Example:

``json
{
  "username": "user1",
  "email": "user1@gmail.com",
  "password": "hashedpassword"
}


# Advantages

* Supports complex queries
* Stores large datasets efficiently
* Flexible schema
* Good for long-term storage

Example: Multiple APIs in a Server

# * In a real-world server (like Instagram), many APIs exist.

Example APIs:
/api/posts/like/:postid
/api/posts/save/:postid
/api/posts/comment/:postid
/api/posts/story/comment/:storyid

Each API performs different tasks.

Example:

Like a post
Save a post
Comment on a post
Comment on a story
But one common requirement exists:

👉 The server must know which user is making the request.
* Role of Middleware
* To identify the user making the request, we use authentication middleware.

# Example middleware:
* authUser
* This middleware checks:
* Which user sent the request
* Whether the token is valid
* Whether the token is blacklisted

Example flow:
User Request
     ↓
AuthUser Middleware
     ↓
Verify Token
     ↓
Identify User
     ↓
Allow API to run

* Problem: Database Load
* Suppose we store blacklisted tokens in MongoDB.

Every request will perform:
* Read Operation → Database
* Because the authUser middleware runs for every API request.

Example:
* Check if token exists in blacklist
* This creates a huge load on the database.
* Throughput Concept

Throughput means:
* Number of operations a database can handle per second

Example:
* Database Throughput = 50,000 operations/sec
* But large platforms like Instagram receive:

Traffic Level	Requests per Second
Peak Traffic	1,000,000 / sec
Global Average	200,000 – 500,000 / sec
Lowest Traffic	~200,000 / sec

- Even the lowest traffic is higher than database throughput.
- This means the database cannot handle all requests efficiently.
- Solution: Use Redis for Blacklist
- Instead of storing blacklisted tokens in MongoDB, we store them in Redis.

Why Redis?
* Redis has:
- Extremely high throughput
- Very fast read/write operations
- Data stored in memory

* So the flow becomes:
User Request
      ↓
AuthUser Middleware
      ↓
Check Token in Redis
      ↓
If token blacklisted → Reject request
      ↓
If token valid → Allow API

* Benefits
- Reduces load on MongoDB
- Faster authentication checks
- Handles high traffic efficiently

Final Architecture
User Request
     ↓
Server
     ↓
AuthUser Middleware
     ↓
Redis (Token Blacklist Check)
     ↓
If Valid → Continue
     ↓
MongoDB (Application Data)

Summary
* Technology Purpose
- MongoDB	Primary database for application data
- Redis	Fast in-memory storage for caching, sessions, and token blacklist
- Middleware Identifies which user is making the request
- Throughput Number of operations a system can handle per second
   Key Learning

* Redis is used for speed
- MongoDB is used for data storage
- Redis helps reduce load on the primary database
- High traffic systems require caching layers like Redis


This project implements a token blacklisting system using Redis to handle user authentication efficiently.

Previously, blacklisted tokens were stored in the primary database.
To improve performance and scalability, we moved this logic to Redis, an in-memory data store.

🧠 Why Redis?

Instead of checking blacklisted tokens in the database:
❌ Database queries are slower
❌ Increased load on primary database

We use Redis because:
⚡ Extremely fast (in-memory storage)
📈 High throughput
🔥 Reduces load on main database
⏱ Ideal for real-time authentication checks

🔄 How It Works
User logs out → token is added to Redis blacklist
On every request:
Server checks token in Redis
If token exists → ❌ request denied
If token does not exist → ✅ request allowed


🔐 Authentication Flow
Client Request → Server
              ↓
        Check Token in Redis
              ↓
     ┌───────────────┐
     │ Token Exists? │
     └──────┬────────┘
            │
     YES ❌  │  NO ✅
            ↓
   Reject Request   Allow Request


🗂 Redis Configuration
We use a Redis Cloud instance.

Connection Details:

REDIS_HOST=
REDIS_PORT=15408
REDIS_PASSWORD=***************
⚙️ Redis Client Setup
const Redis = require("ioredis").default;

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

redis.on("connect", () => {
  console.log("Server connected to Redis ✅");
});

redis.on("error", (err) => {
  console.log("Redis connection error ❌", err);
});

module.exports = redis;
🧩 Data Structure in Redis
Redis stores data in key-value pairs.


Example:

{
  token: "blacklisted"
}

Or for user-like structure:

{
  username: "string",
  email: "test@test.com"
}


🎯 Use Case: Token Blacklisting
When a user logs out:
redis.set(token, "blacklisted");

When a request comes:

const isBlacklisted = await redis.get(token);
if (isBlacklisted) {
  return res.status(401).json({ message: "Unauthorized" });
}


🧠 Benefits

⚡ Faster authentication checks
📉 Reduced database load
🔄 Scalable architecture
🧩 Clean separation of concerns
📌 Note

This Redis instance is a public endpoint requiring:

Host
Port
Password