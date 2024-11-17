class Fondo{
 constructor(){
  this.x = 0;
  this.y = 0;
 } 
  
cargarFondo(img){
image(img, 0, 0, width, height);
}

dibujarFondo(imgFondo, escena){
this.cargarFondo(imagenes[imgFondo]);

if(escena === 1){
menu();
}else if(escena === 2){
instrucciones();
}else if(escena === 3){
victoria();
}else if(escena === 4){
derrota();
}
}


menu(){
this.dibujarFondo(3,0);
}

instrucciones(){
this.dibujarFondo(4,1);
}

derrota(){
this.dibujarFondo(1,3);
}

victoria(){
this.dibujarFondo(2,4);
}

}
