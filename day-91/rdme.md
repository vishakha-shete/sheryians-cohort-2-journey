# 🗄️ How We Store Data in Database (Using Mongoose)
📌 What Data Can We Store?
* In a database:
- We can store any type of data.
- The format of data depends on our application.
- Before storing data, we must define its structure.

# 🧱 What is a Schema?
- A schema defines the structure (format) of the data stored in the database.
* It tells the database:
- What fields are required
- What type of data each field contains

Example: Notes Schema
- We want to store notes like this:
{
  title: String,
  description: String
}


This means:
- Every note must have a title
- Every note must have a description
- Creating this structure is called:
- Creating a Schema

# 🏗️ What is a Model?
- If we want to perform database operations, we need a Model.
- A Model is used to perform CRUD operations on a collection.

CRUD means:

C → Create data
R → Read data
U → Update data
D → Delete data

Without a model, we cannot interact with the database properly.

# 📂 How Data is Stored in MongoDB

* Structure:

Cluster
   └── Database
         └── Collection (Notes)
               └── Documents (Actual Notes Data)


Each document (note) follows the schema format:

{
  title: "Sample Title",
  description: "Sample Description"
}

# 🆔 Unique ID in MongoDB
* Whenever we create a note:
- MongoDB automatically generates a unique ID.

This ID is called _id.
It is used to uniquely identify each document.

Important:
- No two documents have the same _id.
- Each ID is unique.

Example:
{
  _id: "64a8f2b1c1234567890abcd",
  title: "Learn Backend",
  description: "Understand schema and models"
}

#  🔥 Final Understanding
- Schema → Defines data structure
- Model → Used to perform CRUD operations
- Each note follows the schema format
- MongoDB automatically creates a unique _id
- No two documents have the same ID