$("button").click(function(){
  var radius = $("input").val()
  var pi = 3.141592
  var surface_area = radius ** 2 * pi
  alert("The surface area of this ciucle is:\n" + surface_area + " (cm^2)")
});
