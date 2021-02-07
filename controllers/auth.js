const userModel = require('../models/user')

exports.base = (req, res) => {
    res.send("route auth")
}

exports.login = (req, res) => {
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
}

exports.register = (req, res) => {
    const { name, username, password } = req.body

    if(!name || !username || !password) {
        res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    
    }
    
    if(typeof name !== 'string' && typeof username !== 'string' && typeof password !== 'string') {
        res.status(400).json({
            "success": false,
            "message": "all input should be formatted as string",
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
}