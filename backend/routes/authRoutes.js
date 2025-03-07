const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signIn', authController.signIn)

module.exports = router;