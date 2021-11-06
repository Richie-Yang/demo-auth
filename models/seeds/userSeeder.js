const db = require('../../config/mongoose')
const User = require('../user')
const dummyData = require('../../sample_users')


// import dummy data one by one
db.once('open', () => {
  dummyData.forEach(({ firstName, email, password }) => {
    // import dummy data
    User.create({first_name: firstName, email, password})
      .catch(error => console.log(error))
  })
  console.log('userSeeder done!')
})


// import all dummy data at once
// db.once('open', () => {
//   User.create(dummyData)
//     .then(() => {
//       console.log('userSeeder done!')
//       db.close()
//     })
//     .catch(error => console.log(error))
//     .finally(() => process.exit())
// })
