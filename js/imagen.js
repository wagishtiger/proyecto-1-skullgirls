const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = documen.querySelector('.imagenes-light');

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen =>{
  imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src')) 
  })
})


contenedorLight.addEventListener('click', (e)=>{
  if(e,target !== imagenesLight){
    contenedorLight.classList.toggle('show')
  imagenesLight.classList.toggle('showImage')
  }
})

const aparecerImagen = (imagen)=>{
  imagenesLight.src = imagen
 contenedorLight.classList.toggle('show')
  imagenesLight.classList.toggle('showImage')
}