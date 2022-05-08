import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Server is runnig!')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))