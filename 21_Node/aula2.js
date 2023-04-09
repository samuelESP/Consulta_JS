const http = require('http');

const porta = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    if (req.url == '/') {
        res.write('<h1>Minha requisição está no root</h1>')
    }else if (req.url == "/canal"){
        res.write('<h1>Canal</h1>')
    }else if (req.url == "/curso"){
        res.write('<h1>Cursos</h1>')
    }
    res.end()
})

server.listen(porta, host, () => console.log('Essa é minha função de backlog, que é chamada quando meu servidor é ativo'))