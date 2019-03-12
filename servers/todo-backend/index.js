const express = require('express')
const app = express()
const port = 7777
const uuid = require('uuid')
const data = require('./database')

app.use(express.json())

app.get('/todos', (req, res)=>{
    res.send(data)
    console.log(data)
})

app.get('/todos/:_id', (req, res)=>{
    const {_id} = req.params;
    res.send(data.find(todo=> todo._id === _id))
})

app.post('/todos', (req, res)=>{
    const newObj = req.body;
    console.log(1111,req.body)
    newObj._id = uuid.v4();
    newObj.completed = false
    console.log(2222,req.body)
    console.log(3333,newObj)
    data.push(newObj)
    res.send(newObj)
})

app.delete('/todos/:_id', (req, res)=>{
    const {_id} = req.params;
    const index = data.findIndex(todo => todo._id === _id)
    data.splice(index, 1)
    res.send("item was removed")
})

app.put('/todos/:_id', (req, res)=> {
    const updatedObject = req.body
    const {_id} = req.params;
    data.forEach(todo =>{
        if(todo._id === _id){
            todo = Object.assign(todo, updatedObject)
        }
    })
    res.send('Item was updated')
})

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})