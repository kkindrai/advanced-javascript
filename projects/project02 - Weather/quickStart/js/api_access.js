
// init function
const init = () => {
    let weatherButton = document.querySelector("#getWeather");
    weatherButton.addEventListener("click", getLocation);
}

// getWeather Function
const getWeather = (latitude, longitude) => {
    // url for this: http://api.geonames.org/findNearByWeatherJSON?username=kkindrai&lat=43&lng=-89


}


// getLocation Function
const getLocation = () => {
    let url = "http://api.geonames.org/postalCodeSearchJSON?username=kkindrai&postalcode=53704&country=US";
    let xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);

            // Getting latitude and longitude from the json response
            let latitude = data.postalCodes[0].lat;
            let longitude = data.postalCodes[0].lng;

            console.log(latitude);
            console.log(longitude);

            getWeather(latitude, longitude);

        }
    }

    xhr.send(null);
}


window.onload = init;