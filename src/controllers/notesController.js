// NOTES CONTROLLER

const fs = require('fs')
const path = require('path')

// Test Database
let notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../database/notes.json'),'utf8'));
let new_id = notes.length

module.exports = {
    create: function(req, res) {
        let new_note = {
            id: ++new_id,
            title: req.body.title,
            description: req.body.description,
            created_at: "2020-01-16 00:00:00",
            updated_at: "2020-01-16 05:00:00"
        }
        notes.push(new_note);
        fs.writeFileSync(path.join( __dirname, '../database/notes.json'), JSON.stringify(notes, null, 4));
        return res.redirect('/')
    },
    detail: function(req, res) {
        for (note of notes) {
            if (note.id == req.params.note_id) {
                return res.render('detail', { note: note })
            }         
        }
        return res.send('Note not found')
    },
    update: function(req, res) {
        console.log(req.body)
        for (note of notes) {
            if (note.id == req.params.note_id) {
                note.title = req.body.title,
                note.description = req.body.description,
                note.updated_at = "2020-01-16 10:00:00"
            }         
        }
        fs.writeFileSync(path.join( __dirname, '../database/notes.json'), JSON.stringify(notes, null, 4));
        return res.redirect('/')
    },
    delete: function(req, res) {
        notes = notes.filter( n => n.id != req.params.note_id )
        fs.writeFileSync(path.join( __dirname, '../database/notes.json'), JSON.stringify(notes, null, 4));
        return res.redirect('/')
    }
}