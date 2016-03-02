var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// set public static files
app.use(express.static('public'));

// return an index.html file when the default route is requested.
// app.get('/', function (req, res) {
//     res.sendfile('index.html');
// });

// use res.render to foad an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// add another route
// app.get('/about', function(req, res) {
//     res.sendfile('about.html');
// })

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
});