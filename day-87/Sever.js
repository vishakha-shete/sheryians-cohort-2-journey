const express = require ("express")

const app = express()

const notes = []

app.post("/notes",(req,res)=>{
    res.send("note is create")
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})