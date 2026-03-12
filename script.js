function getWeather()
if(city === ""){
alert("Please enter a city name");
return;
}  
{
let city = document.getElementById("city").value;

let apiKey = "df17b375a34cb68094bb956b0089abbb";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ city + 
"&appid=" + apiKey + 
"&units=metric";

fetch(url)
.then(function(response){
return response.json();
})
.then(function(data){

if(data.cod == "404"){
alert("City not found");
return;
}

document.getElementById("temp").innerHTML =
"Temperature: " + data.main.temp + "°C";

document.getElementById("weather").innerHTML =
"Weather: " + data.weather[0].main;

});


}
document.getElementById("city")
.addEventListener("keydown", function(event){
if(event.key === "Enter"){
getWeather();
}
});


