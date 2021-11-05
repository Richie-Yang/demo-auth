const express = require('express')
const router = express.Router()
const User = require('../../models/user')


router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { email, password, rememberEmail } = req.body
  const userInputCredential = email + password
  const emailCheck = rememberEmail === 'on'
  const loginErrorMessage = { error: `Either Email or Password not correct`, emailCheck, email }

  return User.findOne({ email }, 'first_name email password')
    .then(user => {
      if (user === null) res.render('login', loginErrorMessage)

      const { first_name, email, password } = user
      const dbStoredCredential = email + password
      console.log(userInputCredential, dbStoredCredential)
      userInputCredential === dbStoredCredential ?
        res.render('index', { firstName: first_name }) :
        res.render('login', loginErrorMessage)
    })
    .catch(error => console.log(error))
})


module.exports = router