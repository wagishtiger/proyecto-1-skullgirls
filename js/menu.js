const menu = document.querySelector('.menu'); 
const MENU = document.querySelector('.menu-navegacion'); 

//console.log(MENU)
//console.log(menu)


menu.addEventListener('click', ()=>{
  MENU.classList.toggle("spread")
})


window.addEventListener('click', e=>{
  if(MENU.classList.contains('spread')&& e.target != MENU && e.target != menu ){
    
     
    MENU.classList.toggle("spread")
    
  }
})