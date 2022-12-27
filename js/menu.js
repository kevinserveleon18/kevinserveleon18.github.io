const inicioss = document.querySelector('.inicioss')
const menu = document.querySelector('.menu-navegacion')


inicioss.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != inicioss){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})