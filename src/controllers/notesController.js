// NOTES CONTROLLER

const fs = require('fs')
const path = require('path')

module.exports = {
    createForm: function(req, res) {
        return res.render('index')
    },
    create: function(req, res) {
        return res.render('index')
    },
    detail: function(req, res) {
        return res.render('detail')
    },
    update: function(req, res) {
        return res.render('index')
    },
    delete: function(req, res) {
        return res.render('index')
    }
}