const transactionModel = require('../models/transaction')

exports.getAllTransaction = (req, res) => {
    const result = transactionModel.fetchTransactions
    return res.status(200).json({
        "success": true,
        "message": "Transactions has been found successfully.",
        "data": result
    })
}

exports.getTransactionById = (req, res) => {
    const id = Number(req.params.id)
    const result = transactionModel.findId(id)
    
    if (result) {
      
        return res.status(200).json({
            "success": true,
            "message": "Transaction has been found successfully.",
            "data": result
        })

    } else {
      
        return res.status(404).json({
            "success": false,
            "message": "The transaction cannot be found.",
            "data": {}
        })
      
    }
}

exports.createTransaction = (req, res) => {
    const {userId, friendId, itemId, nominal} = req.body

    // Check for empty input.
    if (!userId || !friendId || !itemId || !nominal) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create transaction. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // Check for non-integer input.
    if (!Number.isInteger(userId) || !Number.isInteger(friendId) || !Number.isInteger(itemId) || !Number.isInteger(nominal)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create transaction. Input is not an integer.",
            "data": {}
        })
    }

    // Check for negative value.
    if (userId < 0 || friendId < 0 || itemId < 0 || nominal < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create transaction. Negative value input is not allowed.",
            "data": {}
        })
    }

    // Check for available userId, friendId and itemId.
    const userIdResult = transactionModel.checkUserId(userId)
    const itemIdResult = transactionModel.checkItemId(itemId)
    const friendIdResult = transactionModel.checkFriendId(friendId)

    if (!userIdResult || !itemIdResult || !friendIdResult) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot create transaction. User ID, Item ID or Friend ID not found.",
            "data": {}
        })
    }

    // Create transaction.
    const transaction = transactionModel.createTransaction(userId, friendId, itemId, nominal)
    return res.status(200).json({
        "success": true,
        "message": "Transaction has been submitted successfully.",
        "data": transaction
    })
}

exports.updateTransaction = (req, res) => {
    const { id, userId, friendId, itemId, nominal } = req.body

    // Check for transaction Id.
    const result = transactionModel.findId(id)
    if (!result) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. The transaction id is not found.",
            "data": {}
        })
    }

    // Check for empty input.
    if (!userId || !friendId || !itemId || !nominal) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. Empty string and zero value input is not allowed.",
            "data": {}
        })
    }

    // Check for non-integer input.
    if (!Number.isInteger(userId) || !Number.isInteger(friendId) || !Number.isInteger(itemId) || !Number.isInteger(nominal)) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. Input is not an integer.",
            "data": {}
        })
    }

    // Check for negative value.
    if (userId < 0 || friendId < 0 || itemId < 0 || nominal < 0) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. Negative value input is not allowed.",
            "data": {}
        })
    }

    // Check for available userId, friendId and itemId.
    const userIdResult = transactionModel.checkUserId(userId)
    const itemIdResult = transactionModel.checkItemId(itemId)
    const friendIdResult = transactionModel.checkFriendId(friendId)

    if (!userIdResult || !itemIdResult || !friendIdResult) {
        return res.status(400).json({
            "success": false,
            "message": "Cannot edit transaction. User ID, Item ID or Friend ID not found.",
            "data": {}
        })
    }

    // Edit the transaction.
    const transaction = transactionModel.editTransaction(id, userId, friendId, itemId, nominal)
        return res.status(200).json({
            "success": true,
            "message": "Transaction has been edited successfully.",
            "data": transaction
        })
}

exports.deleteTransaction = (req, res) => {
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
}