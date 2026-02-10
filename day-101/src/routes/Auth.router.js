const express = require ('express')
const userModel = require('../models/userr.model')
const crypto = require ('crypto')


const authRouter = express.Router()



authRouter.post('/register',async(req,res)=>{
    const {email,username,password,bio,profileImage} = req.body
    
    // const isUserExistsByEmail = await userModel.findOne[{email}]

    // if (isUserExistsByEmail){
    //     return res.status(409).json({
    //         message : "user already exists with same email"
    //     })  
    // }

    // const isUserExistByname = await userModel.findOne[{username}]

    // if(isUserExistsByUsername){
    //     return res.status(409).json({
    //         message: "user already exists by same Username"
    //     })
    // }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message : "username and email allready exists" +(isUserAlreadyExists.email == 
            email ? "Email already exists" : "Username already exists")
            })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')
    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password : hash
    })
})

module.exports = authRouter