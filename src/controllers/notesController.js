// NOTES CONTROLLER

// Database
const db = require('../database/models');

module.exports = {
    create: function(req, res) {
        db.Note.create({
            title: req.body.title,
            description: req.body.description,
            status: 1
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            return res.send('Note not created: ' + error)
        });
    },
    detail: function(req, res) {
        db.Note.findByPk(req.params.note_id)
        .then((note) => {
            return res.render('detail', { note: note })
        })
        .catch((error) => {
            return res.send('Note not found: ' + error)
        });
    },
    update: function(req, res) {
        db.Note.update({
            title: req.body.title,
            description: req.body.description,
        },
        {
            where: {
                id: req.params.note_id
            }
        })
        .then((note) => {
            res.redirect('/')
        })
        .catch((error) => {
            return res.send('Note not updated: ' + error)
        });
    },
    delete: function(req, res) {
        db.Note.update({
           status: 0,
        },
        {
            where: {
                id: req.params.note_id
            }
        })
        .then((note) => {
            res.redirect('/')
        })
        .catch((error) => {
            return res.send('Note not deleted: ' + error)
        });
    }
}