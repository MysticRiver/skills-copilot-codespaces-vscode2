// Create web server for comment
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, Node.js Web Server!</h1>');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




