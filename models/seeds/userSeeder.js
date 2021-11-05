const mongoose = require('mongoose')
const User = require('../user')
const dummyData = require('../../sample_users')


mongoose.connect('mongodb://localhost/demo-auth')
const db = mongoose.connection


db.on('error', () => console.log('mongodb error!'))
db.once('open', () => {
  console.log('mongodb connected!')

  dummyData.forEach(({ firstName, email, password }) => {
    User.create({first_name: firstName, email, password})
      .then(() => {
        console.log('userSeeder done!')
        db.close()
      })
      .catch(error => console.log(error))
      .finally(() => process.exit())
  })
})
