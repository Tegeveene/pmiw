class Escenas {
  constructor() {
    this.estado = 0;
    this.botones = []; // Array para almacenar los botones de la escena actual
  }

//Configura la escena actual
configEscena() {
  
    this.botones = []; // Limpiar los botones anteriores
    //Pantalla principal
    if (this.estado === 0){
      this.botones = [new Boton(20, 420, 150, 50, "siguiente", 1)];
    }else if (this.estado === 1){ //REGLAS
      this.botones= [new Boton(20, 420, 150, 50, "Entiendo", 2)];
    }else if (this.estado === 2){//JUEGO
      //this.juego();
    }else if (this.estado === 3) {
      this.botones= [new Boton(20, 420, 150, 50, "Reiniciar", 0)];//DERROTA  
    }else if (this.estado === 4) {
      this.botones= [new Boton(20, 420, 150, 50, "Reiniciar", 0)];//VICTORIA
    }
  }

// Dibuja la escena actual y sus botones
dibujarEscena() {
  for (let i = 0; i < this.botones.length; i++) {
    this.botones[i].dibujar(); // Dibujar cada botón
  }
}

// Maneja los clics del mouse en la escena actual
mousePresionado() {
  for (let i = 0; i < this.botones.length; i++) {
    let nuevaAccion = this.botones[i].clic();
    
    if (nuevaAccion !== null) {
      this.estado = nuevaAccion; // Cambiar el estado
      this.configEscena(); // Configurar los botones de la nueva escena
      
    }
  }
}

}
