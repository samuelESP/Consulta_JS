/*Desafio  
Conte quantos quadrado perfeitos existe entre 1 é N
 */

let n = 500

let arr = [];

var isSquare = function(n){
    for (let i = 1; i <= n; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            arr.push([i]);
        }
    }
        
    }
    

isSquare(n)
console.log(arr.length);