var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));






app.get('/', function(req, res){
  res.send('hola mundo');
});

app.post('/pruebapost', function(req, res){
  console.log(req.body.nombre);
  res.send("nombre: "+req.body.nombre);

});

app.listen(3000, function(){
  console.log('ejemplo de lectura el puero 3000')
});
