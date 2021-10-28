// permitir ao usuário cadastrar um array de musicos
// diálogo, confirmação ou alerta?

// qntos musicos?
let n = prompt("quantos músicos deseja cadastrar?");

// o nome de cada um?
let musicos = [];

for (let i = 0; i < n; i++){
  //musicos[i] = prompt("nome:");
  musicos.push(prompt("nome:"));
}

console.log(musicos);

// varrer um array facilmente
// para cada item da lista
for (let musico of musicos) {
  alert(musico);
}
// similar ao foreach()


let personagem = {
  nome: 'mari',
  idade: 33,
  genero: 'mulher cis'
}

let personagem2 = {
  nome: 'ana',
  idade: 33,
  genero: 'mulher cis'
}

// um array de objetos
let personagens = [];
personagens.push(personagem);
personagens.push(personagem2);

for (let p of personagens) {
  for (let campo in p) {
    console.log(campo, p[campo]);
  }
}


console.log(personagem.nome);


// varrer um objeto facilmente
for (let campo in personagem) {
  console.log(campo, personagem[campo]); // nome do campo, conteúdo do campo
}

let certeza = confirm("tem certeza???????");

if (certeza === true) {
  console.log("sim, certeza absoluta")
} else {
  alert("tudo bem ter dúvidas")
}


