class day 112

- blackbox programming we know about what is function and and what the function is doing but we dont need to understand what exactlly it working and doing if ur go to know this all things then lot of your time gone in that
development thats why we are following backbox function  how it is doing we dont need to understand that 

init function gives a initial setup to us and dtect function detect the expression of face in this two function theire are three 

for setting a express setup and uthentication we need to install some packages express mongoose dotenv cookie-parser bcryptjs jsonwebtoken 

userSchema.pre("save",function (next)){
    if (!this.ismodified("password")){
        return next();
    }
}

# Task :
userSchema.pre("save",function (next){})
userSchema.post("save",function (next){})
