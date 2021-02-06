const { request } = require('express')
const express = require('express')
const itemmodel = require('../models/item')
const item = express.Router()


item.get('/', (req, res) => {
    res.send(itemmodel.test)
})

item.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(id)
})

module.exports = item