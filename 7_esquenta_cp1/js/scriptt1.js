// selecionar o elemento do campo 1
let field1 = document.querySelector('#field1');

// selecionar o elemento do botão
let btn = document.querySelector('#btn');

// atribuir um event listener
btn.addEventListener('click', inserirLista);

// selecionar o valor digitado no campo 1 pela pessoa usuária
// criar um novo elemento li
// inserir o valor digitado no interior da li
// atribuir a li como filha da ol
function inserirLista(event) {
  event.preventDefault();

  let li = document.createElement('li');
  li.innerText = field1.value;
  document.querySelector('ol').appendChild(li);

  let img = document.createElement('img');
  img.setAttribute('src', field1.value);
  document.querySelector('main').appendChild(img);


}