/**
 * Create a Reference to our Logger Class & use it!
 * 
 * 'require' is used to create references to files
 */
const Logger = require("./logger"); // .js is assumed in node as the file extension

let logger = new Logger();


// Using the Emitter vvv (MUST BE BEFORE CALLS)
logger.on("messageLogged", eventArgs => {
    console.log("messageLogged Event Triggered:");
    console.log("------------------------------------------------");
    console.log(eventArgs);
    console.log("------------------------------------------------");
})

// Logging a message (call)
logger.log("This is a test message");





// /**
//  * Creating a localhost webserver on port 3000
//  */

// const http = require("http");

// http.createServer((req, res) => {
//     res.write("Message Displayed on the localhost:3000 site");
//     res.end();
// }).listen(3000);

// console.log("Listening on port 3000");