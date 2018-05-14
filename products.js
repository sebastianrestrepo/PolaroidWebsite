const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;

var app = express(),
    db;

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'))

app.get("/", function (req, res) {
    res.render('products');
});

/*app.listen(3000, function () {
    console.log('Listening port 3000');
});*/

//Conectarse a la base de datos
MongoClient.connect(`mongodb+srv://srestrepo:0ymt8cyZTgZf6m2T@cluster0-sreik.mongodb.net/products?retryWrites=true`, {
        auth: {
            user: 'srestrepo',
            password: '0ymt8cyZTgZf6m2T'
        }
    },
    function (err, clien) {
        if (err) throw err;

        db = client.db('products');

        //Iniciar servidor
        app.listen(process.env.PORT || 1234);
    }
);
//cluster0-shard-00-00-sreik.mongodb.net:27017