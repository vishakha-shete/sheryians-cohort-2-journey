//this file is used to start the server
// and used to connect with database

const app = require("./src/app");
const mongoose = require ("mongoose");

const connectToDb = function(){
    mongoose.connect("")
    .then(()=>{
        console.log("connected to database");
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server running at port 3000");
})