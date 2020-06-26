
var city = "Satna"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=34a582787b38790f2a52a452c2a038f6", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp);

    document.getElementById("icon").src=icon;
    document.getElementById("weather").innerHTML=weather;
    document.getElementById("temp").innerHTML=temp+"&deg;"+" C";
});
