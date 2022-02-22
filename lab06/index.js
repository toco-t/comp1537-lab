$("button").click(function() {
  var first_operand = $(".first-operand").val()
  var second_operand = $(".second-operand").val()

  if ($(this).data("val") == "+") {
    var result = parseFloat(first_operand) + parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " + " + second_operand + " = " + result)
    $(".history").append("<div><span class='red'>" + first_operand + " + " + second_operand + " = " + result + "</span></div>")
  }

  else if ($(this).data("val") == "-") {
    var result = parseFloat(first_operand) - parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " - " + second_operand + " = " + result)
    $(".history").append("<div><span class='blue'>" + first_operand + " - " + second_operand + " = " + result + "</span></div>")
  }

  else if ($(this).data("val") == "*") {
    var result = parseFloat(first_operand) * parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " * " + second_operand + " = " + result)
    $(".history").append("<div><span class='green'>" + first_operand + " * " + second_operand + " = " + result + "</span></div>")
  }

  else {
    var result = parseFloat(first_operand) / parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " / " + second_operand + " = " + result)
    $(".history").append("<div><span class='yellow'>" + first_operand + " / " + second_operand + " = " + result + "</span></div>")
  }


});
