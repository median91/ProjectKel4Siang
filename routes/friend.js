
const express = require('express')
const friendModel = require('../models/friendsModel')
const friend = express.Router()
const userModel = require('../models/user')


friend.get('/', (req, res) => {
    res.send(friendModel.friend)
})

friend.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const result = friendModel.findId(id)

    if (result) {
        return res.status(200).json({
            "success": true,
            "message": "friend has been found successfully.",
            "data": result
        })
    } else {
        return res.status(404).json({
            "success": false,
            "message": "The friend cannot be found.",
            "data": {}
        })
    }
})

friend.post('/', (req, res) => {
    const { userId, name } = req.body
    if (!userId || !name) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
        let friend = friendModel.get(id)
        res.status(200).json({
            "success": 200,
            "message": "Create success.",
            "data": friend
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
    let friend = friendModel.create(userId, name)
    res.status(200).json({
        "success": 200,
        "message": "Create success.",
        "data": friend
    })
})

friend.put('/', (req, res) => {
    const { id, name } = req.body

    // Check for empty input.
    if (!name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // Edit the friend.
    const result = friendModel.findId(id)
    if (result) {
        const friend = friendModel.update(id, name)
        return res.status(200).json({
            "success": true,
            "message": "friend has been editted successfully.",
            "data": friend
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. The friend id is not found.",
            "data": {}
        })
    }
})

module.exports = friend