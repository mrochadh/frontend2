// selecionar o primeiro h1
let titulo = document.querySelector('h1');
console.log(titulo);


// selecionar TODOS os h2
let subtitulos = document.querySelectorAll('h2');
console.log(subtitulos);

/*
for (let sub of subtitulos) {
  console.log(sub);
}
*/

// arrow function
subtitulos.forEach((elemento) => {
  console.log(elemento);
});

// selecionar o elemento com classe 'conteudo'
console.log(document.querySelector('.conteudo'));

// selecionar o elemento com id 'diferente'
console.log(document.querySelector('#diferente'))

// selectionar o h1 que está dentro da section
console.log(document.querySelector("section h1"))

// usar o prompt para alterar o conteúdo de um elemento selecionado
document.querySelector("section h1").innerHTML = prompt("Insira o novo título: ");

