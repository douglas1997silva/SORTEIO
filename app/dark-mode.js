const tema = document.querySelector('#dark')
tema.addEventListener("click",()=>{
    
    console.log(document.body.classList.toggle('dark-mode'))
})