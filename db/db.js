const db =  require('mongoose')
async function connectDB(){
    await db.connect("mongodb+srv://demo:xlb0cCcDG2VxnbLo@project.qw0x7aq.mongodb.net/project1")

    console.log('connected');
}

module.exports = connectDB