function weather_info(data) {
  // console.log(data);

  var icon = data.weather[0].icon;

  $("#temp").html(data.main.temp);
  $("#description").html(data.weather[0].description);
  $("#weather_icon").attr("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);

}

function get_weather() {

  var city = $("#city_name").val();

  $.ajax({
    "url": `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c62599695574f7b77361e837445d3de&unit=metric`,
    "type": "GET",
    "success": weather_info
  })
}

function setup() {
  $('#get_temp').click(get_weather);
}

$(document).ready(setup);
