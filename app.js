const cors = require('cors')
const express = require('express')
const multer = require('multer')
const uploadfiles = require('./services/storage.service')
const postmodel = require('./models/post.model')
const app = express()


app.use(cors())
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })


app.post('/create', upload.single('image'), async (req, res) => {
    try {
        console.log(req.body)

        const result = await uploadfiles(req.file.buffer)

        console.log(result)

        await postmodel.create({
            image: result.url,
            caption: req.body.caption
        })
        res.status(200).json({
            msg: 'uploaded',
            image: result.url,
            caption: req.body.caption
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ msg: err.message })
    }
})


app.get('/posts', async (req, res) => {
    try {
        const posts = await postmodel.find()

        res.status(200).json(posts)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'error' })
    }
})

module.exports = app