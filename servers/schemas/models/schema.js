const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const youtubeUser = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    savedFavorties:[{
        type:objectId,
        ref:'Videos'
    }],
    email:String,
    profileImg:Buffer,
    address: {
        street:String,
        zip:Number,

    },
    isAdmin: {
        type: Boolean,
        default: false
    }




})

module.exports = mongoose.model('Profile', youtubeUser)

//Buffer is for media objects