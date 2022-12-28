//Listas
const listas=[];
//.push()  --> adiciona na lista, onde o primeiro lugar vai ser ocupado pelo primeiro item a ser adicionada, no caso "3"
listas.push(3,2,1);
console.log(listas);

//.Pop() --> Retira o último elemento da lista
listas.pop();//Ele retira o ultimo item da lista
console.log(listas);

//.shift() --> retira o primeiro item da lista
listas.shift(); // Ele vai retirar o numero "3"
console.log(listas);

//.unshift()  --> Adicionar um item na primeira colocação
listas.unshift(10);
console.log(listas); 

//.reverse() --> ele vai virar a lista do contrário
listas.reverse();
console.log(listas);