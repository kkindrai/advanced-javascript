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
const cors = require('cors');   // Installing CORS
const fs = require('fs');       // Enable FileSystem
const app = express();

// Enable app use of packages (express & cors)
app.use(express.json());      
app.use(cors());               

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
 *                       >>>>>> POST <<<<<<<
 */

/**
 * Purpose:     Add new item to todo list
 * Route:       /api/data
 * Body Input:  {"description": "your new task here"}
 */
app.post("/api/data/", (req, res) => {
    
    // Read the data JSON file (data/todo.json)  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse the JSON data
        try {
            // Success
            const jsonData = JSON.parse(data);
            
            // Create the new item object & push it
            jsonData.push({
                id: jsonData[jsonData.length - 1].id + 1, // get length of array, get id, add one, this is new id
                description: req.body.description
            });
            
            // Update the .json File
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

            // Respond with the newly added dataset
            res.json(jsonData);

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