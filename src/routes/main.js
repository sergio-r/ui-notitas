// MAIN ROUTER

// Express router
const express = require('express');
const router = express.Router();

// Controller
const mainController = require('../controllers/mainController')

// - Home
router.get('/', mainController.index);

module.exports = router;