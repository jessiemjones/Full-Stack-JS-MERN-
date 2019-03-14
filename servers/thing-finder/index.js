const express = require('express')
const app = express()
const port = 8888
const data = require('./database')

app.use(express.json())

app.get('/items', (req, res)=>{
    let {name, type, price} = req.query
    if (name){
        const nameOfItem = data.filter(item => item.name === name)
        res.send(nameOfItem)
    } else if (type){
        const typeOfItem = data.filter(item => item.type === type)
        res.send(typeOfItem)
    }else if (price){
        const priceOfItem = data.filter(item => item.price === +price)
        res.send(priceOfItem)
    }else {
        res.send(data)
    }

    res.send(data)
    console.log(data)
})



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})