var express = require('express');
var app = express();

var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'test'});
//var http = require('http').Server(app);

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
  response.render('search.hbs', {});
  //response.send('OK');
});



app.listen(8001, function (){
  console.log('Listening on port 8001');
})

var PORT = process.env.PORT || 8001;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
