// NOTES ROUTER

// Express router
const express = require('express');
const router = express.Router();

// Controller
const notesController = require('../controllers/notesController')

// - Create note
router.post('/', notesController.create);

// - Edit and delete note
router.get('/:note_id', notesController.detail);
router.put('/:note_id', notesController.update);
router.delete('/:note_id', notesController.delete);

module.exports = router;