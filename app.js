const express = require('express')
const multer = require('multer')
const uploadfiles = require('./services/storage.service')
const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })


app.post('/create', upload.single('image'), async (req, res) => {
    try {
        console.log(req.body)

        const result = await uploadfiles(req.file.buffer)

        console.log(result)

        res.status(200).json({
            msg: 'uploaded',
            url: result.url
        })

    } catch (err) {
        res.status(500).json({ msg: 'error' })
    }
})
module.exports = app