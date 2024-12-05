
//para DIBUJAR el boton
function boton(x, y, txt) {
  if (sector(x, y, 150, 50)) {
    fill(0, 0, 0);
  } else {
    fill(150, 155, 255);
  }
  rect(x, y, 150, 50);
  push()
    textAlign(CENTER);
  fill(255, 255, 255);
  text(txt, x+75, y+30);
  noFill();
  pop()
}

//RETORNA el valor de sector, sectoriza la zona
function sector(sx, sy, sancho, salto) {
  return mouseX > sx && mouseX < sx+sancho && mouseY > sy && mouseY < sy+salto;
}

//para hacer que al clickear el sector se AUMENTE la variable ESTADO
function clickbtn(bx, by, target) {
  if (sector(bx, by, 150, 50)) {
    sBoton.play();
    estado = target;
    print("", estado);
  }
}

//el clickbutton que usamos para la eleccion de mas tarde
function clickbtnEspecial(bx, by, target, dir) {
  if (sector(bx, by, 150, 50)) {
    sBoton.play();
    estado = target
      ruta = dir
  }
}

function mousePressed() {
  musicaFondo();
  //pantalla principal
  if (estado === 0) {
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], -1);
    clickbtn(DERECHA[0], DERECHA[1], 1);
    //12 de enero
  } else if (estado === 1) {//0,2
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 0);
    clickbtn(DERECHA[0], DERECHA[1], 2);
    //20 de enero
  } else if (estado === 2) {//1,14
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 1);
    clickbtn(DERECHA[0], DERECHA[1], 14);
    //Sueño (eleccion)
  } else if (estado === 3) {
    clickbtnEspecial(IZQUIERDA[0], IZQUIERDA[1], 4, "jujuy");
    clickbtnEspecial(CENTRO[0]-80, CENTRO[1]+(CENTRO[1]/2)+50, 4, "budapest");
    clickbtnEspecial(DERECHA[0], DERECHA[1], 4, "quetzaltenango");
    //28 de enero
  } else if (estado === 4) {//3,5
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 3);
    clickbtn(DERECHA[0], DERECHA[1], 5);
    //30 de enero casamiento
  } else if (estado === 5) {//13,6
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 13);
    clickbtn(DERECHA[0], DERECHA[1], 6);
    //31 de enero
  } else if (estado === 6) {
    clickbtn(IZQUIERDA[0], IZQUIERDA[1],5);
    clickbtn(DERECHA[0], DERECHA[1], 7);
    //7 de febrero
  } else if (estado === 7) {
    clickbtn( IZQUIERDA[0], IZQUIERDA[1], 6);
    if (ruta === "budapest") {
      clickbtn(DERECHA[0], DERECHA[1], 8);
    } else if (ruta === "jujuy") {
      clickbtn(DERECHA[0], DERECHA[1], 9);
    } else if (ruta === "quetzaltenango") {
      clickbtn(DERECHA[0], DERECHA[1], 10);
    }
    //ganar minijuego
  } else if (estado === 11) {//0,12
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 0);
    clickbtn(DERECHA[0], DERECHA[1], 12);
    //minijuego (Gana o pierde)
  } else if (estado === 14) {//11,3
    clickbtn(IZQUIERDA[0], IZQUIERDA[1], 11);
    clickbtn(DERECHA[0], DERECHA[1], 3);
    //finales (Como usan el mismo boton los junte)
  } else if (estado === -1 || estado === 8 || estado === 9 || estado === 10 || estado === 12 || estado === 13) {
    clickbtn(MEDIO[0], MEDIO[1], 0);
  }
}
