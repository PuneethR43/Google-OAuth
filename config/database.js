const mongoose = require('mongoose')
const keys = require('../config/keys')

const configureDB = () => {
    mongoose.connect(keys.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
        .then(() => {
            console.log("connected to DB")
        })
        .catch((err) => {
            console.log("error connecting DB", err)
        })
}

module.exports = configureDB