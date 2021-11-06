const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')


////// Routing Section Starts Here //////
router.use('/login', login)
router.use('/', home)
////// Routing Section Ends Here //////


module.exports = router