const http = require('http'); // require is used to import files in node.js

// function requestListner(req, res) {}
// http.createServer(requestListner);

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);