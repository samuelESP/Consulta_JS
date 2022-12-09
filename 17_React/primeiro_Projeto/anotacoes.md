# Como criar um projeto React?

1. No meu terminai eu vou digitar: *npx create-react-app nome-do-meu-projeto*
 - O npx é um pacote do npm que vai baixar, toda vez que iniciado, o repositório da versão mais recente do REACT. OBS..: Eu posso usar o npm no lugar do npx sem problema algum;

  - Depois disso, vai criar dentro da minha pasta um ambiente do React.
<br><br>


## pastas

<br>

#### node_modules

- Tem todas as dependências e bibliotecas que vão ser usadas no nosso projeto.

<br><br>

#### public 

- Arquivos principais do meu react; 
- Estrutura PWA;
- Tem um arquivo estatico que vai renderizando componentes;
- Cada página da nossa aplicação vai ser praticamente um componente;
- Tem dentro dele o nosso index, que será a nossa página principal, como se fosse o nosso ponto de partida do projeto.

<br><br>

#### src

<br>
- É praticamente a pasta onde ira ficar os nossos arquivos js, css, imgs, etc...

- existe detro dele o arquivo index.js:

  -  Ele é o ponto de entrada do meu React, pois, ele vai ser o primeiro arquivo que o meu react vai pegar e começar a pegar lógica nele;
  - Ele possui o root, que vai apontar para o meu root do index.html;
  - Tudo que tiver no tempo de execução, ele vai redenrizar os arquivos do React, ou seja, os componentes;
  - Ele vai manipular a árvore DOM.

  <br>
- app.js:

  - Dentro dele tem uma função que devolve um HTML; Isso se chama de JSX;
  - Ele só tem algumas diferenças pequenas;
  - Ele também faz a importação da minha logo e do meu CSS. 

<br><br>

#### package.json

- É o arquivo que será usado para saber todas as dependências que se têm no nosso projeto;

- Ao passar do tempo que vamos escalando bibliotecas ele vai adicionando nas dependências.

<br><br>

# OBS:

1. Como padrão do React todo componente deve iniciar como letra maiúsucla. Exemplo:
```JS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
Ele é meio que uma tag nova.

<br><br>

# Como rodar o nosso projeto?

1. Abre o terminal;
2. Entra na pasta do projeto;
3. Coloca no terminal --> npm run start;
4. Ele ja vai rodar o nosso projeto e vai abrir um servidor na web para ele.

<br>

# Componentes de classe

Básicamente tudo dentro do React é um componente;

Existe algumas formas diferentes de criar Componentes:
Até a versão 15 do react só existia componentes de classes, que eram um pouco verboso para fazer isso.

Exemplo de um componente de classe:

```JS
import React, {Component} from "react";
export default class AppClass extend Component{
  constructor(props){
    super(props);
    this.state = {counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
}
```

Toda função que eu tive que eu quise-se usar, eu teria quer fazer o bind dele e tudo mais, deixando o código muito verboso.

Então os debs que usam o React começaram a usar componentes funcionais.

<br>

# Componentes Funcionais
O exemplo abaixo é um componente de classe usado como exemplo, mas, transformado em componente funcional:
 ```JS
 function App() {
  
  const handleClick = () =>{

  }

  return (
    <div className="App">Olá React</div>
    );

 }
 
export default App;
 ```
 Ele nada mais é que uma função retornado um JSX;

 Normalmente a gente tem uma função, e ela é exportada.

 É interessanter saber que os meus componentes funcionais aceitam propriedades, exemplo:

**Dentro do meu index.js**
```JS
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nome="Samuel"/>
  </React.StrictMode>
);
```

**Dentro do meu App.js**
 ```JS
 function App({nome}) {
  return (
    <div className="App">
      Olá React {nome}
    </div>
  );
}

export default App;
```
Basicamente isso seria passar parâmetros para o componente.

<br><br>

# Conceito de components

 A sua ideia principal é centralizar as resposabilidades.

 Geralmente quando estamos criando um novo component se faz:
 1. Cria uma página (exemplo: components) dentro do meu src;

 2. Cria uma pasta detro dessa que acabou de ser criada, para ser o mais específico possível;

 3. Cria um index.js ou o nome que seja desejado, apenas foi criado um index.js pelo motivo de não ficar redundante o PATCH;

 4. Criase uma estrutura do componente: 
 ```JS
 import React from 'react'//Na versão 17 do React não precisa mais fazer esse import

export default function Button({title}) {//Button é o nome do meu componente
  return (
    <button>{title}</button>
  )
}

 ```
 <br>

## props
 Esse meu **({title})** é o que chamamos de props **(props)**, ou seja, propriedade de algum lugar;

 Para eu desestrutura isso pode ser feito:


 ```JS

export default function Button(props) {
const {title} = props
  return (
    <button>{title}</button>
  )
}

 ```
De ambas formas funcionam do mesmo jeito.


5. Agora se pode utilizar esse componente, toda vez que eu quiser usar um button, eu posso utilizar do meu componente.

***Dentro do meu App.js***

```JS

import Button from "./components/Button";

function App({nome}) {
  return (
    <div className="App"> 
    <h1> Olá {nome}</h1>
    <Button title= "entrar"/>
    <Button title='fechar'/>
    <Button title='abrir'/>
    </div>//Como ele não tem contéudo, posso apenas declara-lo aqui, e fechar na mesma tag
  );
}

export default App;
```
No caso acima,  não está realizando um retorna de 2 componentes, mas sim o retorno de um componente que contem outros componentes.

Cada tag é indepedente da outra, elas só utilizam da mesma função como base.

<br>

# OBS:
Eu não posso vim no meu return, e retornar 2 objetos lado a lado, ou seja, duas tags, pois o JSX so retorna um componente


```JS
import Button from "./components/Button";

function App({nome}) {
  return (
    <div className="App">Olá {nome}</div>
    <button>{title}</button>
  );
}

export default App;

```
Mas caso eu precise muito retornar 2 componente eu posso usar uma fragment(<> </>):
```JS
import Button from "./components/Button";

function App({nome}) {
  return (<>
    <div className="App">Olá {nome}</div>
    <button>{title}</button>
    </>
  );
}

export default App;

```
<br>

# Ciclo de vida de um componente

<img src="./imgs/CicloDeVidaDoComponent.jpg" />


O component tem um ciclo de vida bem definido, ele vai ser criado, vai se desenvolver, e por algum motivo ele vai chegar a morrer, seja por troca de tela, entre outras formas.

<br>

0. **constructor**: Ele vai iniciar a construção dele, ele vai levantar tudo que é necessário para ser construído; Antes de ser mostrado para o user ira passar por um processo, que é quando ele vai ser montado, ou seja, se é necessário uma ação antes de ser mostrado para o user.

<br>


1. **getDerivedStateFromProps|componentDidMount|shouldComponentUpdate**: ELe passa por um processo de saber quando é necessário ser atualizado. "Agora eu preciso ser atualizado?" "Ou, mantenho o estado que estou agora?". 

    Ativo|Inativo.

    Ele tem um custo baixo de reenderização.
    Toda vez, por padrão, que um estado é atualizado dentro de um component, ele passa por uma reenderização junto com seus filhos.

<br>

  4. **render**: É o processo de reenderização em si.

<br>

  5. **getSnapShotBeforeUpdate**: Estado dele ficar observando.

<br>

  6. **componentDidUpdate**: Quando eu mudar meu estado ele precisar ser atualizado;
  
  VirtualDOM:
  Tenho um button que está na minha DOM com o estado Ativo;

  Suponhamos que esse estado precisar mudar, ele vai passar para Inativo;

O React primeiramente vai pegar a VitualDOM, vai renderizar esse componente com estado Inativo, e vai comparar com a DOM atual que está no navedar;

Ele vai ver o que mudou nesse componente, de agora para antes, e mudar o que mudou no component;

Se for a mesma coisa ele não vai fazer mudança alguma, ele vai manter o componente que está lá.

  
  7. **componentWillUnmount**: Vai chegar a hora então do componente morrer;

  Eu consigo manipular o que vai acontecer quando esse componente morrer.