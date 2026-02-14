require("dotenv") = config()
const connectToDb = require("./src/config/database");
const app = require("./src/app");
const mongoose = require ("mongoose")



connectToDb()

app.listen(3000,()=>{
    console.log("port running at 3000");
})