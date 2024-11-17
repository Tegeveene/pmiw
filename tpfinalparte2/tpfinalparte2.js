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
