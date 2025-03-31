
// init function
const init = () => {
    let weatherButton = document.querySelector("#getWeather");
    weatherButton.addEventListener("click", fetchWeather);
}

// getWeather Function
const getWeather = locationData => {

    let weatherData;

    let url = "http://api.geonames.org/findNearByWeatherJSON?username=kkindrai&lat="
        + locationData[0]
        + "&lng="
        + locationData[1];
        
    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    weatherData = xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);

            // Getting latitude and longitude from the json response
            let temperature = data.weatherObservation.temperature;
            let windspeed   = data.weatherObservation.windSpeed;

            console.log('temp: ' + temperature);
            console.log('wind: ' + windspeed);

            weatherData = [temperature, windspeed];

            displayCurrentWeather(locationData, weatherData);

        }
    }

    xhr.send(null);

    return weatherData;

}


// getLocation Function
const getLocation = zipcode => {
    
    console.log(zipcode);

    let locationData,
        longitude,
        latitude,
        cityName;

    let url = "http://api.geonames.org/postalCodeSearchJSON?username=kkindrai&postalcode="
        + zipcode
        + "&country=US";

    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    locationData = xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);

            // Getting latitude and longitude from the json response
            latitude    = data.postalCodes[0].lat;
            longitude   = data.postalCodes[0].lng;
            cityName   = data.postalCodes[0].placeName;

            console.log(latitude);
            console.log(longitude);

            locationData = [latitude, longitude, cityName];


            // Fetch the weather data off off the location
            getWeather(locationData);


        }
        
    }

    xhr.send(null);
    

    
}



// Controller Function :: fetchWeather
const fetchWeather = () => {

    // Getting Zipcode
    let zipcode = document.querySelector("#zip").value;

    // Getting Location Data // [lat, long, cityName]
    locationData = getLocation(zipcode);

    console.log(locationData);

}

// Display Current Weather Info
const displayCurrentWeather = (locationData, weatherData) => {
    // Get Output References
    let cityOutput  = document.querySelector("#cityName");
    let tempOutput = document.querySelector("#temperature");
    let windOutput  = document.querySelector("#wind");

    // clear everything
    cityOutput.innerHTML = "";
    tempOutput.innerHTML = "";
    windOutput.innerHTML = "";


    // Set the City
    cityOutput.innerHTML = locationData[2];

    // convert temperature to farenheit
    temp = (weatherData[0] * (9/5)) + 32;

    // If temp 34 OR colder...
    if (temp <= 34) {
        // its cold
        cold = document.createElement("img");
        cold.setAttribute('src', 'images/cold.png');
        tempOutput.appendChild(cold);


    } else if (temp >= 83) {
        // its hot
        hot = document.createElement("img");
        hot.setAttribute('src', 'images/hot.png');
        tempOutput.appendChild(hot);

    }

    // Create the temperature & append to tempOutput
    tempInfo = document.createElement("p");

    tempInfo.innerHTML = "Temperature: " 
        + temp 
        + "°F";

    tempOutput.appendChild(tempInfo);




    // The Wind
    wind = weatherData[1];

    if (wind > 15) {
        // Add the Wind Signal
        windPic = document.createElement("img");
        windPic.setAttribute('src', 'images/wind.png');
        windOutput.appendChild(windPic);
    }

    windInfo = document.createElement("p");

    windInfo.innerHTML = "Wind: "
        + wind
        + " MPH";

    windOutput.appendChild(windInfo);


}

window.onload = init;