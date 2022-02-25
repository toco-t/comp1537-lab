$("button").click(function() {
  var first_operand = $(".first-operand").val()
  var second_operand = $(".second-operand").val()

  if ($(this).data("val") == "+") {
    var result = parseFloat(first_operand) + parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " + " + second_operand + " = " + result)
    $(".history").append("<div class='red'>" + first_operand + " + " + second_operand + " = " + result + "</div>")
  }

  else if ($(this).data("val") == "-") {
    var result = parseFloat(first_operand) - parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " - " + second_operand + " = " + result)
    $(".history").append("<div class='blue'>" + first_operand + " - " + second_operand + " = " + result + "</div>")
  }

  else if ($(this).data("val") == "*") {
    var result = parseFloat(first_operand) * parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " * " + second_operand + " = " + result)
    $(".history").append("<div class='green'>" + first_operand + " * " + second_operand + " = " + result + "</div>")
  }

  else if ($(this).data("val") == "/") {
    var result = parseFloat(first_operand) / parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " / " + second_operand + " = " + result)
    $(".history").append("<div class='yellow'>" + first_operand + " / " + second_operand + " = " + result + "</div>")
  }

  else if ($(this).data("val") == "^") {
    var result = parseFloat(first_operand) ^ parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " ^ " + second_operand + " = " + result)
    $(".history").append("<div class='purple'>" + first_operand + " ^ " + second_operand + " = " + result + "</div>")
  }

  else {
    var result = parseFloat(first_operand) % parseFloat(second_operand)
    $(".result").html("Result: " + first_operand + " % " + second_operand + " = " + result)
    $(".history").append("<div class='gold'>" + first_operand + " % " + second_operand + " = " + result + "</div>")
  }
});
