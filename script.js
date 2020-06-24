$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();
    var list = $(".form-group").append($("<ul></ul>")).find("ul");
    list.append("<li></li>");
    for (var i = 0; i < searchValue.length; i++) list.text(searchValue);
    console.log(searchValue);

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
      },
    });
  }
  $("#search-value .form-group").val(localStorage.getItem("search-value"));
});
