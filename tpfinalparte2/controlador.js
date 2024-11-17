class Controlador {
  constructor() {
    this.estado = 0;
    //this.cJuego();
    this.cFondo();
    this.cBoton();   
  }

//----------------metodos----------------------
//cJuego(){
//  this.juego = new juego();
//}

cFondo(){
  this.fondo = new Fondo();
}
  
cBoton(){
  this.boton = new Boton();
}

// Dibuja la escena actual y sus botones
correr(){
  if(this.estado === 0){
      this.fondo.menu();
      this.boton.botonJugar();
    } else if(this.estado === 1){
      this.fondo.instrucciones();
      this.boton.botonVolver();
      this.boton.botonSiguiente();
    }else if(this.estado === 2){
      //llamamos al juego
      this.juego.dibujar();
    }else if(this.estado === 3){
      this.fondo.victoria();
      this.boton.botonReiniciar();
    }else if(this.estado === 4){
      this.fondo.derrota();
      this.boton.botonReiniciar();
    }
  }

// EL TEMA DE ESTA LÓGICA ES QUE FALLA EN ALGO PERO TENGO
// LA CABEZA TAN QUEMADA QUE YA NO PUEDO PENSAR EN QUE!!
// Maneja los clics del mouse en la escena actual
click(){
sBoton.play();

if(target === 0 && this.boton.colision()){
  this.boton.botonJugar();
}else if(target === 1 && this.boton.colision()){
  this.boton.botonVolver();
  this.boton.botonSiguiente();
}else if(target === 3 && this.boton.colision()){
  this.boton.botonReiniciar();
}else if(target === 4 && this.boton.colision()){
  this.boton.botonReiniciar();
}

}

}
