const express = require('express');
const rotas = require('./rotas/rotas')
const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
  res.send('CBF Cursos')
})

app.listen(3000, () => console.log('rodando'))