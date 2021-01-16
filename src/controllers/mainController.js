// MAIN CONTROLLER

// Database
const db = require('../database/models');

module.exports = {
    index: function(req, res) {
        db.Note.findAll({
            where: {
                status: 1
            }
        })
        .then((notes) => {
            return res.render('index', { notes: notes })
        });
    }
}