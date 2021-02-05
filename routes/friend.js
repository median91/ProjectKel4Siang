import express from 'express'

const friend = express.Router()

friend.get('/', (req, res) => {
    res.send("tes friend")
})

export default friend