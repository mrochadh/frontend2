let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let btn = document.querySelector('#btn');
let ol = document.querySelector('ol');


let nomesArray = [];

// carrega o que já tem no storage no momento de load da pagina
let nomesStrStorage = localStorage.getItem('nomes');
// se não estiver vazio
if ( nomesStrStorage !== null ) {
  // picota o a string de nomes do storage em um array
  nomesArray = nomesStrStorage.split('\n');
  console.log(`nomesArray onload: ${nomesArray}`);
  nomesArray.forEach( nome => ol.innerHTML += `<li>${nome}</li>`);
}

btn.addEventListener('click', (event) => {
  event.preventDefault();

  // insere o novo nome no array
  nomesArray.push(nome.value);
  // junta todos os nomes do array em uma única str, separados por quebra de linha (\n)
  let nomesStr = nomesArray.join('\n'); 
  // salva a nova string com todos os nomes no localStorage
  localStorage.setItem('nomes', nomesStr); // dentro do storage, o item se chama 'nomes'

  console.log(nomesArray);
  console.log(nomesStr);
});

/*
let pessoasArray = [];

// pega o que já existe de pessoas no storage
let pessoasStr = localStorage.getItem('pessoas');
// se ja existir alguma pessoa,
if ( pessoasStr !== null ) {
  // picotar a longa string do storage em um array de objetos stringificados
  pessoasArray = pessoasStr.split('\n');

  // pega a pessoa stringificada na posição 0 do array
  let pessoa0Str = pessoasArray[0];
  // parsear o objeto stringificado para criar um objeto manipulavel
  let pessoa0Obj = JSON.parse(pessoa0Str);
  // logando o campo nome do objeto pessoa 0
  console.log(`nome do objeto pessoa 0: ${pessoa0Obj.nome}`);

  console.log(`pessoas do storage onload: ${pessoasArray}`);
} else {
  console.log('nada para carregar do storage');
}

btn.addEventListener('click', (event) => {
  event.preventDefault();

  // cria o objeto literal a partir dos campos do formulário
  let pessoa = {
    nome: nome.value,
    sobrenome: sobrenome.value
  }
  // JSON por favor transforme o obj pessoa em uma string
  let pessoaStr = JSON.stringify(pessoa);

  // inserir o objeto da nova pessoa stringificada no array
  pessoasArray.push(pessoaStr);
  // junta todas as pessoas stringificadas do array em uma unica string
  let storageStr = pessoasArray.join('\n');
  // salva a string no localStorage com o rótulo 'pessoas'
  localStorage.setItem('pessoas', storageStr);

  console.log(storageStr);
});


*/