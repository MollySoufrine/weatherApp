$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();
    var list = $(".list-group").append(
      "<li class='list-group-item .active'>" + searchValue + "</li>"
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
        var i = [];
        var forecast = $(".list-group-horizontal-md");
        forecast.empty();
        for (i = 0; i < 5; i++) {
          var currentWeather = forecast.append(
            "<li class = 'list-group-item'><div>" +
              moment().add(i, "day").format("ddd, MMM DD") +
              "</div><div><p> this is the temp " +
              data.list[i].main.temp +
              "</p></div><div><p> this is the humidity " +
              data.list[i].main.humidity +
              "</p></div></li>"
          );
        }
      },
    });
  }
});
