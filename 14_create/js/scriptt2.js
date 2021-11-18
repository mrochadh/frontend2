let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let btn = document.querySelector('#btn');

btn.addEventListener('click', login);

function login(event) {

  event.preventDefault();

  // url para onde enviar o request para criação de recurso (post)
  let url = `https://jsonplaceholder.typicode.com/posts`;

  /*
  // montando o corpo do request com os campos do formulario
  // conforme a API utilizada (ReqRes)
  // json stringificado!
  let post = {
    title: title.value,
    desc: desc.value
  }
  let postStr = JSON.stringify(post);

  // montando o objeto com os parâmetros do request assíncrono:
  // method, headers, body
  let params = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: postStr
  }
  */


  fetch(url, {
    method: 'POST',
    headers: { 'Content-type' : 'application/json' },
    body: JSON.stringify({
      title: title.value,
      desc: desc.value
    })
  })
  .then( resposta => resposta.json() )
  .then( postCadastrado => {
    console.log(postCadastrado);

    document.querySelector('p').innerText = `Post cadastrado com sucesso! Id = ${postCadastrado.id}`;
  });








}


