const db = require('mongoose')
const postschema = new db.Schema({
    image:String,
    caption:String
})

const postmodel = db.model("post",postschema)

module.exports = postmodel