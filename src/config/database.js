const mongoose = require('mongoose')

const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://goutham646007:QTyTh5Spi9QXT1wQ@cluster0.qccnthf.mongodb.net/DevTinder')
}

module.exports = connectDb