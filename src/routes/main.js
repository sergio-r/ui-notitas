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

// - Test
router.get('/test', function(req, res){
    db.Note.findOne()
    .then((result) => {
        return res.send('Conection OK: ' + result.id)
    })
    .catch((error) => {
        return res.send('Conection Error: ' + error)
    });
});

module.exports = router;