results = []

function process_response(data){
  results = data;
  data = JSON.stringify(data, null, 2);
  $("#results").html("<pre>" + data + "</pre>");
}

function findUnicornByName(){

  $.ajax({
    url: "https://blooming-harbor-39056.herokuapp.com/name",
    type: "POST",
    data: {
      name: $("#unicornName").val()
    },
    success: process_response
  })
}

function findUnicornByWeight(){

  $.ajax({
    url: "https://blooming-harbor-39056.herokuapp.com/weight",
    type: "POST",
    data: {
      lowest: $("#lowerWeight").val(),
      highest: $("#higherWeight").val()
    },
    success: process_response
  })
}

function findUnicornByFood(){
  let apple = "unchecked";
  let carrot = "unchecked";

  if ($("#apple").is(":checked"))
    apple = "checked";
  if ($("#carrot").is(":checked"))
    carrot = "checked";

  $.ajax({
    url: "https://blooming-harbor-39056.herokuapp.com/food",
    type: "POST",
    data: {
      "apple": apple,
      "carrot": carrot
    },
    success: process_response
  })
}

function filter(){
  let name = "unchecked";
  let weight = "unchecked";

  if ($("#nameFilter").is(":checked"))
    name = "checked";
  if ($("#wieghtFilter").is(":checked"))
    weight = "checked";

  if (name == "checked" || weight == "checked") {
    filtered = []
    results.map((ob) => {
        if (name == "checked")
          filtered.push(ob["name"])
        if (weight == "checked")
          filtered.push(ob["weight"])
      }
    )
    $("#results").html("<pre>" + filtered + "</pre>")

  } else {
    $("#results").html("<pre>" + JSON.stringify(results, null, 2) + "</pre>")
  }
}

function setUp() {
  $("#findUnicornByName").click(findUnicornByName);
  $("#findUnicornByWeight").click(findUnicornByWeight);
  $("#findUnicornByFood").click(findUnicornByFood);
  $("#filter").click(filter);
}

$(document).ready(setUp)
