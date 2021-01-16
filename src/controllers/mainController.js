// MAIN CONTROLLER

const fs = require('fs')
const path = require('path')

module.exports = {
    index: function(req, res) {
        return res.render('index')
    }
}