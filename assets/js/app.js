document.querySelector('.footer-year').innerText= new Date().getFullYear();

$(document).ready(function() {
    renderLoader(1700);
    $('.toast').toast({
        delay: 6000
    });
    $('.toast').toast('show');
});




function renderLoader(ms) {
    $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
setTimeout(removeLoader, ms); 
}


function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $( "#loadingDiv" ).remove(); //makes page more lightweight 
});  }

    $('#search').click(function () {
        var city = $('#city').val();
        if (city != '') {

            $.ajax({
				url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
                type: "GET",
                datatype: "jsonp",
                success: function (data) {
                    var widget=show(data);
                    // $("#show").html(widget);
                    $(".card-body").html(widget);
                    $("#city").val('');

                }

            });
        }
          else {
            $('#error').html('field cannot be empty');
        }

    });



function show(data) {
    let weatherObj= data.main;
    return  `
    <h4 class="card-title">Location :${data.name}, ${data.sys.country} </h4>
    <p class="card-text">${data.weather[0].description}</p>
    <h5><strong>description</strong>:<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'>${data.weather[0].description}</h5> 
    <h5><strong>temperture</strong>:${weatherObj.temp }  &deg;C</h5> 
    <h5><strong>pressure</strong>:${weatherObj.pressure }  hPa</h5>  
    <h5><strong>humidity</strong>:${weatherObj.humidity}  %</h5> 
    <h5><strong>Min-temp</strong>:${weatherObj.temp_min }  &deg;C</h5> 
    <h5><strong>Max-temp</strong>:${weatherObj.temp_max }  &deg;C</h5> 
    <h5><strong>wind speed</strong>:${data.wind.speed }   M/s</h5> 
    <h5><strong>wind deg</strong>:${data.wind.deg }   &deg;</h5>`
};
