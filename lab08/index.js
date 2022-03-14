$("body").on("click", ".backdrop", function(){

  backdrop_id = $(this).attr('id')
  console.log(`https://image.tmdb.org/t/p/original/${backdrop_id}`)
  $(".right-column").html("<img src=" + `https://image.tmdb.org/t/p/w500/${backdrop_id}` + "></img");
})

function films (data) {
  console.log(data)

  for (let i = 0; i < data.results.length; i++) {
    $(".left-column").append("<h2><span>" + (i + 1) + ". </span>" + data.results[i].original_title + "</h2>");
    $(".left-column").append("<p>" + data.results[i].overview + "</p>");
    $(".left-column").append("<img src=" + `http://image.tmdb.org/t/p/original/${data.results[i].poster_path}` + "></img>");
    $(".left-column").append("<button class='backdrop' id='" + data.results[i].backdrop_path + "'>Backdrop</button>");
    $(".left-column").append("<hr>");
  }
}

$("#get_films").click(function(){

  search = $("#titles").val()

  $.ajax({
    "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${search}`,
    "type": "GET",
    "success": films
  })
})
