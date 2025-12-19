// import the router from the express
const express = require('express')
const router = express.Router();

// import the AuthCoach.js from the Controller
const {auth} = require('../Controller/auth')
const {AdminAuth} = require('../middleware/AdminAuth');

// to create the route
router.get('/me' , AdminAuth , auth);

// to export the router
module.exports = router