🧠 REST API – Day 3 Notes
🌐 What we built today

Today we created a server and inside that server we built a simple REST API.

* Using this API, we can:
- Create a note
- Read notes
- Update a note
- Delete a note

📁 Project Structure
app.js
This file is used to:
Create the server application
Configure the server

Example:
const express = require("express");
const app = express();
app.use(express.json());
module.exports = app;

server.js

This file is used to:
Start the server
Run the server on a specific port

Example:
const app = require("./app");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

⚙️ Middleware
app.use(express.json());

* This is a middleware
- It allows the server to understand JSON data sent in requests
- Without this, req.body will not work

📦 req.body
* We use req.body when:
- The client sends data in the request body
- Usually used with POST, PUT, PATCH

Used when sending:
- JSON objects
- Forms
- Large data

Example:
app.post("/notes", (req, res) => {
  console.log(req.body);
});

🔗 req.params
* We use req.params when:
- Data is sent through the URL
- Used to get single values like:
- ID
- Index
- Username

Example:

app.delete("/notes/:index", (req, res) => {
  console.log(req.params.index);
});

❗ Understanding Delete & Null Concept
* In backend systems:
* Sometimes data is not permanently deleted
* Instead, it is marked as:
- null
- inactive
- isDeleted: true
- This is called soft delete.

👉 Why?
- To keep history
- To recover data later
- To avoid permanent loss

Hard delete = data removed completely
Soft delete = data hidden but still stored

🔥 Summary

* Built a REST API for notes
* Learned server structure (app.js & server.js)
* Understood middleware
* Learned req.body vs req.params* 
* Learned soft delete concept