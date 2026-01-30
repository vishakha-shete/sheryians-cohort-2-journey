# API

An API allows different software systems to communicate by sending requests and receiving responses.

* An API is a waiter between you and the system.

You (client) send a request
- API takes it to the server
- Server processes it
- API brings the response back to you

Tech version (still simple)
An API:
- Accepts a request
- Sends it to the server logic
- Returns data or results

- API :  a set of rules and protocall that inables diffferent
 software program to communicate and exchange data with each other


🌐 What is a REST API?

- A REST API is an API that follows specific rules to communicate over the internet using HTTP methods.

REST = REpresentational State Transfer

It means:
- Client and server talk using URLs
- They use HTTP methods to perform actions

🧠 In simple words
A REST API lets us:
- Get data
- Send data
- Update data
- Delete data
using standard web requests.

A REST API is an API that uses HTTP methods (GET, POST, PUT, DELETE) and URLs to perform operations on data.

🔥 The 4 Main REST Actions

| Action      | HTTP Method     | What it does           | Example            |
| ----------- | --------------- | ---------------------- | ------------------ |
| Read data   | **GET**         | Fetch data from server | Get user info      |
| Create data | **POST**        | Send new data          | Create new account |
| Update data | **PUT / PATCH** | Modify existing data   | Update profile     |
| Delete data | **DELETE**      | Remove data            | Delete a post      |


📦 Example (User API)

| Task          | Method | URL        |
| ------------- | ------ | ---------- |
| Get all users | GET    | `/users`   |
| Get one user  | GET    | `/users/1` |
| Create user   | POST   | `/users`   |
| Update user   | PUT    | `/users/1` |
| Delete user   | DELETE | `/users/1` |
