/*
Gabriel Vega 119164/3
 Alex sena 119144/8
 Comisión 1
 video (Alex): https://youtu.be/gt3gNyA_dUw
 */

//funciones para las escenas
let fondos = [];
let textos = [];
let estado;

//funciones para el sonido
let sFondo, sBoton;

//variables para que las proporciones colisiones y el renderizado de los botones se manejen en una sola variable, haciendo que 
//sea mas facil de manejar
let IZQUIERDA,DERECHA,MEDIO;

let CENTRO;

function preload() {
  //para cargar todas las imagenes de una usando iteracion
  for (let i=0; i<16; i++) {
    fondos[i] = loadImage("data/fondos/fondo"+i+".jpg");
  }
  //para cargar todos los textos de una usando iteracion
  for (let i=0; i<25; i++) {
    textos[i] = loadStrings("data/textos/texto"+i+".txt");
  }
  //cargar sonidos
  sFondo = loadSound("data/sonidos/fondo.mp3");
  sBoton = loadSound("data/sonidos/boton.mp3");
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<16; i++) {
    fondos[i].resize(640, 480);
  }

  imageMode(RIGHT)
    estado = 0;
  textSize(20);
  CENTRO = [width/2, height/2];
  //cosa simple para que pueda leer el codigo y que sea mas facil de modificar
  DERECHA = [CENTRO[0]+(CENTRO[0]/4), CENTRO[1]+(CENTRO[1]/2)];
  IZQUIERDA = [CENTRO[0]/4, CENTRO[1]+(CENTRO[1]/2)];
  MEDIO = [CENTRO[0]-80, CENTRO[1]+(CENTRO[1]/2)];
}


function draw() {
  cargarEscena();
}
