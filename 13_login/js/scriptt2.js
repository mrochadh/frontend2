let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

btn.addEventListener('click', login);

async function login(event) {

  event.preventDefault();

  // url para onde enviar o request
  let url = `https://reqres.in/api/login`;

  // montando o corpo do request com os campos do formulario
  // conforme a API utilizada (ReqRes)
  // json stringificado!
  let requestBody = {
    email: email.value,
    password: password.value
  }
  let requestBodyStr = JSON.stringify(requestBody);

  // montando o objeto com os parâmetros do request assíncrono:
  // method, headers, body
  let params = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBodyStr
  }

  // dispara o fetch com os parâmetros montados e espera
  let response = await fetch(url, params);

  // quando a promessa de resposta se realizar,
  // dispara a transformação em json() e espera
  let data = await response.json();

  // pronto, use o objeto com a resposta como preferir
  // não se esqueça de estudar a estrutura do objeto que sua API retorna!
  console.log(data);

  if (data.error) { // se existe o campo error dentro da resposta
    alert(data.error);
  } else {
    document.querySelector('#perfil').innerText = `Bem-vinda, ${email.value}`;
  }

}


