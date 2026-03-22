const songModel = require("../models/song.model")
const storageService = require("../services/storage.service")
const id3 = require("node-id3")


async function uploadSong(req, res) {

    const songBuffer = req.file.buffer
    console.log(req.file)
    const { mood } = req.body

    const tags = id3.read(songBuffer)

    const [ songFile, posterFile ] = await Promise.all([
        storageService.upl({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/web-dev-journey-backup/sheryians-cohort-2-journey/day-113/web-cam/songs"
        }),
        
        storageService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpeg",
            folder: "/web-dev-journey-backup/sheryians-cohort-2-journey/day-113/web-cam/posters"
        })
    ])

    const song = await songModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "song created successfully",
        song
    })

}

async function getSong(req, res) {

    const { mood } = req.query

    const song = await songModel.findOne({
        mood,
    })

    res.status(200).json({
        message: "song fetched successfully.",
        song,
    })

}


module.exports = { uploadSong, getSong }


