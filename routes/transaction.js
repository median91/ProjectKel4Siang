const express = require('express')
const transaction = express.Router()

const transactionController = require('../controllers/transaction')

transaction.get('/', transactionController.getAllTransaction)
transaction.get('/:id', transactionController.getTransactionById)
transaction.post('/', transactionController.createTransaction)
transaction.put('/', transactionController.updateTransaction)
transaction.delete('/', transactionController.deleteTransaction)

module.exports = transaction