const userModel = require('../models/user')

exports.base = (req, res) => {
    res.send("route auth")
}

exports.login = (req, res) => {
    const { username, password } = req.body
    const user = userModel.checkLogin(username, password)
    
    if (user) {
        return res.json({
            "success": true,
            "message": "login success.",
            "data": user
        })
    } else {
        return res.status(400).json({
            "success": false,
            "message": "unauthorized.",
            "data": {}
        })
    }
}

exports.register = (req, res) => {
    const { name, username, password } = req.body

    if(!name || !username || !password) {
        return res.status(400).json({
            "success": false,
            "message": "make sure you entered all required data.",
            "data": {}
        })
    
    }
    
    if(typeof name !== 'string' && typeof username !== 'string' && typeof password !== 'string') {
        return res.status(400).json({
            "success": false,
            "message": "all input should be formatted as string",
            "data": {}
        })
    }

    let sameUsername = userModel.findUsername(username)
    if (sameUsername) {
        return res.status(400).json({
            "success": false,
            "message": "username already registered.",
            "data": {}
        })
    }

    const user = userModel.create(name, username, password)

    return res.status(200).json({
        "success": 200,
        "message": "registration success.",
        "data": user
    })
}