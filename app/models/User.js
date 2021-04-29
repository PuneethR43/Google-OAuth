const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleID: {
        type: String
    },
    name: {
        type: String
    }
})

mongoose.model('user', userSchema)

/* ALTERNATE */
// mongoose.model('user', userSchema)
// 'user' -> collection name it is added to model and can be extracted from model to a variable
// const User = mongoose.model('user') -> user is now being assigned to variable User