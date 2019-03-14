const express = require('express')
const bountieRouter = express.Router()
const data = require('./database')
const uuid = require('uuid')


bountieRouter.route('/')

    .get((req, res)=>{
        res.send(data)
        console.log(data)
    })

    .post((req, res)=>{
        if (Object.keys(req.body).length !== 0){   
            const newObj = req.body;
            console.log(req.body)
            req.body === {}
            newObj.lving = true
            newObj._id = uuid.v4();
            data.push(newObj)
            res.send(newObj)
        }else {
            res.send("Must have values")
        }
    })

bountieRouter.route('/:_id')

    .get((req, res)=>{
        const {_id} = req.params;
        const found = (data.find(bountie=> bountie._id === _id))
        if(found){
            res.send(found)
        }else {
            res.send("Item has not been found")
        }
    })

    .delete((req, res)=>{
        const {_id} = req.params;
        const index = data.findIndex(bountie => bountie._id === _id)
        data.splice(index, 1)
        res.send("Target has been removed from the list")
    })

    .put((req, res)=>{
        const updatedObject = req.body
        const {_id} = req.params;
        data.forEach(bountie =>{
            if(bountie._id === _id){
                bountie = Object.assign(bountie, updatedObject)
            }
        })
        const found = data.find(bountie => bountie._id === _id)
        res.send(found)
    })

    module.exports = bountieRouter