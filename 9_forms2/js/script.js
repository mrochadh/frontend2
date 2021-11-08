/*
let texto = "Como vai esta segunda-feira?";

let palavras = texto.split(" ");

console.log(palavras);

console.log(`total de palavras: ${palavras.length}`);

console.log(palavras[3].length);

// for / forEach() / for..of
// verificar o comprimento de cada palavra do array

// regular expression / expressões regulares
// procurando o padrão /mari/ dentro da variável 'texto'
// retorna true ou false
let encontrou = /mari/.test(texto);
console.log(`encontrou mari: ${encontrou}`);

// procurando um dígito numérico
encontrou = /\d/.test(texto);
//encontrou = /[0-9]/.test(texto); //tem o mesmo efeito que o \d
console.log(`encontrou número: ${encontrou}`);
*/


let nome = document.querySelector("#nome");

// ao soltar uma tecla no campo nome, dispara a função validaForm()
nome.addEventListener('keyup', validaForm);

function validaForm() {
  // array que vai conter todos os erros encontrados
  let erros = [];

  // se o campo está vazio
  if (nome.value == "") {
    erros.push('o nome não deve estar vazio'); // insere nova mensagem na lista de erros
  }

  // contagem de palavras (no mínimo 2)
  let palavras = nome.value.split(" ");
  if (palavras.length < 2) {
    erros.push('precisa ter pelo menos 2 palavras');
  }

  // se houver dígitos numéricos no conteúdo do campo
  let encontrou = /\d/.test(nome.value);
  if (encontrou) {
    erros.push('o nome não pode conter dígitos numéricos');
  }

  // se encontramos algum erro (ou seja, o tamanho do array é maior que 0)
  if (erros.length > 0) {
    console.log(`todos os erros: ${erros}`);
  }
  

}


