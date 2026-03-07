# Day Learning Notes – Redis & MongoDB

## Why We Do Not Use Redis as a Primary Database

Redis is a very powerful tool, but it is generally **not used as a primary database** for most applications.

### 1. Costly Storage
- Redis stores data **in RAM (memory)**.
- RAM is much **more expensive than disk storage**.
- Because of this, storing large amounts of data in Redis becomes costly.

### 2. Limited Query Capability
- Redis mainly works on a **key–value pair structure**.

Example:

key → value

- The value is usually stored as a **string**.
- Complex queries like joins, filters, or aggregations are not easy compared to databases like MongoDB or SQL databases.

### 3. Data Structure Limitations
- Redis is designed for **fast access**, not for complex relational data.
- It does not behave like a full-featured database system.

---

## When Redis Is Commonly Used

Redis is mostly used for **high-speed temporary storage**, such as:

- Caching frequently used data
- Session storage
- Token blacklisting
- Rate limiting
- Tracking logged-in users

Example:
- When a user logs in, Redis can quickly check whether the user session is valid.

Because Redis is **extremely fast**, it is perfect for these tasks.

---

## MongoDB as Primary Database

MongoDB is commonly used as a **primary database**.

### Data Format
MongoDB stores data in **BSON (Binary JSON)** format.

Example:

json
{
  "username": "vishakha",
  "email": "vishakha@gmail.com",
  "password": "hashed_password"
}

## Advantages of MongoDB

Flexible schema
Supports complex queries
Good for large data storage
Scalable and widely used in modern applications

## Throughput

MongoDB provides good throughput, meaning it can handle many read and write operations efficiently.

Summary

Feature            |	   Redis	      | MongoDB
_____________________________________________________
Storage	           |     RAM	        |   Disk
Cost	             |  Expensive       |   Cheaper
Query Capability   |  Limited      	  |  Advanced
Data Format	       |  Key–Value       |	BSON Documents
Best Use Case	     | Caching, sessions|	Primary database


Conclusion
Redis is best used for speed and temporary data.
MongoDB is better for storing application data permanently.