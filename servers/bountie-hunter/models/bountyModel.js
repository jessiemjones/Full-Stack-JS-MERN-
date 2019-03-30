const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: String, 
    lastName: String,
    isJedi: String,
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: Number,
    image: {
        type: String,
        default:'https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg'

        // enum: ['']  //enum gives specific values that the input can be, and if it's not on the list, then it will throw an error.
    }
})

module.exports = mongoose.model('Bounty', bountySchema)