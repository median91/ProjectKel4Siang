const transactions = require('../database/transactions.json')
const transaction = require('../routes/transaction')

const model = {
    createTransaction: (userId, friendId, itemId, nominal) => {
        const id = (transactions.length + 1)
        const transaction = { id, userId, friendId, itemId, nominal }

        transactions.push(transaction)

        return transaction
    },
    deleteTransaction: (id) => {
        const index = transactions.findIndex(transaction => transaction.id === id)
        const deletedTransaction = transactions.splice(index, 1)
        return deletedTransaction
    },
    editTransaction: (id, userId, friendId, itemId, nominal) => {
        const index = transactions.findIndex(transaction => transaction.id === id)

        transactions[index].userId = userId
        transactions[index].friendId = friendId
        transactions[index].itemId = itemId
        transactions[index].nominal = nominal

        return transactions[index]
    },
    findId: (id) => transactions.find( transaction => transaction.id === id),
    fetchTransactions: transactions
}

module.exports = model