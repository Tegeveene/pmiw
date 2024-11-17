class Nota{
  constructor(carril, y){
    this.carril = carril;
    //calculamos la posX según el carril
    this.x = carril * width / 4 + width / 8; //esto funciona?
    this.y = y;
    this.tam = 80;
    this.vel = 2;
    this.activo = false;
  }
  
//-------------------   MÉTODOS   ------------------------
  mover(){
   if(this.activo === true){
    this.y += this.vel;
   }  
  }
  
  //dibuja las teclas
  dibujar(){
  push();
  fill(255);
  rect(this.x, this.y, width/4/2, this.tam);
  pop();
  }
  
  //la zona se crea cuando se llama en el constructor de 'juego'
  colision(zonaY, alturaZona){
  //retorna el valor de la zona que se demarco para presionar las teclas
  //es como q comprueb si la tecla está en la zona
  return this.y + this.tam > zonaY && this.y < zonaY + alturaZona; //no creo que esto funcione bien
  }
}

//Clase del teclado
class teclado{
  constructor(){
    this.tamano = 4;
    this.cantidad = 0;
    this.teclascolor = 0;
  }
  
}
