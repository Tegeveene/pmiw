/*
Gabriel Vega 119164/3
Alex sena 119144/8
Comisión 1
video:https://youtu.be/70eNnET-hSg

Hola profe, le comento que grabe, subi y entregue el video y el tp a
eso de las 3 a.m., pero luego decidimos agregar un pequeño fondo a los
textos para que sean mejor percibidos a la vista. El único cambio que hay
entre este código y el anterior es el agregado de un 'rect' en la 
linea 17 en la pestaña 'pantallas'.
Espero que este cambio no genere disturbios en su paz al momento de ver
el video y revisar el código.
atte Gabriel Vega AKA tege
PD: Gracias por leer y que tenga un buen fin de semana.
*/

//funciones para las escenas
let fondos = [];
let textos = [];
let estado;

//funciones para el sonido
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
