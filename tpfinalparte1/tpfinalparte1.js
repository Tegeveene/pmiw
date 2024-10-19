/*
Gabriel Vega 119164/3
Alex sena 119144/8
Comisión 1
video de Gabriel:https://youtu.be/70eNnET-hSg
*/

//variables para las escenas
let fondos = [];
let textos = [];
let estado;

//variable para el sonido
let sFondo, sBoton;

function preload(){
   //para cargar todas las imagenes de una usando iteracion 
 for(let i=0; i<16; i++){
   fondos[i] = loadImage("data/fondos/fondo"+i+".jpg");
 }
 //para cargar todos los textos de una usando iteracion
 for(let i=0; i<25; i++){
   textos[i] = loadStrings("data/textos/texto"+i+".txt");
 }
 //cargar sonidos
 sFondo = loadSound("data/sonidos/fondo.mp3");
 sBoton = loadSound("data/sonidos/boton.mp3");
}

function setup() {
  createCanvas(640, 480);
  imageMode(RIGHT)
  estado = 0;
  textSize(20);
}

function draw() {
    print(mouseX+"/"+mouseY+" estado: "+estado);  
    cargarEscena();
}
