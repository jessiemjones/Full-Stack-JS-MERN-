const express = require('express')
const app = express()
const port = 8888
const mongoose = require('mongoose')

app.use(express.json())

app.use('/bounties', require('./bountieRoute'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then( ()=> console.log("connected to MongoDB")) //dont need but nice
    .catch(err => console.log(err))//dont need, but nice

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})