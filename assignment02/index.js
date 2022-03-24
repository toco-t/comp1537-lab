var current_page = 1;
var results_array = null;
var num_of_pages = 1;
var page_size = 3;

$(".button-bar").hide();

$("body").on("click", ".backdrop", function() {

  backdrop_id = $(this).attr('id')
  // console.log(`https://image.tmdb.org/t/p/original/${backdrop_id}`)
  $(".right-column").html("<img src=" + `https://image.tmdb.org/t/p/w500/${backdrop_id}` + "></img");
})


function paginate_menu() {
  $("#numbered-buttons").children().remove();
  var num_of_pages = Math.ceil(results_array.results.length / page_size);
  for (let i = 1; i <= num_of_pages; i++) {
    $("#numbered-buttons").append(`<button id="${i}" class="numbered-button page-button">${i}</button>`)
  }
}

$("#page_size").change(function() {
  page_size = $("#page_size").val();

  paginate_menu();
})

$("body").on("click", ".page-button", function() {
  $(".pre-next").show();

  switch (this.id) {
    case "first":
      current_page = 1
      console.log(current_page);
      films(results_array);
      break;
    case "last":
      current_page = $(".page-button").length - 4
      console.log(current_page);
      films(results_array);
      break;
    case "previous":
      if (current_page > 1) {
        current_page--;
        console.log(current_page);
        films(results_array);
      }
      break;
    case "next":
      if (current_page < $(".page-button").length - 4) {
        current_page++;
        console.log(current_page);
        films(results_array);
      }
      break;
    default:
      current_page = parseInt(this.id)
      console.log(current_page);
      films(results_array);
  }
})

function films(data) {
  $(".left-column").children().remove();
  results_array = data

  for (let i = 0 + (current_page - 1) * page_size; i < current_page * page_size; i++) {
    $(".left-column").append("<h2><span>" + (i + 1) + ". </span>" + results_array.results[i].original_title + "</h2>");
    $(".left-column").append("<p>" + results_array.results[i].overview + "</p>");
    $(".left-column").append("<img src=" + `http://image.tmdb.org/t/p/original/${results_array.results[i].poster_path}` + "></img>");
    $(".left-column").append("<button class='backdrop' id='" + results_array.results[i].backdrop_path + "'>Backdrop</button>");
    $(".left-column").append("<hr>");
  }

  paginate_menu();
}

$("#get_films").click(function() {
  search = $("#titles").val()
  $(".button-bar").show();
  $(".pre-next").hide();

  $.ajax({
    "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${search}`,
    "type": "GET",
    "success": films
  })
})
