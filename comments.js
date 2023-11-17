// Create web server
var express = require('express');
var app = express();
// Create a database
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
// Create a parser
var bodyParser = require('body-parser');
// Parse the data
app.use(bodyParser.json());
// Create a route
app.use(express.static(__dirname + '/public'));
// Get the data from the database
app.get('/contactlist', function (req, res) {
    console.log('I received a GET request');
    // Get the data from the database
    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});