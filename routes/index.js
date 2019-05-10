const express = require("express");
const path = require("path")

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
// Welcome Page
// router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/',  ensureAuthenticated, (req, res) => 
res.sendFile(path.join(__dirname,'../client/public/index.html')));

module.exports = router;