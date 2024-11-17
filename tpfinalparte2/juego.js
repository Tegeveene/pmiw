class juego{
  constructor(){
    this.teclas = []; //array con las teclas que van a caer
    this.zonaYdeColision = 600; //colision maxima de perder?
    this.alturaDeZonaColision = 40; //colision minima para golpear?
    this.barravida = new Vida(10, 10, 200, 20); //crea una barra de vida
    this.columnas = 4; //esto tendria que ser automatico
    this.letras = ['A', 'S', 'D', 'F'];//esto tambien
    this.puntaje = 0; //puntaje inicial
    this.puntajeMax = 500; //esto no es necesario creo
    this.finDeJuego = false; //ok
  }
  
  //esto debe renderizar o al menos traer todos las funciones dibujar de todas las demas clases
  dibujarjuego(){
    rect(10,10,10);
  }
  
  dibujarinterfaz(){
  
  }
  
  
  //esto debe ejecutar todos las funciones de las clases acorde a lo que necesita el juego
  ejecutarjuego(){
  
  }
  
}
