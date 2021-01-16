// Modules
const path = require('path');

// Express
const express = require('express');
const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// For HTTP methods PUT and DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// For static content
app.use(express.static(path.join(__dirname, '../public')));

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// For parsing application/json
app.use(express.json());

// Router
const mainRouter = require('./routes/main');
const notesRouter = require('./routes/notes');

app.use('/', mainRouter);
app.use('/notes', notesRouter);

// Server
app.listen(process.env.PORT || 3000, function() {
    console.log("Server running...")
    console.log("http://localhost:3000/")
})