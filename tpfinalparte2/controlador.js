class Controlador {
  constructor(estadoActual) {
    this.estado = estadoActual;
    this.cJuego = new Juego();
    this.cFondo = new Fondo();
    this.cBoton = new Boton(estadoActual);
    
  }

//----------------metodos----------------------

//este método s usa en el método "click()"
controlarEstado(cambioEst){
  this.estado = cambioEst;
}


// Dibuja la escena actual y sus botones
ejecutar(){
  if(this.estado === 0){

      this.cFondo.dibujarFondo(3);
      this.cBoton.dibujar(250, 420, 140, 40, "JUGAR");

    } else if(this.estado === 1){

      this.cFondo.dibujarFondo(4);
      this.cBoton.dibujar(250, 420, 140, 40, "ENTIENDO");

    }else if(this.estado === 2){

      //llamamos al juego
      this.cFondo.dibujarFondo(0);
      this.cJuego.setupjuego();
      this.cJuego.dibujar();
      this.cJuego.musicaFondo();

    }else if(this.estado === 3){ // perdiste

      this.cFondo.dibujarFondo(1);
      this.cBoton.dibujar(250, 420, 140, 40, "REINTENTAR");

    }else if(this.estado === 4){ // ganaste jej

      this.cFondo.dibujarFondo(2);
      this.cBoton.dibujar(250, 420, 140, 40, "REINTENTAR");

    }
  }

// Maneja los clics del mouse en la escena actual
click(){

//para ejecutar el sonido de click (no queremos q se ejecute en el minijuego)
if(this.cBoton.colision(250, 420, 140, 40) && this.estado === 0 ||this.estado === 1||this.estado === 3||this.estado === 4){
  sBoton.play();
}

if(this.estado === 0 && this.cBoton.colision(250, 420, 140, 40)){
  this.controlarEstado(1);
  
}else if(this.estado === 1 && this.cBoton.colision(250, 420, 140, 40)){
  this.controlarEstado(2);

}else if(this.estado === 3 && this.cBoton.colision(250, 420, 140, 40)){
  this.controlarEstado(0);

}else if(this.estado === 4 && this.cBoton.colision(250, 420, 140, 40)){
  this.controlarEstado(0);
}

}

}
