const friendModel = require('../models/friendsModel')
const userModel = require('../models/user')

exports.getAllFriend = (req, res) => {
    return res.json({
        "success": true,
        "message": "friend has been found successfully.",
        "data": friendModel.friend
    })
}

exports.getFriendById = (req, res) => {
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
}

exports.createFriend = (req, res) => {
    const { userId, name } = req.body

    // check for empty input
    if (!userId || !name) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    }

    //check name not string
    if (typeof name !== 'string') {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Name input is not an string.",
            "data": {}
        })
    }

    // check for non-integer input
    if (!Number.isInteger(userId)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Input is not an integer.",
            "data": {}
        })
    }

    // Check for negative value.
    if (userId < 0 || name < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. Negative value input is not allowed.",
            "data": {}
        })
    }

    // check for avaible userId
    const userIdResult = userModel.checkById(userId)
    if (!userIdResult) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create friend. User ID",
            "data": {}
        })
    }
    // Create friend.
    let friend = friendModel.create(userId, name)
    return res.status(200).json({
        "success": true,
        "message": "friend has been submitted successfully.",
        "data": friend
    })
}

exports.updateFriend = (req, res) => {
    const { id, userId, name } = req.body

    // check for empty input
    if (!userId || !name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    //check name not string
    if (typeof name !== 'string') {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create item. Name input is not an string.",
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
    if (userId < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. Negative value input is not allowed.",
            "data": {}
        })
    }

    // check for friend id
    const result = friendModel.findId(id)
    if (!result) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit friend. The friend id is not found.",
            "data": {}
        })
    }

    // check userid
    const userIdResult = userModel.checkById(userId)
    if (!userIdResult) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. User ID",
            "data": {}
        })
    }

    // edit friend
    let resultEdit = friendModel.update(id, userId, name)
    return res.status(200).json({
        "success": true,
        "message": "friend has been editted successfully.",
        "data": resultEdit
    })

}

exports.deleteFriend = (req, res) => {
    const id = req.body.id

    const result = friendModel.findId(id)
    if (result) {
        const deletedFriend = friendModel.delete(id)
        return res.status(200).json({
            "success": true,
            "message": "friend has been deleted successfully.",
            "data": deletedFriend
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot delete friend. The friend id is not found.",
            "data": {}
        })
    }
}