var express = require('express');
var app = express();
//var http = require('http').Server(app);

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
  response.render('search.hbs', {});
  //response.send('OK');
});

<title>{{title}}</title>

<form action="/submit1" method="POST">
  <label>Description</label>
  <input type="text" name="desc">
  <br><br>
  <button type="submit">Add Task</button>
</form>

app.listen(8001, function (){
  console.log('Listening on port 8001');
})
