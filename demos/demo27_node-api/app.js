/* 
    RESTful API located at /api/courses
    - get       = get all courses
    - post      = create new course
    - put       = modify existing course
    - delete    = get rid of course
*/


const express = require("express");
const app = express();

// Enable app to use json 'middleware'
app.use(express.json());

// Creating a course example
let courses = [
    {"id": 1, "title": "Test Class 01"},
    {"id": 2, "title": "Test Class 02"},
    {"id": 3, "title": "Test Class 03"}
]


/**
 * ===============================================================================================
 *                       >>>>>> GET <<<<<<<
 */


// GET: Route> /api/courses
app.get("/api/courses", (req, res) => {
    res.json(courses);
})

// GET: Course by ID
//      Route> /api/courses/#
app.get("/api/courses/:id", (req, res) => {
    let course = courses.find(cSearch=>cSearch.id == parseInt(req.params.id));
    if(course) res.json(course);
    else res.json({});
})


// GET: Route> /
// Defining Webserver Pathing
app.get("/", (req, res) => {
    res.send("Hello world");
})


/**
 * ===============================================================================================
 *                       >>>>>> POST <<<<<<<
 */

app.post("/api/courses/", (req, res) => {
    let newCourse = {
        "id": courses.length + 1, // not recommended
        "title": req.body.title
    }

    // add the new course
    courses.push(newCourse);

    // response with the newly added course
    res.json(newCourse);
})


/**
 * ===============================================================================================
 *                       >>>>>> DELETE <<<<<<<
 */

app.delete("/api/courses/:id", (req, res) => {
    // 1. get the course id
    let courseToRemove = courses.find(cSearch => cSearch.id == parseInt(req.params.id));
    
    // 2. find that course based on its index
    let index = courses.indexOf(courseToRemove);
    
    // 3. remove that result from the array
    courses.splice(index, 1);

    // 4. confirm via response
    res.json(courseToRemove);
})



/**
 * ===============================================================================================
 *                       >>>>>> PUT (update) <<<<<<<
 */

// send the id to update via link
//      send the title object via a POST JSON object (postman)
app.put("/api/courses/:id", (req, res) => {
    
    // 1. get the id
    let courseToUpdate = courses.find(cSearch => cSearch.id == parseInt(req.params.id));

    // 2. update the title based on the body info
    courseToUpdate.title = req.body.title;

    // 3. Send Confirmation
    res.json(courseToUpdate);

})

/**
 * ===============================================================================================
 *                       >>>>>> start webserver <<<<<<<
 */

// Starting the WebServer
app.listen(3000, () => {
    console.log("Listening on port 3000");
})