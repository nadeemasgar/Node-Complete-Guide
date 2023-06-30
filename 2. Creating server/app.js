const http = require('http'); // require is used to import files in node.js

// function requestListner(req, res) {}
// http.createServer(requestListner);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // to hard exist the event loop
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);