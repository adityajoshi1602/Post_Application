const db =  require('mongoose')
async function connectDB(){
    await db.connect(process.env.MONGO_URL)

    console.log('connected');
}

module.exports = connectDB