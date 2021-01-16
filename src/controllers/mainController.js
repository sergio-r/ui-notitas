// MAIN CONTROLLER

const fs = require('fs')
const path = require('path')

module.exports = {
    index: function(req, res) {
        let notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../database/notes.json'),'utf8'));
        return res.render('index', { notes: notes })
    }
}