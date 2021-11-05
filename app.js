const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/demo-auth')
const db = mongoose.connection

db.on('error', () => console.error('mongodb error!'))
db.once('open', () => console.log('mongodb connected!'))

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)


app.listen(PORT, () => {
  console.log(`Express server is listening on 127.0.0.1:${PORT}`)
})