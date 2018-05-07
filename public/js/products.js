const express = require('express'),
consolidate = require('consolidate'),
mongoClient = require('mongodb').MongoClient;

var app = express();

var db;

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.listen(5000);

app.get('/products', (req, res) => {
    res.render('index');
});