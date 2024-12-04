class Vida{
  constructor(x, y, ancho, alto){
    this.x = x; 
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.vidaMax = 100; 
  }
  
//-------------------   MÉTODOS   ------------------------
  //dibuja la barra
  dibujar(){
    //barra roja (fondo de la barra)
  fill(255, 0, 0);
  rect(this.x, this.y, this.ancho, this.alto);
  fill(0, 255, 0);
  rect(this.x, this.y, this.ancho * this.vidaMax/100, this.alto);
  //se dibuja una barra con el ancho proporcional a la vida máxima
  }
  
  //actualiza el contenido de la barra
  bajaVida(c){
     this.vidaMax -= c; // la vida se reduce según el valor del parametro del fokin método
  }
}
