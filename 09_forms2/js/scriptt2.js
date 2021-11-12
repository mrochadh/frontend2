// pega os elementos
let nome = document.querySelector("#nome");
let cidade = document.querySelector("#cidade");

/* validação de strings, por exemplo:
  não deve estar vazio
  deve conter pelo menos 2 palavras
  não pode conter números */
/*
let textoTeste = "mari rocha arduin9 da silva campos";

if (textoTeste == "") {
  console.log('o texto não deve estar vazio');
} else {
  let arrayPalavras = textoTeste.split(" ");  
  if (arrayPalavras.length < 2) {
    console.log('o texto deve ter pelo menos 2 palavras');
  }
}

// regular expressions / expressões regulares

// /padrão de busca/.test(aSeuTextoASerValidado)
// existe o padrão 'silva' dentro do meu textoTeste?
console.log(`silva: ${/silva/.test(textoTeste)}`);

// metacaracteres: \d = dígito numérico
console.log(`dígito: ${/\d/.test(textoTeste)}`);
*/

// evento para disparar validação a cada alteração do form
nome.addEventListener('change', validaNome);

function validaNome() {
  let erros = [];

  if (nome.value == "") {
    erros.push('o nome não deve estar vazio');
  } else {
    let arrayPalavras = nome.value.split(" ");  
    if (arrayPalavras.length < 2) {
      erros.push('o nome deve conter pelo menos 2 palavras');
    }
  }

  if ( /\d/.test(nome.value) ) {
    erros.push('o nome não deve conter dígitos numéricos')
  }

  if ( erros.length > 0 ) {
    let msgAlert = `Erros no formulário:
    ${erros.join('\n')}`;

    alert(msgAlert);
    nome.focus();
  } else {
    cidade.focus();
  }

}

// pesquisa um padrão 9-9
// console.log(/\d-\d/.test("7-2"));