const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end("Hello world!")
})

server.listen(port, () => console.log('server strarted on port ${port}; '+
        'press Ctrl-C terminate....'))