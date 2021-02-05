const express = require('express')
const userModel = require('../models/user')

const auth = express.Router()

auth.get('/', (req, res) => {
    res.send("route auth")
})

auth.post('/login', (req, res) => {
    const { username, password } = req.body
    const user = userModel.checkLogin(username, password)

    if (user) {
        res.json({
            "success": true,
            "message": "login success.",
            "data": user
        })
    } else {
        res.status(400).json({
            "success": false,
            "message": "unauthorized.",
            "data": {}
        })
    }
})

auth.post('/register', (req, res) => {
    const { name, username, password } = req.body

    if(!name || !username || !password) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    }

    let sameUsername = userModel.findUsername(username)
    if (sameUsername) {
        res.status(400).json({
            "success": false,
            "message": "username already registered.",
            "data": {}
        })
    }

    const user = userModel.create(name, username, password)

    res.status(200).json({
        "success": 200,
        "message": "registration success.",
        "data": user
    })
})

module.exports = auth