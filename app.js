if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function GetCityTemp(cityname, id) 
{
    var key = "12bc968c7cf2cfd90204032dfbf03cc6";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + key + "&units=metric")
    .then(function(resp) {return resp.json()})
    .then(function(data)
    {
        console.log(data);
        if (data.cod == 200) {
            document.getElementById(id).textContent = data.name + ": " + data.main.temp + " C"
        }
    })
    .catch(function(error){ console.log("Error: " + error)});
}

window.onload = function()
{
    const city1 = "Jihlava";
    const city2 = "Větrný Jeníkov";
    var data2 = GetCityTemp(city1, "jihlava");
    var data3 = GetCityTemp(city2, "Jenikov");
};



function getUserCityTemp() 
{
    const input_city = document.getElementById("input_city").value;   
    var data1 = GetCityTemp(input_city, "city");
    

}
