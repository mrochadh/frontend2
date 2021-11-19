let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

btn.addEventListener('click', login);

// função que executa operações assíncronas
async function login(event) {

  event.preventDefault();

  // url para onde enviar o request
  let url = `https://reqres.in/api/login`;

  // montando o corpo do request com os campos do formulario
  // conforme a API utilizada (ReqRes)
  // json stringificado!
  /*let payload = {
    email: email.value,
    password: password.value
  }
  let payloadStr = JSON.stringify(payload);
  */

  let payloadStr = JSON.stringify({
    email: email.value,
    password: password.value
  })

  // montando o objeto com os parâmetros do request assíncrono:
  // method, headers, body
  let params = {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: payloadStr
  }

  // dispara o fetch com os parâmetros montados e espera
  let response = await fetch(url, params);

  // quando a promessa de resposta se realizar,
  // dispara a transformação em json() e espera
  let data = await response.json();

  // pronto, use o objeto com a resposta como preferir
  // não se esqueça de estudar a estrutura do objeto que sua API retorna!
  console.log(data);

  if (data.error) {
    alert(data.error);
  }

}


