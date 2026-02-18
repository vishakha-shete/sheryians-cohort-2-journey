// this file main work is to connect the server and config the server

const express = require("express")
const noteModel = require("./models/note.model");
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

//post
//create new note and save data in mongodb
app.post("/app/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})

//GET/API/NOTES
//FETCH ALL THE DATA ROM MONGO DB AND SEND THEM INTO RESPONSE
app.get("/app/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "notes fetched successully",
        notes
    })
})

// DELETE/api/notes/id
// delete note with the id from req.params

app.delete('/app/notes/:id', async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "note deleted successfully",
    })
})

//PATCH/api/notes/:id
//-update the description of the note
// - req.body = {description}

app.patch("/app/notes/:id", async (req, res) => {
    const id = req.params.id
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app