const express = require("express");
const app = express();

// Enable app to use json 'middleware'
app.use(express.json());

/**
 * ================================================================================================
 *              CREATE THE `localhost:3000/` PATH
 * 
 * This will pull the index.html page and host it to the server
 */

app.get("/", (req, res) => {
    
    // Define the fileSystem reference
    const fileSystem = require("fs");

    // Read a file, send it to the locally hosted server
    let fileName = "index.html";
    fileSystem.readFile(fileName, (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        res.end();
    })
})



/**
 * ================================================================================================
 *           CREATE THE `localhost:3000/displayJson` PATH
 * 
 * This will create a json object and send it to the page for api use
 */

let jsonObject = [
    {
        "id": 1,
        "song": "Toloache",
        "artist": "Carmen María",
        "url": "https://open.spotify.com/intl-es/track/3TZXxUcs1rFWTxR9BHNVoJ?si=03798783fd314455"
    },
    {
        "id": 2,
        "song": "Baby Please",
        "artist": "Ivan Cornejo",
        "url": "https://open.spotify.com/intl-es/track/71jWljGDgSEpsa1LA5LHSg?si=42483004d22c42e3"
    }
]

app.get("/displayJson", (req, res) => {
    res.json(jsonObject);
})


/**
 * ================================================================================================
 *            CREATE THE `localhost:3000/helloWorld` PATH
 * 
 * This will just output 'Hello World'
 */
app.get("/helloWorld", (req, res) => {
    res.send("<h1>Hello world</h1>");
})



/**
 * ===============================================================================================
 *                       >>>>>> start webserver <<<<<<<
 */

// Starting the WebServer
app.listen(3000, () => {
    console.log("Listening on port 3000");
})