var express = require('express');
var hbs = require('hbs');
var locals = require('./locals.js');
var app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app);

app.get('/', function(req, res){
    res.render('home', {
        foods: [
            'chalupa',
            'taco',
            'ceviche'
        ]
    });
});

app.get('/page2', function(req, res){
    res.render('page2');
});

app.listen(1555, function(){
    console.log('Server running on port 1555');
});
