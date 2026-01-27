const express =  require("express")

const app = express()

app.get('/', (req, res)=> {
    res.send("hello world")
})

app.get("/about", (req,res)=>{
    res.send("whelcome to this page")
})

app.get("/home", (req, res)=>{
    res.send("loading the home page")
})

app.listen(3000)

// generally usable ports 2000,8000,7000,5173
// px nodemon index.js run this command for seeing a live changes
//npm is a package manager 
// npm is a package executioner