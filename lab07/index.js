$("button").click(function() {
  var first_operand = $(".first-operand").val()
  var second_operand = $(".second-operand").val()
  var del_button = "<button class='del'>DELETE</button>"

  switch ($(this).data("val")) {
    case "+":
      var result = parseFloat(first_operand) + parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " + " + second_operand + " = " + result);
      $(".history").append("<div class='red'>" + first_operand + " + " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "-":
      var result = parseFloat(first_operand) - parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " - " + second_operand + " = " + result);
      $(".history").append("<div class='blue'>" + first_operand + " - " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "*":
      var result = parseFloat(first_operand) * parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " * " + second_operand + " = " + result);
      $(".history").append("<div class='green'>" + first_operand + " * " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "/":
      var result = parseFloat(first_operand) / parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " / " + second_operand + " = " + result);
      $(".history").append("<div class='yellow'>" + first_operand + " / " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "^":
      var result = parseFloat(first_operand) ^ parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " ^ " + second_operand + " = " + result);
      $(".history").append("<div class='purple'>" + first_operand + " ^ " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "%":
      var result = parseFloat(first_operand) % parseFloat(second_operand);
      $(".result").html("Result: " + first_operand + " % " + second_operand + " = " + result);
      $(".history").append("<div class='gold'>" + first_operand + " % " + second_operand + " = " + result + del_button + "</div>");
      break;
    case "font+":
      var bigger = parseInt($(".history>div").css("font-size")) * 1.2;
      $(".history>div").css("font-size", bigger);
      break;
    case "font-":
      var smaller = parseInt($(".history>div").css("font-size")) * 0.8;
      $(".history>div").css("font-size", smaller);
  }

  $("body").on("click", ".del", function() {
    $(this).parent().remove()
  });
});
