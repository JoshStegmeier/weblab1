var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// tell the app to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('pages/index');
});

app.get('/roll', function(req, res){
    res.render('pages/roll');
});

app.post('/rolled', function(req, res){
    var theNumber = '';
    for (var key in req.body) {
        if(req.body.hasOwnProperty(key)) {
            theNumber += req.body[key];
        }
    }

    console.log(theNumber);
    res.render('pages/rolled', {
        rolledNumber : theNumber
    });
});

app.get('/lazy', function(req, res){
    res.render('pages/lazy');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000.');
});
