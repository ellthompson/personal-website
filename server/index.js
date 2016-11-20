var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var request = require('request');

var db = require('./db/index.js');

app.set('views', './static/views');
app.set('view engine', 'pug');
app.use('/static/', express.static('static/dist'));
app.use('/fonts/', express.static('static/fonts'));
app.use('/', express.static('static'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/blog', function (req, res) {
    res.render('index');
});

app.get('/blog/:slug', function (req, res) {
    res.render('index');
});

app.get('/gallery', function (req, res) {
    res.render('index');
});

app.get('/projects', function (req, res) {
    res.render('index');
});

require('./api/index.js')(app, db);

http.listen(3000, function(){
    console.log('Listening on *:3000');
});
