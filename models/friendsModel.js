const friends = require('../database/friends.json')


const model = {
    friend: friends,
    checkById: (id) => friends.find(friend => friend.id === id),
    create: (userId, name) => {
        let id = friends.length + 1
        let friend = { id, userId, name }

        friends.push(friend)

        return friend
    },
    update: (id, name) => {
        const index = friends.findIndex(friend => friend.id === id)
        friends[index].name = name
        return friends[index]
    },
    findId: (id) => friends.find(friend => friend.id === id)

}


module.exports = model