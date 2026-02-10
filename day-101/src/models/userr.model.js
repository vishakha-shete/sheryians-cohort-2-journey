const  mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        unique : [true,"user name a already exists"],
        required :[true,"user name a is required"]
    },
    email:{
        type: String,
        unique:[true,"Email already exists"],
        required :[true,"Email  is required"]
    },
    password:{
        type: String,
        required :[true,"password  is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default: "https://ik.imagekit.io/5cqn6o4r9/images.png"
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel