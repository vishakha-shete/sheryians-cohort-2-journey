const express = require ("express")

const app = express()

app.use(express.json());

const notes = []

// post /notes

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        Message : "request sent successfully"
    })
})

// get /notes

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes : notes
    })
})

// delete /notes/:index
app.delete("/notes/:index",(req,res)=>{
    delete notes [ req.params.index ]
    res.status(204).json({
        Message : "notes deleted successfully"
    })
})

//patch /notes/:index
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message : "description updated successfully"
    })
})

module.exports = app