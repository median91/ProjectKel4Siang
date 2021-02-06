const express = require('express')
const itemModel = require('../models/item')
const item = express.Router()
const userModel = require('../models/user')


item.get('/', (req, res) => {

    res.send(itemModel.item)
})

item.get('/:id', (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(400).json({
            "success": false,
            "message": "item id found.",
            "data": {}
        })
    }
    res.send(id)
})

item.post('/', (req, res) => {
    const { userId, name } = req.body
    if (!name || !userId) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
        let item = itemModel.get(id)
        res.status(200).json({
            "success": 200,
            "message": "Create success.",
            "data": item
        })
    }
    const user = userModel.checkById(userId)
    console.log(userId);
    if (!user) {
        res.status(400).json({
            "success": false,
            "message": "user id not found.",
            "data": {}
        })
    }
    let item = itemModel.create(userId, name)
    res.status(200).json({
        "success": 200,
        "message": "Create success.",
        "data": item
    })
})

item.put('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    }

})

item.delete('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    }

})

module.exports = item