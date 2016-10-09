
//  These variables are assigned when clearAll() is run;
var input, canClick, canOperate, type, active;

$(document).ready(function() {

  //  Set starting values (in clearAll function) and initialize display
  clearAll();
  updateDisplay();

  //  Click handler for numbers
  $('.numeral').click(function(){
    //  First, determine if the calculator is active.  If not, clear it.
    if (!active) {
      clearAll();
    }
    //  Add the value to the display.  If 0, replace it.
    if (input == '0') {
      input = '';
    }
    input += $(this).text();
    updateDisplay();
  });

  //  Click handler for operators
  $('.operator').click(function(){
    assignOperator($(this).text());
    canOperate = false;
    canClick = true;
    updateDisplay();
  });

  //  Click handler for the clear button
  $('#clear').click(function(){
    clearAll();
  });

  //  Click handler for the decimal button
  $('#decimal').click(function(){
    //  First, determine if the calculator is active.  If not, clear it.
    if (!active) {
      clearAll();
    }
    //  Add decimal to the display
    if (canClick) {
      input += '.';
    }
    canClick = false;
    updateDisplay();
  });

  //  Click handler for the equal button
  $('#calculate').click(function() {
    assignValues();
    postNums(endNums.firstNum, endNums.secondNum);
    active = false;
  });

});

//  This function will use the text in the operator button to assign the appropriate url for the POST and GET functions.
function assignOperator(value) {
  if (canOperate) {
    switch (value) {
      case '+':
        type = '/add';
        input += ' + ';
        break;
      case '-':
        type = '/subtract';
        input += ' - ';
        break;
      case 'X':
        type = '/multiply';
        input += ' x ';
        break;
      case '/':
        type = '/divide';
        input += ' / ';
        break;
    }
  }
}

//  This function will split the input at the spaces, returning an array with three items.  The first and third are the two numbers.
function assignValues(){
  var array = input.split(' ');
  //  If the array is less than 3 in length, no operation or second number has been chosen.  The operation will fail, so the user is warned and the calculator is reset.
  if (array.length < 3) {
    alert('Please enter two numbers.  Try again.');
    clearAll();
  }  else {
    endNums.firstNum = array[0];
    endNums.secondNum = array[2];
  }
}

function clearAll() {
  //  This is the value shown in the display
  input = '0';
  //  This variable will hold a string with the URL path to be sent into the GET request.  It will be assigned when the operator is clicked.
  type = '';
  //  This variable will ensure that a decimal can only be entered once.
  canClick = true;
  //  This variable will ensure that only one operation can be used.
  canOperate = true;
  //  This object will be sent to the server, with the properties being run through the calculation.
  endNums = {
    firstNum: 0,
    secondNum: null
  }
  //  This variable will reset the calculator if the display is showing the result of a previous calculation.
  active = true;
  updateDisplay();
}

//  Continuously updates the display to match the input string.
function updateDisplay() {
  $('#shown-value').text(input);
}

//  POST function for calculating numbers.  The toURL parameter will direct the request to the proper router.
function postNums(numOne, numTwo) {
  $.ajax({
    type: 'POST',
    url: type,
    data: endNums,
    success: function() {
      getNum(type);
    }
  });
}

//  GET function for retreiving the answer.  The toURL parameter will direct the request to the proper router.
function getNum(toURL) {
  $.ajax({
    type: 'GET',
    url: toURL,
    success: function(num){
      input = num;
      updateDisplay();
    }
  });
}
