require('dotenv').config()
const app = require('./app')
const db = require('./db/db')
db()

app.listen(3000, () => {
    console.log('running');
})