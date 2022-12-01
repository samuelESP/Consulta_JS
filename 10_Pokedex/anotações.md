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
<br><br><br>

### addEventListener

  Usado para descrever a adição de uma ação no meu documento quando uma a condição pré-definida é realizada:

  ```JS
  const doumento = document.getElementsByClassName('...');
  documento.addEventListener('click',function(){ /*Não necessariamente tem quer ser um click, pode ser uma outra ação*/
});/*Geralmente se usa para chamar uma função, mas pode ser usado para outras coisas*/
  ```
<br><br><br>

 ## Requisição HTTP:
    
URL : https://pokeapi.co/api/v2/pokemon

 - {ip} {path = caminho de indentificação do recruso}; 

```${https://pokeapi.co --> Dominio do ip} ```

```${/api/v2/pokemon --> path/recurso}```

Tipo de solicitação(Request Method):

 - GET | POST | PUT | DELETE| PATCH

  1. GET --> solicita uma representação do recurso especificado. As solicitações que usam GET devem apenas recuperar dados.;

  2. POST --> envia uma entidade para o recurso especificado, geralmente causando uma alteração no estado ou efeitos colaterais no servidor.;

  3. PUT --> substitui todas as representações atuais do recurso de destino pela carga útil da solicitação;

  4. DELETE --> Deletar.

  5. PATCH --> aplica modificações parciais a um recurso.


    toda requisição para um recursoo método diz o que queremos fazer sobre esse recurso.

<br><br><br>

### Query String

A Query Sting funciona como se fosse um *Where* em um banco de dados, ou seja, ela funciona como se fosse um filtro.

Sua Sintaxe sempre vai ser **?Chave=valor**, exemplo:

```https://pokeapi.co/api/v2/pokemon?type=grass&name=i```

*?type=grass&name=i* --> Minha querry string.


***As Duas formas iniciais de passagem de paramêtros é pelo próprio path, e a outra é pela Querry String***
<br><br><br>


### Headers da minha requisição


 Eles são uma espécie de configuração da minha requisição, são metadados.

 - Request Header:

  Configuração da Requisição:

    É aonde eu comunico com o servidor para dizer o que eu aceito, o que, não necessariamente vai ser o que o servidor vai retornar;
    Quem faz esssa configuração de requisição é o cliente, o que no caso é o browser.

 - Response Header:

  Configuração da Resposta:

    O servidor diz o que ele vai devolver;
    Podemos fazer um monte de requisições que aceitam entrada de dados distintos, isso não significa que o servidor vai, com certeza, devolver tudo o que eu pedi.
<br><br><br>


### Body

 * Dependendo do método que eu estou usando eu posso ter um body:

    Um body é um corpo da nossa requisição, possuim dados mais robustos de informação.

 - O GET não possuim body, pois ele precisa trabalhar apenas com o IP, PATH e HEADER(na requisição, na resposta ele ja possui body);
 - Já com o POST o body faz sentido, pois, de certa forma o POST necessita de uma especificação mais robusta para sua aplicação.

No POST| PUT| PATCH faz sentido enviar um body

```JSON
body
{
  "name": "Teste"
}
```
<br><br><br>

### STATUS CODE:

  Indica o que aconteceu com a requisição; 
Ele retorna um número que indica isso.

1. Respostas de informação (100-199);

2. Respostas de sucesso (200-299);

3. Redirecionamentos (300-399);

4. Erros do cliente (400-499);

5. Erros do servidor (500-599).

<br><br><br>


URL: https://pokeapi.co/api/v2/pokemon

IP: https://pokeapi.co/

PATH: api/v2/pokemon

Request Method: POST| DELETE| GET| PUT| PATCH

Querry String: 
```JSON
?type=grass&name=a;
```

RequestHeader: 
```
content-type: application-JSON
```

RequestBody
```JSON
{
  "name": "Teste"
}
```




Response Header:

```JSON
content-type: application/json; 
```

Response Body:
```JSON
{
  "name": "Teste"
}
```