var apiKey = "9feddfec43ca2ca89492bcf77207b126";
var searchBtn = document.querySelector(".searchBtn");
var searchInput = document.querySelector("#searchInput");
var cityName = document.querySelector(".cityName");
var currentDate = document.querySelector(".currentDate");
var weatherIcon = document.querySelector(".weatherIcon");


var getWeatherData = function(location) {

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=9feddfec43ca2ca89492bcf77207b126&units=imperial&appid=';

    fetch(apiUrl)
    .then(function(response) {
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);

        $("")

    })
};


searchBtn.addEventListener("click", function() {
    console.log("click")

    getWeatherData(searchInput.value);
})