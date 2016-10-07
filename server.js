var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//  Routers
var addRouter = require('./routes/add');
var subtractRouter = require('./routes/subtract');
var multiplyRouter = require('./routes/multiply');
var divideRouter = require('./routes/divide');

var app = express();

//  Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//  Connect routers
app.use('/add', addRouter);
app.use('/subtract', subtractRouter);
app.use('/multiply', multiplyRouter);
app.use('/divide', divideRouter);

//  Connect index.html
app.get('/', function(req, res){
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

//  Sets the project to localhost:3000
app.listen(3000);
