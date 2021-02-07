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

    // Check for empty input.
    if (!name) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // Edit the transaction.
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

// DELETE
/**transaction.delete('/', (req, res) => {
    const id = req.body.id

    const result = transactionModel.findId(id)
    if (result) {
        const deletedTransaction = transactionModel.deleteTransaction(id)
        return res.status(200).json({
            "success": true,
            "message": "Transaction has been deleted successfully.",
            "data": deletedTransaction
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "Cannot delete transaction. The transaction id is not found.",
            "data": {}
        })
    }
})**/

module.exports = item