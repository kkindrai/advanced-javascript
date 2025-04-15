const http = require("http");
const fileSystem = require("fs");

let server = http.createServer((req, res) => {
    
    // Read a file, send it to the locally hosted server
    let fileName = "index.html";
    fileSystem.readFile(fileName, (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        res.end();
    })
    
})

server.listen(3000);

console.log("listening on port 3000");