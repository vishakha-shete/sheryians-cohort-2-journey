const mongoose = require ("mongoose");


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true , "username is requires"],
        unique : [true , "username must be unique"]
    },
    email: {
        type: String,
        required: [true, "email is requires"],
        unique: [true , "email must be unique"]

    },
    password: {
        type : String,
        required : [true , "password is required"],
        unique : [true , "password must be unique"]
    }
})

const userModel = mongoose.model("users",UserSchema);

module.exports = userModel