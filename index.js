const express = require('express')
const routes = require('./routes/index')

const errorHandling = require('./middleware/error')

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)
app.use(errorHandling)

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})