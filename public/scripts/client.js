/* Three global variables.  First, second, active.  All numbers are added to active.  When an operation is clicked, active is
assigned to the variable first, converted to a float.  Active is reset to be empty.  Active is then assigned to second
in the same way.  First and second are the parameters for every operation */

var input = '';
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


});

//  POST function for adding numbers
function addNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: '/add',
    data: endNums,
    success: function() {
      //  Do something;
      getNum('/add');
    }
  });
}

//  POST function for subtracting numbers
function subtractNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: '/subtract',
    data: endNums,
    success: function() {
      //  Do something;
      getNum('/subtract');
    }
  });
}

//  POST function for multiplying numbers
function multiplyNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: '/multiply',
    data: endNums,
    success: function() {
      //  Do something;
      getNum('/multiply');
    }
  });
}

//  POST function for dividing numbers
function divideNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: '/divide',
    data: endNums,
    success: function() {
      //  Do something;
      getNum('/divide');
    }
  });
}

function getNum(toURL) {
  $.ajax({
    type: 'GET',
    url: toURL,
    success: function(num){
      console.log(num);
    }
  });
}
