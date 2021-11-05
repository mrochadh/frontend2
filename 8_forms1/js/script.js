// pega todos os elementos que tenham name=periodo - apenas os radio buttons
//document.querySelectorAll('input[type=\'radio\']'); // pega pelo atributo type
let periodoS = document.getElementsByName('periodo'); // pela pelo atributo name

// acessando elementos da lista retornada
//console.log(periodoS[0].value, periodoS[0].checked);
//console.log(periodoS[1].value, periodoS[1].checked);

let btn = document.querySelector('#btn');

btn.addEventListener('click', matricula);

function matricula(event) {
  event.preventDefault();

  let period;
  for (periodo of periodoS) {
    if (periodo.checked) {
      period = periodo.value;
      break;
    }
  }
  /*
  for (let i = 0; i < periodoS.length; i++) {
    console.log(periodoS[i].value);
    if (periodoS[i].checked) {
      console.log('marcado!');
      break;
    }
  }
  */

  let cond = document.getElementById('condicoes');
  cond.checked ? condTxt = 'Leu e aceitou' : condTxt = 'Não aceitou, tem que aceitar';

  document.querySelector('p').innerText = `Nome: ${document.querySelector('#nome').value}
  Sobrenome: ${document.querySelector('#sobrenome').value}
  Período: ${period}
  Condições: ${condTxt}`.toUpperCase().replaceAll('A', '@'); // expressões regulares
  // Case SEnSitiVE != case sensitive

}



let txt = "       um texto no meio          outro texto no fim       ";
console.log(txt.trim());

