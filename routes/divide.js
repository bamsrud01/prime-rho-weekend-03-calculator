var express = require('express');
var router = express.Router();

//  Global variable for result
var result = 0;

//  Receives the POST request from the client
router.post('/', function(req, res){
  //  Convert object properties from strings to numbers and divide
  result = parseFloat(req.body.firstNum) / parseFloat(req.body.secondNum);
  //  Send a positive HTTP status code
  res.sendStatus(200);
});

//  Receives the GET request from the client
router.get('/', function(req, res){
  //  Convert the result to a string and send it to the client
  res.send(result.toString());
});

//  Exports the router for use in server.js
module.exports = router;
