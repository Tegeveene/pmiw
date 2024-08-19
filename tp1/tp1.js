/*
Gabriel Vega
Comisión 1
tp 1

video del código original (tp3):
https://youtu.be/pp1zq3CE-Aw

video del código pasado a p5.js:
https://youtu.be/jne3mehEJKQ
*/

//variable de la imagen
var img;

//variables para el modo locura

var cRombo;
var bordeRombo;
var rellenoRombo;
var colorFondo;


function preload(){
  img = loadImage("assets/M_10.jpeg");
}

function setup() {
  
  createCanvas(800,400);
  
  cRombo = color(30);
  bordeRombo = color(30);
  colorFondo = color(255);
  rellenoRombo = color(255);
}


function draw() {
  
  print(mouseX+"/"+mouseY+" puto el q lee");
  
  
  
  keyPressed();
  
  fondo(colorFondo);
  rombos(bordeRombo, rellenoRombo);
  lineasVerticales(cRombo);
  
  image(img,0,0,400,400);

}
