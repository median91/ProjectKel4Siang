const express = require('express')

const authController = require('../controllers/auth')

const auth = express.Router()

auth.get('/', authController.base)
auth.post('/login', authController.login)
auth.post('/register', authController.register)

module.exports = auth