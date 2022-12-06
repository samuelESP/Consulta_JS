//Ele vai fazer uso das minhas exportações

import { multiplicar } from './multiplicar.js';
import { somar } from './somar.js';

//Agora eu posso fazer uso dessas duas functions

let s = multiplicar(5,4);
console.log(s);

let z = somar(1,2);
console.log(z);