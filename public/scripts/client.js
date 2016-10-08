
//  These variables are assigned when clearAll() is run;
var input, canClick, canOperate, type, active;

$(document).ready(function() {

  //  Set starting values and initialize display
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
    $('#shown-value').text(input);
  });

  //  Click handler for operators
  $('.operator').click(function(){
    assignOperator($(this).text());
    canOperate = false;
    canClick = true;
    updateDisplay();
    console.log(type);
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

function assignValues(){
  var array = input.split(' ');

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
      updateDisplay();;
    }
  });
}
