class Juego {
  constructor() {
    this.notas = []; //array que sostiene las teclas que van a caer
    this.teclado = []; //array que sostiene las teclas de abajo
    this.letras = ['a', 's', 'd', 'f'];//array con todas las letras que se usan para el juego
    this.puntaje = 0; //declaracion del puntaje inicial para 
  }

  //esto debe renderizar o al menos traer todos las funciones dibujar de todas las demas clases
  dibujar() {
    //se encarga del dibujar las teclas, y las notas individualmente, llamando a sus respectivos "dibujar"
    for (let i=0; i<4; i++) {
      this.notas[i].dibujarNota();
      this.teclado[i].dibujartecla();
      //Chequea las colisiones entre cada nota con su respectiva tecla utilizando la alineacion numerica dada por "i"
      if (key === this.letras[i]) {
        if (keyIsPressed && this.colision(i, 10) && this.notas[i].activo === true) {
          this.notas[i].activo = false;

          //debug
          print("hit");
        }
      }
    }
    //dibuja la barra de vida (WIP)
    this.barravida.dibujar();
  }
  
  //Crea todas las instancias de los elementos del juego para que esten listas para usarse
  setupjuego() {
      this.barravida = new Vida(10, 10, 200, 20);
    for (let i=0; i<4; i++) {
      this.notas[i] = new Nota(i, random(0, 600));
      this.teclado[i] = new teclas(i, 400);
    }
  }

  //checkea la distancia entre la nota y la tecla del teclado, es parte del checkeo de colisiones del juego
  colision(id, distancia) {
    if ( dist(this.teclado[id].y, this.teclado[id].x, this.notas[id].y, this.notas[id].x) <= distancia) {
      return true;
    }
  }

  //reproduce el tema de fondo
  musicaFondo(){
    if (!sJuego.isPlaying()){
       sJuego.loop(true);
     }
   }

}
