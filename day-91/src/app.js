const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

app.use(express.json());

const notes = []

// post/notes
// req.body=>(title,description)

app.post("/notes", async(req,res)=>{
    const{title, description ,age } = req.body

    const note = await noteModel.create({
        title,description ,age
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        notes
    })
})

// app.delete("/notes/:index",(req,res)=>{
//     delete notes[req.params.index]
//     res.status(204).json({
//         message: "app deletedd successfully"
//     })
// })

// app.patch("/notes/:index",(req,res)=>{
//     notes[req.params.index].description = req.body.description
//     res.status(200).json({
//         message:"description updated successfully"
//     })
// })


module.exports = app