// MAIN ROUTER

// Express router
const express = require('express');
const router = express.Router();

// Controller
const mainController = require('../controllers/mainController')

// For test
const db = require('../database/models');

// - Home
router.get('/', mainController.index);

module.exports = router;