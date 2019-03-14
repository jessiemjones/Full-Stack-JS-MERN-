const express = require('express')
const vacationRouter = express.Router()
const uuid = require('uuid') //this generates a random id
const data = require('./database')
const Vacation = require('./vacation')

vacationRouter.route('/')

    .get((req, res)=>{
        console.log("anything")
        let {time, price} = req.query
        if (time && price){
            const costAndSeason = data.filter(spot => spot.timeToGo === time && spot.price < price)
            res.send(costAndSeason)
        }else if (time){
            const season = data.filter(spot => spot.timeToGo === time)
            res.send(season)
        }else if(price){
            const cost = data.filter(spot => spot.price === +price)
            res.send(cost)
        }else {
            res.send(data)
        }
    
    })

    .post((req, res) => {
        if (Object.keys(req.body).length !== 0){
            const newObj = new Vacation(req.body)
            newObj.save(err => {
                if(err){
                return res.status(500).send(err)   //500 means error
                }
                return res.status(200).send(newObj)   //200 means successful
            })
        }else{
            res.send('must have valuses in new posted itmes')
        }
    })

vacationRouter.route('/:_id')


    .get((req, res) => {
        const {_id} = req.params;
        res.send(data.find(spot=> spot._id === _id))
    })

    .delete((req, res)=>{
        const {_id} = req.params;
        const index = data.findIndex(spot => spot._id === _id)
        data.splice(index, 1)
        res.send("Item was removed")
    })

    .put((req, res)=> {
        const updatedObject = req.body;
        const {_id} = req.params;
        data.forEach(spot => {
            if(spot._id === _id){
                spot = Object.assign(spot, updatedObject)
            }
        })
        const found = data.find(spot => spot._id === _id)
        if (found){
            res.send(found)
        }else{
            res.send("Could not find item at that ID")
        }
    })

module.exports = vacationRouter