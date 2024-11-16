class Vida{
  constructor(x, y, width, height){
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.vidaMax = 100; 
  }
  
//-------------------   MÉTODOS   ------------------------
  dibujar(){
    //barra roja (fondo de la barra)
  fill(255, 0, 0);
  rect(this.x, this.y, this.width, this.height);
  fill(0, 255, 0);
  rect(this.x, this.y, this.width * this.vidaMax/100, this.height);
  //se dibuja una barra con el ancho proporcional a la vida máxima
  }
  
  bajaVida(c){
     this.vidaMax -= c; // la vida se reduce según el valor del parametro del fokin método
  if (this.vidaMax < 0) {
    this.vidaMax = 0; // acá nos aseguramos que la vida no sea menor a 0
    }
  }
}
