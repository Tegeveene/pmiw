class Tecla{
  constructor(carril, y){
    this.carril = carril;
    //calculamos la posX según el carril
    this.x = carril * width / 4 + width / 8; 
    this.y = y;
    this.tam = 80;
    this.vel = 2;
  }
  
//-------------------   MÉTODOS   ------------------------
  //actualiza en tiempo real lo q sucede dentro del método en la clase (? (debe haber una definición más acertada)
  update(){
  this.y += this.vel;
  }
  
  //dibuja las teclas
  dibujar(){
  fill(255);
  rect(this.x, this.y, width/4/2, this.tam);
  }
  
  //la zona se crea cuando se llama en el constructor de 'juego'
  colision(zonaY, alturaZona){
  //retorna el valor de la zona que se demarco para presionar las teclas
  //es como q comprueb si la tecla está en la zona
  return this.y + this.tam > zonaY && this.y < zonaY + alturaZona;
  }
}
