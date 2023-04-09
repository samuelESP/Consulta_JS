const http = require('http');

const porta = 3000
const host = '127.0.0.1'
const url = require('url')


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.write(req.url)

    const p = url.parse(req.url, true).query;
    res.write('<br/>' + p.nome)
    res.write('<br/>' + p.curso)
    res.end()
})

server.listen(porta, host)