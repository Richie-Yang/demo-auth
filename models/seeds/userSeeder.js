const db = require('../../config/mongoose')
const User = require('../user')
const dummyData = require('../../sample_users')


db.once('open', () => {
  dummyData.forEach(({ firstName, email, password }) => {
    // import dummy data
    User.create({first_name: firstName, email, password})
      .then(() => {
        console.log('userSeeder done!')
        // close DB connection afterward
        db.close()
      })
      .catch(error => console.log(error))
      .finally(() => process.exit()) // exit the process anyway
  })
})
