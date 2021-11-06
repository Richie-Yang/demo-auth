const express = require('express')
const router = express.Router()
const User = require('../../models/user')


////// Routing Section Starts Here //////
// GET login page (Read in CRUD operation)
router.get('/', (req, res) => {
  res.render('login')
})

// POST to login (Read in CRUD operation)
router.post('/', (req, res) => {
  const { email, password, rememberEmail } = req.body
  // combine email and password for match purpose
  const userInputCredential = email + password
  // using comparing operator to save the result to emailCheck
  const emailCheck = rememberEmail === 'on'
  // pre-make error message obj template for later use
  const loginErrorMessage = { error: `Either Email or Password not correct`, emailCheck, email }

  return User.findOne({ email }, 'first_name email password')
    .then(user => {
      // if no result found, then re-render login page with error message
      if (user === null) {
        return res.render('login', loginErrorMessage)
      }

      const { first_name, email, password } = user
      const dbStoredCredential = email + password

      // if matched, render index page, otherwise render login page again
      userInputCredential === dbStoredCredential ?
        res.render('index', { firstName: first_name }) :
        res.render('login', loginErrorMessage)
    })
    .catch(error => console.log(error))
})
////// Routing Section Ends Here //////


module.exports = router