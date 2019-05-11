const express = require("express");
const path = require("path")

const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/dashboard',  ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    name: req.user.name
}));

module.exports = router;