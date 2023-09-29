$(document).ready(function(){

const apiKey= "7673cd0fa7f43f706384de60206ca615";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let searchBox =  $(".search input"); 
let searchBtn = $(".search button");
let weatherIcon = $(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == '404'){
        $(".error").show();
        $(".weather").hide();
    }

    var data = await response.json();
    
    $(".city").html(data.name);
    $(".description").html(data.weather[0].description.toUpperCase());
    $(".temp").html(Math.round(data.main.temp)+'℃');
    $(".humidity").html(data.main.humidity + '%') ;
    $(".wind").html(data.wind.speed + ' km/hr');

weatherIcon.attr('src', `images/${data.weather[0].main.toLowerCase()}.png`);
    
$(".weather").show();
$(".error").hide();
}

searchBtn.click(()=>{
    checkWeather(searchBox.val());
})

});