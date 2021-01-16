// NOTES ROUTER

// Express router
const express = require('express');
const router = express.Router();

// Controller
const notesController = require('../controllers/notesController')

// - Create note
router.get('/new', notesController.createForm);
router.post('/', notesController.create);

// - Edit and delete note
router.get('/:id', notesController.detail);
router.put('/:id', notesController.update);
router.delete('/:id', notesController.delete);

module.exports = router;