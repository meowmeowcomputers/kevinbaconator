var express = require('express');
var app = express();

var rp = require('request-promise');

var body_parser = require('body-parser');
var promise = require('bluebird');

var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL || {database: 'test'});

var axios = require('axios');

app.use(body_parser.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
  response.render('form.hbs', {});
  //response.send('OK');
});


var PORT = process.env.PORT || 8001;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

app.get('/form', function(request, response) {
  response.render('form.hbs', {title:'form'});
});

app.post('/submit', function (request, response) {

  console.log(request.body);
  console.log(request.body.act)
  var x = request.body.act.split(' ').join('+');
  var uri1 = 'https://api.themoviedb.org/3/search/person?api_key=51e38f27928e488db41b958879abd765&query='
  var fulluri = uri1.concat(x);
//Sample API search
//https://api.themoviedb.org/3/search/person?api_key=51e38f27928e488db41b958879abd765&query=actor+name
  var options = {
    uri: fulluri,
    json: true
  };
  rp(options)
  .then(function(result){
    // console.log(result)
    console.log(result.name)
    return result;
  });
  .then(function(result){
    response.render('form.hbs', {title:'form'})
  })
});
