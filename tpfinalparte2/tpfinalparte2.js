/*
Gabriel Vega
119164/3

*/

//carga las imagenes
let imagenes = [];
//para llamar a la clase controlador en setup
let control;
//sonidos
let sBoton, sJuego;


function preload(){
 for(let i=0; i<5; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }
 sBoton = loadSound("data/boton.mp3");
 sJuego = loadSound("data/musicaJuego.mp3");
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
console.log("estado: " + control.estado +" X: "+ mouseX +" Y: "+ mouseY);
}

function mousePressed(){
  control.click();
}
