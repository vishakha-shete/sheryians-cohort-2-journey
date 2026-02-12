const express = require ("express")

const app = express()

const notes = []

app.use(express.json());

app.post("/notes",(req,res)=>{
    notes.post(req.body)
    res.status(201).json({
        message : "app running properlly"
    })
})

app.get("/notes",(req,res)=>{
    res(200).json({
        notes : notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    
})
module.exports = app