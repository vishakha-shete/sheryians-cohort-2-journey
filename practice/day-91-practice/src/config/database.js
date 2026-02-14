const mongoose = require("mongoose")

const connectToDb=function(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connecte with database");
    })
}

module.exports = connectToDb