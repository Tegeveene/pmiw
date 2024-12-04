class Fondo{
 constructor(){
    
 } 
  
cargarFondo(img){
image(img, 0, 0, width, height);
}

dibujarFondo(imgFondo){
this.cargarFondo(imagenes[imgFondo]); //esto cambia dependiendo el valor de estado
}

}
