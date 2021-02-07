const express = require('express')
const itemModel = require('../models/item')
const item = express.Router()
const userModel = require('../models/user')


item.get('/', (req, res) => {

    res.send(itemModel.item)
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
    const { id, name } = req.body
    if (!name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }
    const result = itemModel.findId(id)
    if (result) {
        const item = itemModel.update(id, name)
        return res.status(200).json({
            "success": true,
            "message": "item has been editted successfully.",
            "data": item
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit item. The item id is not found.",
            "data": {}
        })
    }
})

item.delete('/', (req, res) => {
    const id = req.body.id

    const result = itemModel.findId(id)
    if (result) {
        const deleteitem = itemModel.deleteitem(id)
        return res.status(200).json({
            "success": true,
            "message": "item has been deleted successfully.",
            "data": deleteitem
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot delete item. The item id is not found.",
            "data": {}
        })
    }
})

item.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const result = itemModel.findId(id)

    if (result) {
        return res.status(200).json({
            "success": true,
            "message": "Item has been found successfully.",
            "data": result
        })
    } else {
        return res.status(404).json({
            "success": false,
            "message": "The item cannot be found.",
            "data": {}
        })
    }
})

module.exports = item