let nome = document.querySelector('#nome');
let btn = document.querySelector('#btn');
let ol = document.querySelector('ol');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  ol.innerHTML = "";

  // API do GitHub para pegar os repositórios de um certo usuário em formato json
  let url = `https://api.github.com/users/${nome.value}/repos`;

  fetch(url) // comunicação assíncrona - envia um GET para a url
    .then( resposta => resposta.json() ) // quando chegar a resposta, objetifique o dado para o formato json
    .then( reposArray => { // quando o objeto json estiver pronto (ele é um array de repositorios!)
      // varrer todo o array, utilizando o campo name de cada item do array (repositorio) para inserir na lista
      reposArray.forEach( (repo) => ol.innerHTML += `<li>${repo.name}</li>` )
     })
    .catch( error => console.log(`houve um erro! ${error}`)); // quando o json estiver pronto, mostre o array de repos no log
    
    });

  /*
  fetch(url)
    .then(   ) // espera a resposta
    .then(   ) // espera o json
    .catch(     ); // trata erros
  */




/*
(async() => {

  const params = {
    "name": "morpheus",
    "job": "leader"
  }

  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });

const data = await response.json();
console.log(data);
})();

*/