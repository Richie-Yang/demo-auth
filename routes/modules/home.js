const express = require('express')
const router = express.Router()


////// Routing Section Starts Here //////
// GET index page (Read in CRUD operation)
router.get('/', (req, res) => {
  res.redirect('/login')
})
////// Routing Section Ends Here //////


module.exports = router