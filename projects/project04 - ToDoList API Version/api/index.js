/**
 * The Informations
 * 
 * @author kkindrai
 * 28th of April, 2025
 * 
 * Code References:
 * - https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
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


/**
 * Purpose:     Return all JSON Data
 * Route:       /api/data
 */
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

/**
 * Purpose:     Return Data for parsed ID
 * Route:       /api/data/{id}
 */
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




/**
 * ===============================================================================================
 *                       >>>>>> start webserver <<<<<<<
 */

// Starting the WebServer
app.listen(3000, () => {
    console.log("Listening on port 3000");
})