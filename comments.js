//create web server
//create a web server that listens on port 3000
//create a route that accepts POST requests to /comments
//when a POST request is made, the server should respond with a 201 status code and the request body

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/comments') {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    req.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});