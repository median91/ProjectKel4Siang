const express = require('express')

const item = express.Router()

item.get('/', (req, res) => {
    res.send("tes item")
})

module.exports = item