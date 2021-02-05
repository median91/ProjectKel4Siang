import express from 'express'
import routes from './routes/index.js'
import errorHandling from './middleware/error_handling.js'

const app = express()
const port = 3000

app.use(express.json());
app.use(errorHandling)
app.use(routes)

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})