var express = require('express');
var app = express();
//var http = require('http').Server(app);

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
  response.render('search.hbs', {});
  //response.send('OK');
});


app.listen(8001, function (){
  console.log('Listening on port 8001');
})

var port
