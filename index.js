var express = require('express');
var bootstrap = require('bootstrap');
var jquery = require('jquery');
var popper = require('popper');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('port', 5226);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/home', (req, res) => {
    res.render('index.html');
});

app.get('/hills', (req, res) => {
    res.render('hills.html');
});

app.get('/rc', (req, res) => {
    res.render('rc.html');
});

app.get('/otc', (req, res) => {
    res.render('otc.html');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.render('404');
});
  
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
});