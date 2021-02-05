import express from 'express'

const auth = express.Router()

auth.get('/', (req, res) => {
    res.send("tes auth")
})

export default auth