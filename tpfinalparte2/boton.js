class Boton {
  constructor() {
  }

//-------------------   MÉTODOS   ------------------------
colision(x, y, ancho, alto){
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

//MOLDE de los botones q vamos a usar
dibujar(x, y, ancho, alto, txt){
  //highlight (acá se pinta nomas)
  if (this.colision(x, y, ancho, alto) === true){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(x, y, ancho, alto);
    
    //dibuja el boton
    push();
    textAlign(CENTER);
    fill(255,255,255);
    text(txt, x + (ancho / 2), y + (alto / 2)+5);
    noFill();
    pop();
}

}
