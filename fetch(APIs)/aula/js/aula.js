/* Fetch:
É um meio nativo de requisições APIs com JS;
Podemos usar com Promises ou Async/Await;
Se a requisição for com GET é preicso passar apenas a url do recurso que estamos resgatando da API;
Caso seja outro verbo, podemos configurar as requisições com: method, body e headers;
o fetch é muito utilizado ocm frameworks/libs, como : React, Vue e Angular. 
*/
const url = "https://jsonplaceholder.typicode.com/posts";//URl da API

const loadingElement = document.querySelector("#loading");//loadingElement foi atrelada ao meu ID(#loading) dentro do meu documento index.html;

const postsContainer = document.querySelector("#posts-container");//postsContainer foi atrelada ao meu ID(#posts-container) dentro do meu index.html;

const postPage = document.querySelector("#post");//postPage foi atrelada ao meu ID(#post) no meu documento post.html

const postContainer = document.querySelector("#post-container");//postContainer foi atrelada ao meu ID(#post-container) no meu documento post.html

const commentsContainer = document.querySelector("#comments-container");//commentsContainer foi atrelado ao meu ID(#comments-container) no meu documento post.html



// Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");



// Get all posts
async function getAllPosts() {//Eu vou trabalhar com awaits dentro dessa function, então ela precisa ser async;

    const response = await fetch(url)//Retorna uma promise da minha URL(API)

    console.log(response);//Me retorna o objeto da minha minha fetch.

    const data = await response.json();//vou transforma a resposta do meu fetch em um JSON, que vai retorna em um array de objetos;

    console.log(data);

    loadingElement.classList.add("hide");/*Ele vai pegar o meu ID(#loading) e vai adicionar uma class(.hide), no mesmo elemento. Como padrão o meu elemento vem como display:block, mas a classe hide vai mudar isso para display: none. */

    data.map((post) => {//Vou passar por cada uma dos elementos(post) do array de forma separada

    //Criar um elemento html para inserir cada post
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

//Eu tenho os elementos criados, agora preciso preencher eles com conteúdo


//Todos os posts tem title, body, id e userId
//Vamos usar title e Body
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";//É um texto botão
    link.setAttribute("href", `/fetch(APIs)/aula/post.html?id=${post.id}`);//Vamos setar um atributo no link, como se fosse assim: <a href="/post.html?id=${post.id}" --> esse ${post.id} vai ser modificado para cada id diferente>

//Agora eu ja tenho os textos e os elementos prontos


//Vou adicionar os elementos a minha div e um deles ao 
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

//Agora eu vou colocar essa div ao meu postsContainer(outra div criada na fonto do index.html)
    postsContainer.appendChild(div);

    })

}
if (!postId) {
    getAllPosts();
  } else {
    getPost(postId);
  }




// Get individual post
async function getPost(id) {

    const [responsePost, responseComments] = await Promise.all([
      fetch(`${url}/${id}`),
      fetch(`${url}/${id}/comments`),
    ]);
  
    const dataPost = await responsePost.json();
  
    const dataComments = await responseComments.json();
  
    loadingElement.classList.add("hide");
    postPage.classList.remove("hide");
  
    const title = document.createElement("h1");
    const body = document.createElement("p");
  
    title.innerText = dataPost.title;
    body.innerText = dataPost.body;
  
    postContainer.appendChild(title);
    postContainer.appendChild(body);
  
    dataComments.map((comment) => {
      createComment(comment);
    });
  }
  
  function createComment(comment) {
    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");
  
    email.innerText = comment.email;
    commentBody.innerText = comment.body;
  
    div.appendChild(email);
    div.appendChild(commentBody);
    commentsContainer.appendChild(div);
  }
  



// Insert a comment
async function postComment(comment) {
    const response = await fetch(url, {
      method: "POST",
      body: comment,
      headers: {
        "Content-type": "application/json",
      },
    });
  
    const data = await response.json();
  
    createComment(data);
  }
  
  if (!postId) {
    getAllPosts();
  } else {
    getPost(postId);
  
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let comment = {
        email: emailInput.value,
        body: bodyInput.value,
      };
  
      comment = JSON.stringify(comment);
  
      postComment(comment);
    });
  }