$('document').ready( function() {
  var equation = [];
  var tempNum = [0];
  var decimalFlag = false; // true if current number has a decimal
  // var primaryOps = ["*", "/"];
  // var secondaryOps = ["+", "-"];
  var digits = ['0','1','2','3','4','5','6','7','8','9'];

  $('.btn').on('click', function() {
    var clicked = $(this);
    console.log(clicked.html());
    // Clear everything
    if (clicked.html() === "AC") {
      history = [];
      ops = [];
      tempNum = [0];
      decimalFlag = false;
      console.log(history, ops, tempNum);
      $('.display').html('0');
    }

    if (clicked.html() === "." && !decimalFlag) {
      tempNum.push(clicked.html());
      decimalFlag = true;
    }

    if (digits.indexOf(clicked.html()) === -1) {
      tempNum.push(clicked.html());
    }

    // an operator has been pushed but it wasn't equals, and no other operators
    if (primaryOps.indexOf(clicked.html()) && ops.length === 0) {
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
