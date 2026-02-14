const mongoose = require("mongoose")

const schema = new mongoose.schema({
    title : String,
    description: String
})

const noteModel = mongoose.model("notes",notechema);

module.exports = noteModel
