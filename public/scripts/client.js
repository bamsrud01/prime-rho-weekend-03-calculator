/* Three global variables.  First, second, active.  All numbers are added to active.  When an operation is clicked, active is
assigned to the variable first, converted to a float.  Active is reset to be empty.  Active is then assigned to second
in the same way.  First and second are the parameters for every operation */

//  This variable holds the value of the number while it is being entered.
var input = '';
//  This variable will ensure that a decimal can only be entered once.
var canClick = true;
//  This variable will hold a string with the URL path to be sent into the GET request.  It will be assigned when the operator is clicked.
var type = '';
//  This object will be sent to the server, with the properties being run through the calculation.
var endNums = {
  firstNum: 4,
  secondNum: 2
};

$(document).ready(function() {

  $('#add').click(function(){
    addNums();
  });
  $('#subtract').click(function(){
    subtractNums();
  });
  $('#multiply').click(function(){
    multiplyNums();
  });
  $('#divide').click(function(){
    divideNums();
  });
  $('#clear').click(function(){
    //  Clear function
  });
  $('#decimal').click(function(){
    //  Add decimal to active
    canClick = false;
  });
  $('#calculate').click(function() {
    getNum(type);
  });

});

//  toURL values:   '/add'  '/subtract' '/multiply'   '/divide'

//  POST function for calculating numbers.  The toURL parameter will direct the request to the proper router.
function postNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: toURL,
    data: endNums,
    success: function() {
      getNum('/add');
    }
  });
}

function addNums() {
  type = '/add';
}

function subtractNums() {
  type = '/subtract';
}

function multiplyNums() {
  type = '/multiply';
}

function divideNums() {
  type = '/divide';
}
//  GET function for retreiving the answer.  The toURL parameter will direct the request to the proper router.
function getNum(toURL) {
  $.ajax({
    type: 'GET',
    url: toURL,
    success: function(num){
      console.log(num);
    }
  });
}
