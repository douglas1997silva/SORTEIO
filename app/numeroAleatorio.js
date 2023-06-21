const numeroAleatorio = document.querySelector('#numero');
const input = document.querySelector("#click");

const numero = 100;


 //const sorteia  = numeroAleatorio.innerHTML = 


 input.addEventListener('click',()=>{
     
     numeroAleatorio.innerHTML = parseInt(Math.random() * numero + 1 )

 })