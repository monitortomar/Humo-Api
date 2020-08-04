const mongoose = require('mongoose')
require('dotenv').config()

mongoose
    .connect(process.env.DB_URL, {useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e)
    })

const db = mongoose.connection

module.exports = db