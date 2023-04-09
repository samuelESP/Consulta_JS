const importados = require('./t1.js')

console.log(importados);//{ numerosA: [ 1, 2, 3, 4, 5 ], numerosB: [ 6, 7, 8, 9, 0 ] }
console.log(importados.numerosA);//[ 1, 2, 3, 4, 5 ]
console.log(importados.numerosB);//[ 6, 7, 8, 9, 0 ]