const express = require('express')
const item = express.Router()

const itemController = require('../controllers/item')

item.get('/', itemController.getAllItem)
item.get('/:id', itemController.getItemById)
item.post('/', itemController.createItem)
item.put('/', itemController.updateItem)
item.delete('/', itemController.deleteItem)

module.exports = item