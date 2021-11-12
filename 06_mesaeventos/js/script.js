//window.onload = alert('página carregada!');

let submit = document.querySelector('#submit');

submit.addEventListener('click', function(evt){
  evt.preventDefault();
});


let p = document.querySelector('p');

p.addEventListener('mouseover', () => {
  p.style.color = 'red';
  console.log('mouseover');
});

p.addEventListener('mouseout', () => {
  p.style.color = 'black';
  console.log('mouseout');
});

let txt = document.querySelector('#txt');

let cont = 0;

txt.addEventListener('keyup', () => {
  cont++;
  document.querySelector('#saida').innerHTML = `${txt.value} <br> ${cont}`;

});

