const http = require('http');
const url = require('url');
const porta = process.env.PORT

const servidor = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end('Tudo funcionando')//Eu posso retornar no meu end tambem, como se fosse um res.write(...)
})

servidor.listen(porta || 3000, ()=>console.log("Servidor rodando"))