// alterar texto do h1
// innerHTML x innerText
let titulo = document.querySelector('h1');
//titulo.innerHTML = '<i>Novo título</i>';


// acrescentar texto ao h1
// titulo.innerText += ' <i>Demais!</i>';


// pegar um texto do prompt para alterar o h1
// usando template strings
// let novoTitulo = prompt('Insira o novo título:');
// titulo.innerText = `O novo título é ${novoTitulo}`;


// alterar cor de fundo do body
let body = document.querySelector('body');
body.style.backgroundColor = '#333';


// alterar cor de fundo E cor de texto do primeiro item de lista
let item = document.querySelector('li');
// item.style.backgroundColor = '#000';
// item.style.color = '#FFF';

// e se quisermos alterar também margin, padding, border, font etc.....
//item.classList.add('dark');


// agora para todos os itens da lista
let itens = document.querySelectorAll('li');
for (let item of itens) {
  // item.classList.add('dark');
}



// SPOILER - associando as alterações ao onclick

function colorChange(){
  body.classList.toggle('dark');

  /* o mesmo que:
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }
  */
}

titulo.onclick = colorChange;

