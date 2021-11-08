const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')
const logout = require('./modules/logout')
const dashboard = require('./modules/dashboard')


////// Routing Section Starts Here //////
router.use('/dashboard', dashboard)
router.use('/logout', logout)
router.use('/login', login)
router.use('/', home)
////// Routing Section Ends Here //////


module.exports = router