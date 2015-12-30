var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('default');
});

var server = app.listen(3000, function(){
  console.log('App running on port 3000');
});
