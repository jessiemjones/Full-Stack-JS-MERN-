const express = require('express')
const app = express()
const port = 3333
const mongoose = require('mongoose')

app.use(express.json())

app.use('/spot', require('./vacationRoutes'))

mongoose.connect('mongodb://localhost:27017/vacationSpots', {useNewUrlParser: true}).then(()=>{
    console.log("connected to mongodb")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})