// selecionando elementos
let div = document.querySelector('.main');
let colorBtn = document.querySelector('button');
let loginBtn = document.querySelector('#login');
let sumBtn = document.querySelector('#sum');

// define a callBack pro evento
function colorChange(event) {
  console.log(`colorChange tipo do evento: ${event.type}`);
  div.classList.toggle('dark'); // se tem classe dark, remove; se não tem, adiciona
  colorBtn.classList.toggle('light');
  loginBtn.classList.toggle('light');
  sumBtn.classList.toggle('light');
}

// configurando a callBack com propriedade onclick
colorBtn.onclick = colorChange;
colorBtn.onclick = () => {console.log('minha segunda callback pelo onclick')}; // sobrescreve a função anterior

// configurando a callBack com o addEventListener()
colorBtn.addEventListener('click', colorChange);

colorBtn.addEventListener('click', function(e){
  console.log('com addEventListener, vc pode adicionar várias callBacks para o mesmo evento de um mesmo elemento!!!!');
  console.log(`addEventListener tipo do evento: ${e.type}`);
});

// taca arrow function!
colorBtn.addEventListener('', (e) => {
  console.log('agora outra callBack criada com arrow function');
  console.log(`tipo do evento: ${e.type}`);
});


// disparando a soma sem enviar pro backend - preventDefault()
sumBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  // realizando a soma direto no frontend
  let x = +document.querySelector('#x').value; // como se fizéssemos o parseInt
  let y = parseInt(document.querySelector('#y').value);
  
  let p = document.createElement('p');
  p.innerText = x + y;
  document.querySelector('#sum-form').appendChild(p);
})

// keydown, keypress e keyup
let inputx = document.querySelector('#x');
let inputy = document.querySelector('#y');

inputx.addEventListener('keydown', (evt) => { console.log(evt.type, evt.key)});
// NÃO DISPARADO POR CTRL, ALT, SHIFT ETC
inputx.addEventListener('keypress', (evt) => { console.log(evt.type, evt.key)}); 
// para pegar todo o conteúdo do campo, INCLUSIVE a última tecla pressionada
inputx.addEventListener('keyup', (evt) => { console.log(evt.type, evt.key)}); 


inputx.addEventListener('keyup', () => {
  let x = document.querySelector('#x').value; //pego todo o conteúdo do campo x
  document.querySelector('p').innerText = x.length;
});



// mouseout x mouseleave
document.querySelector('#outerBox').addEventListener('mouseout' , (evt) => {console.log(`outerbox ${evt.type}`)});
document.querySelector('#innerBox').addEventListener('mouseout' , (evt) => {console.log(`innerbox ${evt.type}`)});

document.querySelector('#outerBox').addEventListener('mouseleave' , (evt) => {console.log(`outerbox ${evt.type}`)});
document.querySelector('#innerBox').addEventListener('mouseleave' , (evt) => {console.log(`innerbox ${evt.type}`)});
