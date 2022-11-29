## HTML:
### Document
 
  é usado dentro do JS, com o intutido de apontar para algo(tags) dentro do HTML. Exixte diversar maneira de apontar para um documento, ex:
```JS
- document.getElementsByClassName('...');

- document.getElementById('...');

- document.getElementsByName('...');

- document.getElementsByTagName('...');
```

  É comum atrelar uma variável ao documento, para ficar mais fácil de manipular:

```JS
   const documento = document.getElementById('...'); 
``` 


### addEventListener

  Usado para descrever a adição de uma ação no meu documento quando uma a condição pré-definida é realizada:

  ```JS
  const doumento = document.getElementsByClassName('...');
  documento.addEventListener('click',function(){ /*Não necessariamente tem quer ser um click, pode ser uma outra ação*/
});/*Geralmente se usa para chamar uma função, mas pode ser usado para outras coisas*/
  ```
