const express = require('express')
const app = express()
const port = 8888
const uuid = require('uuid')
const data = require('./database')

app.use(express.json())

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})

app.get('/bounties', (req, res)=>{
    res.send(data)
    console.log(data)
})

app.get('/bounties/:_id', (req, res)=>{
    const {_id} = req.params;
    res.send(data.find(bounti=> bountie_id === _id))
})

app.post('/bounties', (req, res)=>{
    const newObj = req.body;
    console.log(req.body)
    newObj.lving = true
    newObj._id = uuid.v4();
    data.push(newObj)
    res.send(newObj)
})

app.delete('/bounties/:_id', (req, res)=>{
    const {_id} = req.params;
    const index = data.findIndex(bountie => bountie._id === _id)
    data.splice(index, 1)
    res.send("Target has been removed from the list")
})

app.put('/bounties/:_id', (req, res)=>{
    const updatedObject = req.body
    const {_id} = req.params;
    data.forEach(bountie =>{
        if(bountie._id === id){
            bountie = Object.assign(bountie, updatedObject)
        }
    })
    res.send("Bountie has been updated")
})