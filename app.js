const express = require('express')
const app = express()
const PORT = 3000


app.get('/', (req, res) => {
  res.send('Hello world')
})


app.listen(PORT, () => {
  console.log(`Express server is listening on 127.0.0.1:${PORT}`)
})