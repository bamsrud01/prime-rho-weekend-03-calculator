/* Three global variables.  First, second, active.  All numbers are added to active.  When an operation is clicked, active is
assigned to the variable first, converted to a float.  Active is reset to be empty.  Active is then assigned to second
in the same way.  First and second are the parameters for every operation */

//  This variable holds the value of the number while it is being entered.
var input = '';
//  This variable will ensure that a decimal can only be entered once.
var canClick = true;
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
/*
0=
123
456
789
*/
