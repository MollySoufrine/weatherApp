$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();
    var list = $(".list-group").append(
      "<li class='list-group-item'>" + searchValue + "</li>"
    );
    console.log("this is my city " + searchValue);

    // clear input box
    $("#search-value").val("");
    //Search Value is the City name
    searchWeather(searchValue);
  });

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        searchValue +
        "&appid=" +
        /* your API key here */ "2885f475462b7d71f9a31bb75ce8a58a" +
        "&units=imperial",
      dataType: "json",
      success: function (data) {
        var data = data;
        console.log(data);
        var currentWeather = $("<p></p>");
        var i = [];
        for (i = 0; i < 5; i++) {
          currentWeather.text(data.list[i].main.temp);
          $(".list-group").append("<p class = 'cW'>" + currentWeather + "</p>");
        }
      },
    });
  }
});
