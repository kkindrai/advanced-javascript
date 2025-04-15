const EventEmitter = require("events"); // https://nodejs.org/api/events.html#class-eventemitter

// Creating a Logger Class Definition
class Logger extends EventEmitter {
    
    // Log Function
    log(message) {
        console.log(message);
        this.emit("messageLogged", {"message": message});
    }

}


// Export this as a Class (node syntax)
module.exports = Logger;