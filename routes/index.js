const express = require("express");
const path = require("path")

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/app',  ensureAuthenticated, (req, res) => 
res.sendFile(path.join(__dirname,'../client/build/index.html')));

router.get('/register', (req, res) => 
res.render(path.join(__dirname,'../views/register.ejs')));


module.exports = router;