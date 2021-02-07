const express = require('express')
const routes = require('./routes/index')

const app = express()
const port = 3000

app.use(express.json());
app.use(routes)
app.use(function (error, req, res, next) {
    res.send(error.message)
})

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})