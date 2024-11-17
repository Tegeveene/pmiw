class juego {
  constructor() {
    this.notas = []; //array con las teclas que van a caer
    this.teclado = [];
    this.barravida = new Vida(10, 10, 200, 20); //crea una barra de vida
    this.letras = ['a', 's', 'd', 'f'];//esto tambien
    this.puntaje = 0; //puntaje inicial
  }

  //esto debe renderizar o al menos traer todos las funciones dibujar de todas las demas clases
  dibujarjuego() {

    for (let i=0; i<4; i++) {
      this.notas[i].dibujarNota();
      this.teclado[i].dibujartecla();
      if (key === this.letras[i]) {
        if (keyIsPressed && this.colision(i, 50) && this.notas[i].activo === true) {
          this.notas[i].activo = false;
          print("hit");
        }
      }
    }
    this.barravida.dibujarbarra();
  }

  tocartecla(tecla) {
  }

  setupjuego() {
    for (let i=0; i<4; i++) {
      this.notas[i] = new nota(i, random(0, -400));
      this.teclado[i] = new teclas(i, 300);
    }
  }

  colision(id, distancia) {
    if ( dist(this.teclado[id].y, this.teclado[id].x, this.notas[id].y, this.notas[id].x) <= distancia) {
      return true;
    }
  }
}
