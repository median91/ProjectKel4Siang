
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

// add friend
friend.post('/', (req, res) => {
    const { userId, name } = req.body

    // check for empty input
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

    // const user = userModel.checkById(userId)
    // if (!user) {
    //     res.status(400).json({
    //         "success": false,
    //         "message": "user id not found.",
    //         "data": {}
    //     })
    // }

    //check name not string
    if (typeof name !== 'string') {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Name input is not an string.",
            "data": {}
        })
    }

    //check success create friend
    let friend = friendModel.create(userId, name)
    res.status(200).json({
        "success": 200,
        "message": "Create success.",
        "data": friend
    })

    // check for non-integer input
    if (!Number.isInteger(userId) || !Number.isInteger(name)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Input is not an integer.",
            "data": {}
        })
    }

    // Check for negative value.
    if (userId > 0 && name > 0) {
        // Create transaction.
        const friend = friendModel.create(userId, name)
        return res.status(200).json({
            "success": true,
            "message": "friend has been submitted successfully.",
            "data": friend
        })
    }
    else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Negative value input is not allowed.",
            "data": {}
        })
    }
})

// edit friends
friend.put('/', (req, res) => {
    const { id, userId, name } = req.body

    // check for empty input
    if (!userId || !name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // check for non-integer input
    if (!Number.isInteger(userId)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Input is not an integer.",
            "data": {}
        })
    }

    // check for negatif value
    if (userId < 0 || name < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Negative value input is not allowed.",
            "data": {}
        })
    }

    // success edited friend
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