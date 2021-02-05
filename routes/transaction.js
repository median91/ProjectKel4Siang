const express = require('express')

const transaction = express.Router()

transaction.get('/', (req, res) => {
    res.send("tes transaction")
})

module.exports = transaction