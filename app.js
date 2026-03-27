const express = require('express')
const multer = require('multer')
const uploadfiles= require('./services/storage.service')
const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })


app.post('/create', upload.single('image'), async (req, res) => {
    console.log(req.body)
    res.status(200).json({ msg: 'received' })

})
module.exports = app