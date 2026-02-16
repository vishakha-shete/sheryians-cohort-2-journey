# 🌐 Full Stack – Notes Server (Today’s Goal)
* 🎯 Today’s Goal

# Today’s goal was to create a backend server where:
- A note can be created
- A note can be read
- A note can be updated
- A note can be deleted
- After creating this server, we will integrate it with the frontend.

# 🗄️ Database Structure (Schema)
- In the database, data is stored in a specific format called a schema.
- A schema defines how data should be stored in the database.

Notes Schema Example
{
  title: String,
  description: String
}

* This means:
- Every note has a title
- Every note has a description

# 🧠 Why Schema is Important
- Ensures consistent data structure
Prevents incorrect data storage
Helps in validation and querying

# 🔁 CRUD Operations on Notes

- The server supports CRUD operations:
- Create → Add a new note
- Read → Fetch notes from database
- Update → Edit an existing note
- Delete → Remove a note

# 📤 Fetching Notes from Database
- We use database methods (like find)
- The find() method returns data in array format

Example:
[
  {
    "_id": "64a8f2...",
    "title": "Learn Backend",
    "description": "Build REST APIs"
  },
  {
    "_id": "64a8f3...",
    "title": "Full Stack",
    "description": "Integrate frontend and backend"
  }
]

# 🔥 Final Summary

- Built a notes server
- Implemented full CRUD functionality
- Used schema to define data format
- find() returns notes as an array
- Next step: frontend–backend integration 🚀