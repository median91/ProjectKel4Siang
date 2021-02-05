const express = require('express')

const auth = express.Router()

auth.get('/', (req, res) => {
    res.send("route auth")
})

module.exports = auth