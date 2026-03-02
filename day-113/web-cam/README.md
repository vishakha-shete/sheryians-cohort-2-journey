class day 112

- blackbox programming we know about what is function and and what the function is doing but we dont need to understand what exactlly it working and doing if ur go to know this all things then lot of your time gone in that
development thats why we are following backbox function  how it is doing we dont need to understand that

faceexpression.jsx is mainlly used for giving us a ui 
we are removing the init and detect in different folder we are creating in expression folder utils folder and in utils folder we are creating the util.js file where we are moving this code token has name xyz if in your server user sends a request and with user need to have token 

init function gives a initial setup to us and detect function detect the expression of face in this two function theire are three 

token blacklisting 
user sends a request of register and send data with username password email then server creates a token for the user 

for setting a express setup and uthentication we need to install some packages express mongoose dotenv cookie-parser bcryptjs jsonwebtoken 

userSchema.pre("save",function (next)){
    if (!this.ismodified("password")){
        return next();
    }
}

# Task :
userSchema.pre("save",function (next){})
userSchema.post("save",function (next){})
