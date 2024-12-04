class Nota{
  constructor(carril, y){
    this.carril = carril; //variable que sostiene el carril actual para modificar la posicion de elementos en base a este
    this.x = carril*width/4; //calcula la posicion precisa del carril donde se encuentra en base al carril, usado para el dibujo 
    this.y = y; //posicion y, para mostrar... la posicion y
    this.tam = 100; //el tam de cada tecla, para poder modificarlo mas facilmente
    this.vel = 4; // la velocidad de cada tecla, lo mismo de arriba
    this.activo = false; //para desactivar la colision de la tecla una vez se presiona una vez
  }
  
//-------------------   MÉTODOS   ------------------------
//se encarga del movimiento particular de la tecla
moverNota(){
  this.y = this.y + this.vel;
  //resetea la posicion de la tecla, es mas facil colocarla aca que en su propia funcion
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
  rect(this.x, this.y, width/4, this.tam);
  pop();
  }
  //esto hace que se mueva siempre que se este dibujando
  this.moverNota();
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Clase del teclado
class teclas{
  constructor(carril,y){
    this.x = carril * width/4;
    this.y = y;  
  }
  
//-----------metodos---------------

  dibujartecla(){
    push();
    noFill();
    rect(this.x,this.y,width/4,100);
    pop();
  }
  
  
}
