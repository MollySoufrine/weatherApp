$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $(this).siblings("#search-value").val();
    var city = $(this).parent().attr("id");
    localStorage.setItem(searchValue, city);
    // console.log(searchValue);
    // console.log(city);

    // clear input box
    $("#search-value").val("");
    //Search Value is the City name
    searchWeather(searchValue);
  });

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue +
        "&appid=" +
        /* your API key here */ "2885f475462b7d71f9a31bb75ce8a58a" +
        "&units=imperial",
      dataType: "json",
      success: function (data) {
        console.log(data);
        var data = data;

        // Data is weather info back from the API
        var weather = $("<p>");
        weather.text(data.weather);

        var main = $("<p>");
        main.text(data.main);

        $(".form-group").append(weather, main);
      },
    });
  }
  $("#search-value .form-group").val(localStorage.getItem("search-value"));
});
