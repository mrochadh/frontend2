// solicitar a opção do usuário
let usuario = parseInt(prompt("Pedra(1), papel(2) ou tesoura(3)?"));
console.log(typeof(usuario)) // string

// definir a jogada da máquina

// classe Math e seus métodos 

// parseInt() - retorna um int piso do valor de entrada
let maquina = parseInt(Math.random()*3 + 1);
console.log(maquina);

// um switch interno, dentro de cada case de um switch externo

// exemplo de switch
let x = 0;

switch (x) {
  case 0:
    text = "Off";
    break;
  case "1": // o switch considera os tipos!!!!!!!!!!!!!!
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text)



