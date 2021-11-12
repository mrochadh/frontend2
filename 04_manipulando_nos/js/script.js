// a árvore dos elementos/nós do documento HTML e o DOM

console.log(document.querySelector('h2').innerText);

console.log(document.querySelector('div h2').innerText);


// pegar um elemento/nó (node)
let a = document.querySelector('a'); // pega o 1º elemento <a>

// alterar conteúdo interno e estilos
a.innerText += ' com muita confiança!';
a.style.fontSize = '30px';


// funções para manipular atributos de um nó: has, get, set, remove
console.log(a.hasAttribute('href'));

/*
if (a.hasAttribute('href')) {
  console.log('tem ref');
} else {
  console.log('sem ref');
}
*/

a.hasAttribute('href') ? console.log(a.getAttribute('href')) : console.log('sem ref');

a.setAttribute('href', 'http://www.digitalhouse.com/br');

a.removeAttribute('href');


// criar um nó parágrafo
let par = document.createElement('p');
// inserir conteúdo e style
par.innerText = "meu novo parágrafo pelo js";
par.style.color = 'red';
// adicionar ao final da página
document.body.appendChild(par);

// remover o parágrafo
document.body.removeChild(par);

// adicionando outro parágrafo dentro da primeira div
let par2 = document.createElement('p');
par2.innerText = "um outro parágrafo";
par2.style.backgroundColor = 'yellow';
document.querySelector('div').appendChild(par2);

// criar uma lista com ordenação do tipo "a" contendo 3 itens
let lista = document.createElement('ol');
lista.style.listStyleType = 'lower-latin';
//lista.setAttribute('type', 'a');

/*
let item = document.createElement('li');
item.innerText = 'primeiro item';
lista.appendChild(item);
*/

let itensStr = ['comprar pao', 'levar o pantera pra passear', 'dar um mergulho no mar'];

for (let i = 0; i < itensStr.length; i++) {
  let item = document.createElement('li');
  item.innerText = itensStr[i];
  lista.appendChild(item);
}

// adicionar ao final da página
document.body.appendChild(lista);


// remover o segundo item da lista
let itens = document.querySelectorAll('li');
lista.removeChild(itens[1]);


