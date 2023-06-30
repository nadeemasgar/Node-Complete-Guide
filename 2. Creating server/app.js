const http = require('http'); // require is used to import files in node.js

// function requestListner(req, res) {}
// http.createServer(requestListner);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // to hard exist the event loop
});

server.listen(3000);