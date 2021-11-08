const express = require('express')
const router = express.Router()
const sessionCheck = require('../../sessionCheck')


////// Routing Section Starts Here //////
// GET index page (Read in CRUD operation)
router.get('/', sessionCheck, (req, res) => {
  res.redirect('/login')
})
////// Routing Section Ends Here //////


module.exports = router