/*Um Conjunto (set)é uma coleção de valores únicos. Ao contrário de um Map, um Conjunto (set)é conceitualmente mais parecido com uma Matriz do que um com um Objeto, já que é uma lista de valores e não pares chave-valor. No entanto, o Conjunto (set)não é um substituto da Matriz, mas sim um suplemento que provém suporte adicional para se trabalhar com dados duplicados.

Você pode inicializar os Conjuntos(set) com a sintaxe new Set(). */
const set = new Set();
console.log(set);//Set(0) {}

//---------------------------------------------------------------------//


//Para adicionar:
// Add items to a Set
set.add('Beethoven');
set.add('Mozart');
set.add('Chopin');
console.log(set);//Set(3) { 'Beethoven', 'Mozart', 'Chopin' }


//---------------------------------------------------------------------//


//Se pode iniciar logo na declaração como o map;
// Initialize a Set from an Array
const declarado = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
console.log(declarado);//Set(3) { 'Beethoven', 'Mozart', 'Chopin' } --> Me retorna 3 pois ele repete "Chopin", o que não é permitido dentro de um Set().


//---------------------------------------------------------------------//

//Para transformar ele em uma matriz se usa: const arr = [...set];
const arr = [...declarado];//Rest
console.log(arr);//[ 'Beethoven', 'Mozart', 'Chopin' ]

//---------------------------------------------------------------------//

//Possui o delete e o clear igual ao map;

//---------------------------------------------------------------------//

const teste = new Set(['Beethoven', 'Mozart', 'Chopin']);

