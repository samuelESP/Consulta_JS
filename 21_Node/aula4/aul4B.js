const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res)=> {
    fs.appendFile('teste.txt',"Esse vai ser o dado que ira ser inserido no final do meu arquivo",(err) =>{
        if(err) throw err
        console.log("Meu arquivo estás funcionando");
        res.end()
    })
})

server.listen(3000, () => {console.log("Servidor rodando")})