const http = require('http')

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'plain/text' });
    res.end('Hello World');
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})