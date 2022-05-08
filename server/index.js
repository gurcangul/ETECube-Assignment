import express from 'express'
import dotenv from 'dotenv'

import notFoundMiddleware from '/middleware/notFound.js'
import notFoundMiddleware from './middleware/errorHandler.js'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
  res.send('Server is runnig!')
})

app.use(notFoundMiddleware)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))