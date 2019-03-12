const express = require('express')
const app = express()
const port = 6667
const uuid = require('uuid') //this generates a random id
const data = require('./database')

app.use(express.json())

app.get('/spot', (req, res)=>{
    res.send(data)
})

app.post('/spot', (req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4();
    data.push(req.body)
    res.send(newObj)
    
})

app.get('/spot/:_id', (req, res) => {
    const {_id} = req.params;
    res.send(data.find(spot=> spot._id === _id))
})

app.delete('spot/:_id', (req, res)=>{
    const {_id} = req.params;
    const index = data.findIndex(spot => spot._id === _id)
    data.splice(index, 1)
    res.send("Item was removed")
})

app.put('spot/:_id', (req, res)=> {
    const updatedObject = req.body;
    const {_id} = req.params;
    data.forEach(spot => {
        if(spot._id === _id){
            spot = Object.assign(spot, updatedObject)
        }
    })
    res.send('Item was updated!')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})