const express = require('express')

const friend = express.Router()

friend.get('/', (req, res) => {
    res.send("tes friend")
})

module.exports = friend