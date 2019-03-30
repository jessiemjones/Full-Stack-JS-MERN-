const express = require('express')
const bountieRoute = express.Router()
// const data = require('./database')
// const uuid = require('uuid')
const Bounty = require('./models/bountyModel')


bountieRoute.route('/')

    .get((req, res)=>{
        Bounty.find((err, bounties) => {
            if(err) {
                console.log("it no work")
                return res.status(500).send(err)
            }
            console.log("It works!")
            return res.status(200).send(bounties)
        })
    })

    .post((req, res)=>{
        if (Object.keys(req.body).length !== 0){   
            const newObj = new Bounty(req.body);
            console.log(newObj)
            newObj.save(err => {
                if(err){
                return res.status(500).send(err)   //500 means error
                }
                return res.status(200).send(newObj)   //200 means successful
            })
        }else {
            res.send("Must have values")
        }
    })

bountieRoute.route('/:_id')

    // .get((req, res)=>{
    //     Bounty.find((err, bounty) => {
    //         if (err) {
    //             return res.status(500).send(err)
    //         }
    //         return res.status(200).send(bounty)
    //     })
    // })

    .get((req, res) =>{
        Bounty.findById(
            {_id: req.params._id},
            (err, bounty)=> {
                err && res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

    // .delete((req, res)=>{
    //     const {_id} = req.params;
    //     const index = data.findIndex(bounty => bounty._id === _id)
    //     data.splice(index, 1)
    //     res.send("Target has been removed from the list")
    // })

    // .put((req, res)=>{
    //     const updatedObject = req.body
    //     const {_id} = req.params;
    //     data.forEach(bounty =>{
    //         if(bounty._id === _id){
    //             bounty = Object.assign(bounty, updatedObject)
    //         }
    //     })
    //     const found = data.find(bounty => bounty._id === _id)
    //     if (found){
    //         res.send(found)
    //     }else{
    //         res.send("Could not find item at that ID")
    //     }
    // })
    .delete((req, res)=> {
        Bounty.findOneAndDelete(
            {_id: req.params._id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("Meh")
            }
        )
    })

    .put((req, res)=>{
        const {_id} = req.params;
        Bounty.findByIdAndUpdate(
            {_id},
            req.body,
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

    module.exports = bountieRoute