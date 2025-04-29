/* 
    RESTful API located at /api/courses
    - get       = get all courses
    - post      = create new course
    - put       = modify existing course
    - delete    = get rid of course
*/

/**
 * Code References:
 * - https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
 * 
 */

/**
 * Application Imports
 */
const express = require("express");
const fs = require('fs'); // Enable FileSystem
const app = express();
app.use(express.json()); // Enable app to use json 'middleware'


/**
 * Global Variables
 */
const filePath = 'data/todo.json';




/**
 * ===============================================================================================
 *                       >>>>>> GET <<<<<<<
 */


// GET: Route> /api/data
app.get("/api/data", (req, res) => {
    
    // Read the data JSON file (data/todo.json)  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse the JSON data & post
        try {
            // Success
            const jsonData = JSON.parse(data);
            res.json(jsonData);

        } catch (parseError) {
            // Error
            res.send("Error loading JSON Data...");
            console.error('Error parsing JSON:', parseError);
        }   
    })
})

// GET: Course by ID
//      Route> /api/courses/#
app.get("/api/data/:id", (req, res) => {
    
    // Read the data JSON file (data/todo.json)  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse the JSON data & post
        try {
            // Success
            const jsonData = JSON.parse(data);
            
            let item = jsonData.find(iSearch=>iSearch.id == parseInt(req.params.id));
            if(item) res.json(item);
            else res.json({});

        } catch (parseError) {
            // Error
            res.send("Error loading JSON Data...");
            console.error('Error parsing JSON:', parseError);
        }   
    })
})


// GET: Route> /
// Defining Webserver Pathing
app.get("/", (req, res) => {
    res.send("Hello world");
})





/**
 * ===============================================================================================
 *                       >>>>>> start webserver <<<<<<<
 */

// Starting the WebServer
app.listen(3000, () => {
    console.log("Listening on port 3000");
})