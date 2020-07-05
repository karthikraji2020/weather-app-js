$(document).ready(function () {

    $('#search').click(function () {
        var city = $('#city').val();
        if (city != '') {

            $.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
                type: "GET",
                datatype: "jsonp",
                success: function (data) {
                    var widget=show(data);
                    $("#show").html(widget);
                    $("#city").val('');


                }

            });
        }
          else {
            $('#error').html('field cannot be empty');

        }


    });

});



function show(data) {

    return  "<h2><strong> Current weather for </strong>:" + data.name + ","+data.sys.country+" </h2>"+
      "<h3><strong>weather</strong>:" + data.weather[0].main + "</h3>"+
        "<h3><strong>description</strong>:<img src='http://openweathermap.org/img/w/" + data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>"+
        "<h3><strong>temperture</strong>:" + data.main.temp + "&deg;C</h3>"+
        "<h3><strong>pressure</strong>:" + data.main.pressure + "hPa</h3>"+ 
        "<h3><strong>humidity</strong>:" + data.main.humidity+ "%</h3>"+
     "<h3><strong>Min-temp</strong>:" + data.main.temp_min + "&deg;C</h3>"+
        "<h3><strong>Max-temp</strong>:" + data.main.temp_max + "&deg;C</h3>"+
        "<h3><strong>wind speed</strong>:" + data.wind.speed + " M/s</h3>"+
        "<h3><strong>wind deg</strong>:" + data.wind.deg + " &deg;</h3>"

        

};
