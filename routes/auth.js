import express from 'express'

const auth = express.Router()

auth.get('/', (req, res) => {
    res.send("route auth")
})

export default auth