// Modules
const path = require('path');

// Express
const express = require('express');
const app = express();

// Router
const mainRouter = require('./routes/main');
const notesRouter = require('./routes/notes');

app.use('/', mainRouter);
app.use('/notes', notesRouter);

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// For forms data
app.use(express.urlencoded({extended : false}))
app.use(express.json())

// For static content
app.use(express.static(path.join(__dirname, '../public')));


// Server
app.listen(process.env.PORT || 3000,function() {
    console.log("Server running...")
    console.log("http://localhost:3000/")
})