var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({message: 'Hello from express!'});
});

app.get('/page2', function(req, res){
    res.json({message: 'I am page 2!!!!'});
});

app.listen(1555, function(){
    console.log('Server running on port 1555');
});
