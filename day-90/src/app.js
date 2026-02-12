const express = require("express"); //creating a server

const app = express(); // config the server

app.use(express.json());

const notes = []



module.exports = app; //exporting the server