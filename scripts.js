function solve(a, b, op) {
  switch (op) {
    case "addition":
      return a+b;
      break;
    case "subtraction":
      return a - b;
      break;
    case "multiplication":
      return a * b;
      break;
    case "division":
      return a / b;
      break;
  }
};

// get numbers until an operation is pushed
// (* or /) should solve on the NEXT operator push
var primaryOps = ["*", "/"];
// (+ or -) should solve on the next push unless it's (* or /)
var secondaryOps = ["+", "-"];

var digits = ["1",'2','3','4','5','6','7','8','9','0'];

$('document').ready( function() {
  var history = [];
  var ops = [];
  var tempNum = [0];
  var decimalFlag = false; // true if current number has a decimal

  $('.btn').on('click', function() {
    var clicked = $(this).html();
    console.log(clicked.html());
    // Clear everything
    if (clicked === "AC") {
      history = [];
      ops = [];
      tempNum = [0];
      decimalFlag = false;
      console.log(history, ops, tempNum);
    }

    if (clicked === "." && !decimalFlag) {
      tempNum.push(clicked.html());
      decimalFlag = true;
    }

    if (digits.indexOf(clicked) !== -1) {
      tempNum.push(clicked.html());
    }

    // an operator has been pushed but it wasn't equals, and no other operators
    if (primaryOps.indexOf(clicked) && ops.length === 0) {
      history.push(parseFloat(tempNum.join('')));
      ops.push(clicked);
      tempNum = [];
      console.log(history, ops);
    } else if (clicked.hasClass("operator") && (ops.length === 1) && tempNum.length !== 0) {
      history.push(parseFloat(tempNum.join('')));
      if (ops[0] === "multiplication" || ops[0] === "division"  || clicked.hasClass("equals")) {
        $('.display').html(solve(history[0],history[1], ops[0]));
      }
    }

  });
});
