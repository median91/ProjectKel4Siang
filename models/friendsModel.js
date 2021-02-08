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
    update: (id, userId, name) => {
        const index = friends.findIndex(friend => friend.id === id)
        friends[index].name = name
        friends[index].userId = userId
        return friends[index]
    },
    findId: (id) => friends.find(friend => friend.id === id),
    delete: (id) => {
        const index = friends.findIndex(friend => friend.id === id)
        const deletedFriend = friends.splice(index, 1)
        return deletedFriend
    }
}


module.exports = model