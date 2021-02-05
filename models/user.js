const users = require('../database/users.json')

const model = {
    checkLogin: (username, password) => users.find(user => user.username === username && user.password === password),
    create: (name, username, password) => {
        let id = users.length
        let user = {id, name, username, password}

        users.push(user)

        return user
    },
    findUsername: (username) => users.find(user => user.username === username),
}

module.exports = model