const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is required"],
        unique:[true, "username must be umique"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique : [true, "Email must be unique" ]
    },
    password:{
        type:String,
        required:[true, "password is required"],
        unique : [true, "password must be unique" ],
        select : false
    },
})

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;