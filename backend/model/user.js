const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'client', 'recruiter'],
    }
})

module.exports = mongoose.model('User', UserSchema)