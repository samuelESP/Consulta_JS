const express = require('express');
const app = express();

const rotas = express.Router();

let cursosInfo = [
    {'curso' : 'node', "info": "Curso de node"},
    {'curso' : 'Java', "info": "Curso de Java"},
    {'curso' : 'PHP', "info": "Curso de PHP"},
    {'curso' : 'Arduino', "info": "Curso de Arduino"}
]

rotas.get('/', (req, res)=>{
    res.json({ola : "ola para o meu texto"})
})

rotas.get('/:cursoid', (req, res)=>{
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find( i => i.curso == curso)
    if (!cursoI) {
        res.status(404).json({err: "Curso não encontrado", cursoPesquisa : curso})//404 -> not found
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = rotas