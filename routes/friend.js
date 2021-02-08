const express = require('express')
const friend = express.Router()

const friendController = require('../controllers/friend')

friend.get('/', friendController.getAllFriend)
friend.get('/:id', friendController.getFriendById)
friend.post('/', friendController.createFriend)
friend.put('/', friendController.updateFriend)
friend.delete('/', friendController.deleteFriend)

module.exports = friend