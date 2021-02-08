const itemModel = require('../models/item')
const userModel = require('../models/user')

exports.getAllItem = (req, res) => {
    return res.json({
        "success": true,
        "message": "Item has been found successfully.",
        "data": itemModel.item
    })
}

exports.getItemById = (req, res) => {
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
}

exports.createItem = (req, res) => {
    const { userId, name } = req.body

    if (!name || !userId) {
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
            "message": "Cannot create item. Name input is not an string.",
            "data": {}
        })
    }

    // Check for non-integer input.
    if (!Number.isInteger(userId)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create item. Input is not an integer.",
            "data": {}
        })
    }
    
    if (userId < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create item. Negative value input is not allowed.",
            "data": {}
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

    const item = itemModel.create(userId, name)
    return res.status(200).json({
        "success": true,
        "message": "Item has been submitted successfully.",
        "data": item
    })
}

exports.updateItem = (req, res) => {
    const { id, userId, name } = req.body
    if (!userId || !name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit item. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // Check for non-integer input.
    if (!Number.isInteger(userId)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create item. User id input is not an integer.",
            "data": {}
        })
    }

    if (typeof name !== 'string') {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create item. Name input is not an string.",
            "data": {}
        })
    }

    // Check for negative value.
    if (userId < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edited item. Negative value input is not allowed.",
            "data": {}
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

    const item = itemModel.update(id, userId, name)
    return res.status(200).json({
        "success": true,
        "message": "Item has been edited successfully.",
        "data": item
    })
}

exports.deleteItem = (req, res) => {
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
}