const Profile = require('./../models/schema')
const youtubeRoute;
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}).then(()=>{
    console.log("Connected to mongodb")
}) //put in the url to your database\\

//mongoose has alot of methods we can use
youtubeRoute.get('/', (req, res) => {  
    Profile.find((err, profiles) => {
        return res.send(profiles)
    })                         
})