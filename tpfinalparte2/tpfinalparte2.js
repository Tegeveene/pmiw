/*
Gabriel Vega
119164/3

video: https://youtu.be/6FfjVBgxMDM

*/

//para llamar a la clase controlador en setup
let control;

//sonidos
let sBoton, sJuego, sError, sGanaste, sPerdiste;
//carga las imagenes
let imagenes = [];

function preload(){
 for(let i=0; i<5; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }

 sBoton = loadSound("data/boton.mp3");
 sJuego = loadSound("data/musicaJuego.mp3");
 sPerdiste = loadSound("data/perdiste.mp3");
 sGanaste = loadSound("data/ganaste.mp3");
 sError = loadSound("data/error.mp3");

}

function setup(){
createCanvas(640,480);
imageMode(RIGHT)
textSize(20);

control = new Controlador(0);
control.setupCont();
}

function draw(){
control.ejecutar();
}

function mousePressed(){
  control.click();
}
