/*
Gabriel Vega
119164/3

video: no hay video.

Buena mañana, tarde o noche.
Esta entrega se nos complico con el tiempo por la forma en la que nos organizamos para estar al día
con las demás materias.
Lamento entregar un código incompleto como este, cuando esto ya haya sido entregado voy a seguir intentando
hacer funcionar el código mientras espero una devolución.
Desde ya muchas gracias por leer. 

*/
//carga las imagenes
let imagenes = [];
//para llamar a la clase controlador en setup
let control;
//sonidos
let sboton;


function preload(){
 for(let i=0; i<5; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }
 
 sBoton = loadSound("data/boton.mp3");

}

function setup(){
createCanvas(640,480);
imageMode(RIGHT)
textSize(20);
control = new Controlador();
}

function draw(){
 control.correr();
}

function mousePressed(){
  control.click();
}
