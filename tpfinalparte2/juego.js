class Juego{
  constructor(){
    this.teclas = [];
    this.zonaYdeColision = 600;
    this.alturaDeZonaColision = 40;
    this.barravida = new Vida(10, 10, 200, 20);
    this.columnas = 4; //los 4 carriles
    this.letras = ['A', 'S', 'D', 'F'] //las teclas del teclado
    this.puntaje = 0; //puntaje inicial
    this.puntajeMax = 500; //cuando llega a este puntaje se gana
    this.finDeJuego = false; //esto es para q el juego corra y cuando está en true pues bueno no corre jaja
  }
  
}
