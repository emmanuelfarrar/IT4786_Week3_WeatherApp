var xmlhttp;     //XMLHttpRequest object to comm with remote server   

//anon function that runs on load to call init()
window.onload = function () {
    document.addEventListener("deviceready", init, false);

    init(); //used to run in browser DELETE before running on device or emulator 
}

//on click  call getData() and instantiate xmlhttp as new XMLHttpRequest()
function init(){
    document.getElementById('btnGetForecast').addEventListener('click', getData, false);

    xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange = processResult;
}

//retrieves data from the remote server
function getData() {
    var zip = document.getElementById('zip').value;
    var url =  'http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityWeatherByZIP?ZIP=';

    xmlhttp.open('GET', url, true);
    xmlhttp.sennd
}

function processResult() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        //vars to hold JSON data
        
        var city;
        var state;
        var temperature;
        var relativeHumidity;
        var description;
        var wind;
    
        
        // var theXML = xmlhttp.responseXML.documentElement;
        // var city = theXML.getElementsByTagName('City')[0].firstChild.nodeValue;
        // var state = theXML.getElementsByTagName('State')[0].firstChild.nodeValue;
        // var temperature = theXML.getElementsByTagName('CTemperature')[0].firstChild.nodeValue;
        // var relativeHumidity = theXML.getElementsByTagName('RelativeHumidity')[0].firstChild.nodeValue;
        // var description = theXML.getElementsByTagName('Description')[0].firstChild.nodeValue;
        // var wind = theXML.getElementsByTagName('Wind')[0].firstChild.nodeValue;

        var output =  "Weather For: ";
            output += city + ", " + state;
            output += "<br />Temperature: " + temperature;
            output += "<br />Humidity: " + relativeHumidity;
            output += "<br />Description: " + description;
            output += "<br />Wind: " + wind;

        document.getElementById('result').innerHTML = output;
    }
}