const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')


router.use('/login', login)
router.use('/', home)


module.exports = router