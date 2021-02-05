import express from 'express'

import auth from './auth.js'
import friend from './friend.js'
import item from './item.js'
import transaction from './transaction.js'

const route = express.Router()

route.get('/', (req, res) => {
    res.send("welcome to indomaret")
})

route.use('/auth', auth)
route.use('/friend', friend)
route.use('/item', item)
route.use('/transaction', transaction)

export default route