const express = require('express');
const app = express()
const porta = process.env.PORT

app.get('/',(req, res)=> {
    res.send('Aqui eu vou mandar a resposta')
})

app.get('/canal', (req, res) =>{
    res.json({canal : 'Seja Bem Vindo'})
})

app.listen(porta || 3000, () => console.log('servidor rodando'))