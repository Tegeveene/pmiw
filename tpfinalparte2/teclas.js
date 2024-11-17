class nota{
  constructor(carril, y){
    this.carril = carril;
    this.x = carril*width/8;
    this.y = y;
    this.tam = 100;
    this.vel = 4;
    this.activo = true;
  }
  
//-------------------   MÉTODOS   ------------------------
  moverNota(){
    this.y += this.vel; 
    if(this.y >= height+this.tam){
    this.y = 0-this.tam*random(0,4);
    this.activo = true;
    }
  }
  
  //dibuja las teclas
  dibujarNota(){
  if(this.activo){
  push();
  fill(255);
  rect(this.x, this.y, width/8, this.tam);
  pop();
  }
  this.moverNota();
  }
  
  colision(zonaY, alturaZona){
  return this.y + this.tam > zonaY && this.y < zonaY + alturaZona; //no creo que esto funcione bien
  }
}

//Clase del teclado
class teclas{
  constructor(carril,y){
    this.x = carril * width/8;
    this.y = y;  
  }
  
//-----------metodos---------------

  dibujartecla(){
    push();
    noFill();
    rect(this.x,this.y,width/8,100);
    pop();
  }
  
  
}
