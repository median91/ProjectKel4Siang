const express = require('express')

const auth = require('./auth.js')
const friend = require('./friend.js')
const item = require('./item.js')
const transaction = require('./transaction.js')

const route = express.Router()

route.get('/', (req, res) => {
    res.send("welcome to indomaret")
})

route.use('/auth', auth)
route.use('/friend', friend)
route.use('/item', item)
route.use('/transaction', transaction)

module.exports = route