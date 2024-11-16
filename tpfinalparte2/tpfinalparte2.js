
let imagenes = [];


//se llama al constructor de la clase Escenas
let escenas =  new Escenas();

function preload(){
 for(let i=0; i<4; i++){
   imagenes[i] = loadImage("data/fondo"+i+".png");
 }
}

function setup(){
createCanvas(640,480);
escenas.configEscena();
}

function draw(){
escenas.dibujarEscena();
}

function mousePressed(){
escenas.mousePresionado();
}
