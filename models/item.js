const items = require('../database/items.json')


const model = {
    item: items,
    checkById: (id) => items.find(item => item.id === id),
    create: (userId, name) => {
        let id = items.length
        let item = { id, userId, name }

        items.push(item)

        return item
    },
    findId: (id) => items.find(id => item.id === id),
}


module.exports = model