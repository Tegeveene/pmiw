
//para DIBUJAR el boton
function boton(x, y, ancho, alto, txt){
  if (sector(x, y, ancho, alto)){
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
    rect(x,y,ancho,alto);
    push()
    textAlign(CENTER);
    fill(255,255,255);
    text(txt,x+(ancho/2),y+(alto/2)+5);
    noFill();
    pop()
}

//RETORNA el valor de sector, sectoriza la zona
function sector(sx, sy, sancho, salto) {
  return mouseX > sx && mouseX < sx+sancho && mouseY > sy && mouseY < sy+salto;
}

//para hacer que al clickear el sector se AUMENTE la variable ESTADO
function clickbtn(bx,by,bal,ban,target){
    if(sector(bx,by,bal,ban)){
      sBoton.play();
      estado = target
    }
  }

//el clickbutton que usamos para la eleccion de mas tarde
function clickbtnEspecial(bx,by,bal,ban,target,dir){
    if(sector(bx,by,bal,ban)){
      sBoton.play();
      estado = target
      ruta = dir
    }
  }
//ACA se identifica el sector para los respectivos botones de cada escena
function mousePressed(){
  musicaFondo();
 //pantalla principal
 if(estado === 0){
   clickbtn(20, 420, 150, 50, -1);
   clickbtn(470, 420, 150, 50, 1);
 //12 de enero
 }else if(estado === 1){
   clickbtn(20, 420, 150, 50, 0);
   clickbtn(470, 420, 150, 50, 2);
 //20 de enero
 }else if(estado === 2){
   clickbtn(20, 420, 150, 50, 1);
   clickbtn(470, 420, 150, 50, 14);
 //Sueño (eleccion)
 }else if(estado === 3){
   clickbtnEspecial(20, 420, 150, 50, 4, "jujuy");
   clickbtnEspecial(250, 420, 150, 50, 4,"budapest");
   clickbtnEspecial(470, 420, 150, 50, 4,"quetzaltenango");
 //28 de enero
 }else if(estado === 4){
  clickbtn(250, 420, 150, 50, 5);
 //30 de enero casamiento
 }else if(estado === 5){
   clickbtn(20, 420, 150, 50, 13);
   clickbtn(470, 420, 150, 50, 6);
 //31 de enero
 }else if(estado === 6){
   clickbtn(250, 420, 150, 50, 7);
 //7 de febrero
 }else if(estado === 7){
   clickbtn(20, 420, 150, 50, 6);
   if(ruta === "budapest"){
   clickbtn(470, 420, 150, 50, 8);
   }
   else if(ruta === "jujuy"){
   clickbtn(470,420,150,50,9)
   }
   else if(ruta === "quetzaltenango"){
   clickbtn(470, 420, 150, 50, 10);
   }
 //ganar minijuego
 }else if(estado === 11){
   clickbtn(20, 420, 150, 50, 0);
   clickbtn(470, 420, 150, 50, 12);
 //minijuego (Gana o pierde)
 }else if(estado === 14){
   clickbtn(20, 420, 150, 50, 11);
   clickbtn(470, 420, 150, 50, 3);
  //finales
 }else if(estado === -1 || estado === 8 || estado === 9 || estado === 10 || estado === 12 || estado === 13){
   clickbtn(250, 420, 150, 50, 0);
 }  
}
