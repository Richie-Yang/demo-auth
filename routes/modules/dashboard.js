const express = require('express')
const router = express.Router()


////// Routing Section Starts Here //////
// GET dashboard page (Read in CRUD operation)
router.get('/', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    const user = req.query.user
    return res.render('dashboard', { user })
  } else res.redirect('/login')
})
////// Routing Section Ends Here //////


module.exports = router