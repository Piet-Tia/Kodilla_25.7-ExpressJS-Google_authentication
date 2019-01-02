var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
var app = express();
var googleProfile = {};







/*
FROM PREVIOUS MODULE:

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.use(express.static('assets'));

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/auth/google', function(req, res){
    res.render('google-auth');
});

app.get('/auth/logged_in', function(req, res){
    res.render('logged_in');
});

app.get('/', function (req, res) {
    res.sendFile('/index.html')
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});



var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
*/
