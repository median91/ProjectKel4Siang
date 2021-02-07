const items = require('../database/items.json')
const item = require('../routes/item')



const model = {
    item: items,
    checkById: (id) => items.find(item => item.id === id),
    create: (userId, name) => {
        let id = items.length + 1
        let item = { id, userId, name }

        items.push(item)

        return item
    },
    update: (id, name) => {
        const index = items.findIndex(item => item.id === id)
        items[index].name = name
        return items[index]
    },
    deleteitem: (id) => {
        const index = items.findIndex(item => item.id === id)
        const deleteitem = items.splice(index, 1)
        return deleteitem
    },
    findId: (id) => items.find(item => item.id === id),
    fetchItem: item
}

module.exports = model