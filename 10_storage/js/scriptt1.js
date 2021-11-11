// executado no load/carregamento da página

let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let btn = document.querySelector('#btn');
let ol = document.querySelector('ol');

// o array para mediar o armazenamento no storage
let pessoasArray = [];

// pega as pessoas do storage
let pessoasStorage = localStorage.getItem('pessoas'); // AQUELA STRINGONAAAAH
// se já houver pessoas no storage
if (pessoasStorage != null) {
  // picota a stringona em um array
  pessoasArray = pessoasStorage.split('\n'); // retorna um array de objetos stringificados

  // para cada pessoa stringificada
  pessoasArray.forEach( pessoaStr => {
    let pessoaObj = JSON.parse(pessoaStr); //gera um objeto manipulável
    ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`; // add na lista
  });
} else { // pessoasStorage é nulo!
  console.log('ninguem no storage');
}


btn.addEventListener('click', event => {
  event.preventDefault(); // não envia pro back-end

  // atualizamos a lista
  ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`;

  // criamos um objeto js com os campos do form
  // manipulável, você consegue acessar os campos
  let pessoaObj = {
    nome: nome.value,
    sobrenome: sobrenome.value
  };
  // stringificar o objeto
  let pessoaStr = JSON.stringify(pessoaObj);
  // adiciona a nova pessoa stringificada no array
  pessoasArray.push(pessoaStr);
  // junta cada elemento do array
  let pessoasStorage = pessoasArray.join('\n'); // uma stringona com todos os objs stringificados juntinhos
  // armazena no storage
  localStorage.setItem('pessoas', pessoasStorage);

});


/*
  // objeto js, manipulável, você consegue acessar os campos
  let pessoa = {
    nome: nome.value,
    sobrenome: sobrenome.value
  };
  // acessando um campo de um objeto JS
  console.log(pessoa);
  console.log(pessoa.nome);

  // stringificar o objeto
  let pessoaStr = JSON.stringify(pessoa);
  console.log(`stringificado: ${pessoaStr}`);
  console.log(`tentando pegar o campo nome do obj stringificado: ${pessoaStr.nome}`);
*/


/*
let nomesArray = [];
// recuperamos o conteúdo do valor nomes em uma string
let nomesStrStorage = localStorage.getItem('nomes');

if ( nomesStrStorage != null ){
  // picota a string em um array
  nomesArray = nomesStrStorage.split(',');
  // circo armado para continuar guardando mais nomes!

  // para cada elemento do array gerado, adiciona um novo item na lista
  nomesArray.forEach( n => ol.innerHTML += `<li>${n}</li>` );
} else {
  console.log('storage vazio!');
}

btn.addEventListener('click', event => {
  event.preventDefault(); // impede o form de ser enviado para o backend
  //pega o valor digitado no campo e acrescenta um item na lista
  ol.innerHTML += `<li>${nome.value}</li>`; 
  // adicionando o valor digitado ao array de nomes
  nomesArray.push(nome.value); 
  // juntando todos os elementos do array em uma string, separados por vírgula
  let nomesStr = nomesArray.join(','); 
  // atualiza o valor nomes no storage com a string gerada pelo join
  localStorage.setItem('nomes', nomesStr);

})
*/
