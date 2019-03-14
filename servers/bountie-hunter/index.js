const express = require('express')
const app = express()
const port = 8888

app.use(express.json())

app.use('/bounties', require('./bountieRoutes'))

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})