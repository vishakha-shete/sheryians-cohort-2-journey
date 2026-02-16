// this file work is to start the server and connect the server with db
require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb()

app.listen(3000,()=>{
    console.log("app running at port 3000");
})