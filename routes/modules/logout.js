const express = require('express')
const router = express.Router()


////// Routing Section Starts Here //////
// GET to logout (Read in CRUD operation)
router.get('/', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid')
    return res.redirect('/')
  } else res.redirect('/login')
})
////// Routing Section Ends Here //////


module.exports = router