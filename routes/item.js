import express from 'express'

const item = express.Router()

item.get('/', (req, res) => {
    res.send("tes item")
})

export default item