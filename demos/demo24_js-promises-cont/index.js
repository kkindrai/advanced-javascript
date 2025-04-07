const init = () => {
    // url for geonames api search
    // api.geonames.org/postalCodeSearchJSON?username=kkindrai&postalcode=53704&country=US

    // For the button to work
    // Event Listener Button
    let searchButton = document.querySelector("#getWeather");

    // when click, call method of this name
    searchButton.addEventListener("click", appController); 

    //appController(zip);

    
}







/**
 * getCoordinates(zip)
 * Parse your US Zipcode, get coords
 * @param {*} zip 
 */

const getCoordinates = async (zip) => { // THIS IS AN ASYNC FUNCTION
    // Dynamic URL Information
    const username  = 'kkindrai';
    const country   = 'US';

    // Create the URL
    let url = `http://api.geonames.org/postalCodeSearchJSON?username=${username}&postalcode=${zip}&country=${country}`;

    // 01. Use FETCH (Returns a Promise) (USES AWAIT)
    let zipCodePromise = await fetch(url)
        // 02. .then() {function}
        .then(results => {
            
            // 03. convert the results to json
            return results.json();
        
        }).then(jsonResults => { // // 04. results.json() is also a promise, so another function needed
            
            // 05. log the jsonResults
            //console.log(jsonResults);

            // 06. We want to return an object that has Latitude & Longitude Coordinates
            return {
                "latitude": jsonResults.postalCodes[0].lat,
                "longitude": jsonResults.postalCodes[0].lng
            };
        }).then(coordResults => { // 07. take those coords into ANOTHER FUNCTION
            
            
            // Return this
            return coordResults;

        }).catch(error => { // 08. Error Handling (IMPORTANT)
            console.error(error);
        });

        //console.log(zipCodePromise);
        return zipCodePromise;
}

/**
 * getCoordinateDetails Function
 * 
 * Calls and gets coordinates based on a zipcode
 * logs the coords in the console
 */
const getCoordinateDetails = async (zip) => {
    let coords = await getCoordinates(zip);
    return coords;
}




/**
 * getWeatherInfo(parse coords object)
 * 
 * @param {*} location 
 */
const getWeatherInfo = async (location) => {
    let weatherURL = `http://api.geonames.org/findNearByWeatherJSON?username=kkindrai&lat=${location.latitude}&lng=${location.longitude}`;
    
    // Assemble our Return Statement (the whole shabang)
    
    return await fetch(weatherURL)
        .then(data=>data.json()) // convert to json
        .then(jsonData=> { // do something with it
            //console.log(jsonData);
            
            // We only care about Temp & Windspeed Here
                // So... return those
            
            return {
                "temperature": jsonData.weatherObservation.temperature,
                "windspeed": jsonData.weatherObservation.windSpeed
            };
        })
}



const appController = async () => {

    // Get the zipcode to search
    const zip = document.querySelector("#zip").value;

    
    // Get the Coords
    const coords = await getCoordinateDetails(zip);

    // Use coords to get Weather
    const weatherData = await getWeatherInfo(coords);

    console.log(weatherData);

    // Output our findings
    let output = document.querySelector("#output");

    let resultsToPrint = `<hr />
        <h2>Temperature (Celcius)</h2>
        <p>${weatherData.temperature}°</p>
        <h2>Windspeed</h2>
        <p>${weatherData.windspeed}</p>`;

    output.innerHTML = resultsToPrint;

}

window.onload = init;