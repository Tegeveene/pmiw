class Boton {
  constructor() {
    this.dibujar();
  }

//-------------------   MÉTODOS   ------------------------

colision(x, y, ancho, alto){
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
//dibuja el MOLDE de los botones q vamos a usar
dibujar(x, y, ancho, alto, txt){
  //highlight
  if (this.colision(x, y, ancho, alto) === true){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(x, y, ancho, alto);
    
    //dibuja el boton
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(txt, x + (ancho / 2), y + (alto / 2)+5);
    noFill();
    pop()
}

botonJugar(){
this.dibujar(280, 420, 85, 40, "JUGAR");
this.colision(280, 420, 85, 40);
}

botonSiguiente(){
this.dibujar(470, 420, 140, 40, "SIGUIENTE");
this.colision(470, 420, 140, 40);
}

botonReiniciar(){
this.dibujar(280, 420, 100, 40, "REINTENTAR");
this.colision(280, 420, 100, 40);
}

botonVolver(){
this.dibujar(20, 420, 90, 40, "VOLVER");
this.colision(20, 420, 90, 40);
}

//click(cx, cy, cAncho, cAlto, target){
//  if(this.colision(cx, cy, cAncho, cAlto)){
//    sBoton.play();
//    this.contador.estado = target;
//  }
//}


}
