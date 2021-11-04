let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let cond = document.querySelector('input[type=\'checkbox\']');
let btn = document.querySelector('#btn');
let par = document.querySelector('p');

// pegando todos os inputs que são type=radio
let periodos = document.querySelectorAll('input[type=\'radio\']');
// let periodos = document.getElementsByName('periodo');

// verificando alguns
//console.log(periodos[0].value, periodos[0].checked);
//console.log(periodos[1].value, periodos[1].checked);


//console.log(`condições: ${cond.checked}`);

btn.addEventListener('click', cadastrar);

function cadastrar(event) {
  event.preventDefault(); // impedir que o formulário envie os dados para uma outra rota (backend)

  let periodo;
  for (let i = 0; i < periodos.length; i++) {
    if (periodos[i].checked) {
      periodo = periodos[i].value;
      break;
    }
  }

  let condTxt;
  cond.checked ? condTxt = 'leu e aceitou as condições' : condTxt = 'aceitAaaaaaaaaaaaaaaaa';

  // Mensagem: Matricula efetivada com sucesso!
  // Nome: ??? Sobrenome: ??? Periodo: ??? Condições: Aceitou/Não Aceitou
  par.innerText = `Matrícula efetivada com sucesso!
  Nome: ${nome.value}
  Sobrenome: ${sobrenome.value}
  Período: ${periodo}
  Condições: ${condTxt}`.toLowerCase().replaceAll('A', '@'); // CaSE SENsITive != CASE SENSITIVE

}





