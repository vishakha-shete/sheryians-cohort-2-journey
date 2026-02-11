const express = require('express')
const userModel = require('../models/userr.model')
const crypto = require('crypto')
const jwt = require("jsonwebtoken")

const authRouter = express.Router()



authRouter.post('/register', async (req, res) => {
    const { email, username, password, bio, profileImage } = req.body

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
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "username and email allready exists" + (isUserAlreadyExists.email ==
                email ? "Email already exists" : "Username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')
    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.jwt_SECRET,
        { expiresIn: "id" }
        )
        res.cookie("token",token)

        res.status(201).json({
            message : "user Registered successfully",
            user:{
                email:user.email,
                username:user.username,
                bio:user.bio,
                profileImage:user.profileImage
            }
        })
})

module.exports = authRouter