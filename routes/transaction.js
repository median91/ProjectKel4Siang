import express from 'express'

const transaction = express.Router()

transaction.get('/', (req, res) => {
    res.send("tes transaction")
})

export default transaction