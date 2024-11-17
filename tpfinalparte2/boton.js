class Boton {
  constructor(x, y, ancho, alto, txt, escena) {
    this.x = x;         
    this.y = y;             
    this.ancho = ancho;       
    this.alto = alto;    
    this.txt = txt;         
    this.escena = escena;   
  }

//-------------------   MÉTODOS   ------------------------

dibujar(){
  if (this.sector()){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(this.x, this.y, this.ancho, this.alto);
    
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(this.txt, this.x + (this.ancho / 2), this.y + (this.alto / 2)+5);
    noFill();
    pop()
}

//RETORNA el valor de sector, sectoriza la zona
sector(){
  return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
}

clic(){
  if (this.sector()){
  return this.accion; // Devuelve la acción asociada al botón (cambia de estado)
  }
 return null;
 }
}
