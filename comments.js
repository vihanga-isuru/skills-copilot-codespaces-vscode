//create web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/comments') {
        fs.readFile('comments.js', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/style.css') {
        fs.readFile('style.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});