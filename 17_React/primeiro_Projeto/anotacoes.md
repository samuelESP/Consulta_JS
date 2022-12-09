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

# Como rodar o nosso projeto?

1. Abre o terminal;
2. Entra na pasta do projeto;
3. Coloca no terminal --> npm run start;
4. Ele ja vai rodar o nosso projeto e vai abrir um servidor na web para ele.



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
