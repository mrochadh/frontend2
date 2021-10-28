// a árvore dos elementos/nós do documento HTML e o DOM

// pegar um elemento
let a = document.querySelector('a');

// alterar conteúdo interno e estilos
a.innerText += ' com confiança!';
a.style.fontSize = '30px';


// funções para manipular atributos de um nó: has, get, set, 
console.log(a.hasAttribute('src')); //false
console.log(a.hasAttribute('href')); //true
console.log(a.getAttribute('href')); // o valor do atributo
a.setAttribute('href', 'http://www.digitalhouse.com/br');
a.removeAttribute('href');

// criar um nó parágrafo
let p = document.createElement('p');
// inserir conteúdo
//p.innerText = "lorem ipsum picsum mussum ipsum";
let txt = document.createTextNode('lorem ipsummm criado com text node');
p.appendChild(txt);
p.style.color = 'red';

// adicionar ao final da página
//document.querySelector('body').appendChild(p);
document.body.appendChild(p);

// remover o parágrafo
//document.body.removeChild(p);


// criar uma lista com ordenação do tipo "a" contendo 3 itens
let lista = document.createElement('ol');
lista.setAttribute('type', 'a');

let item = document.createElement('li');
item.innerText = 'primeiro item da lista';

lista.appendChild(item);

// adicionar ao final da página
document.body.appendChild(lista);


// remover o primeiro item da lista



