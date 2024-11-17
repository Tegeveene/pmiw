//pregunta si la variable sFondo NO está sonando y si es correcto q no suena
//entonces la prende en loop
function musicaFondo(){
 if (!sFondo.isPlaying()){
    sFondo.loop(true);
  }
}
//se cargan tanto las imagenes como los textos (es la misma shit)
function cargarFondo(img, x, y){
  image(img, x, y, width, height);
}
//esta función se usa dentro y fuera de los botones
function cargarTexto(txt, x, y){
  push()
  noStroke();
  if(txt !== ""){
  fill(0,0,0,80);
  //rect(x-10,y+90,590,y+100);
  rect(x,y,x+400,y+100)
  pop()
  }
  push()
  textSize(14);
  fill(255,255,255);
  text(txt, x, y,400);
  noFill();
  pop()
}
function Escena(img,cuento,txt0,txt1,txt2,NumBotones){
    cargarFondo(img, 0, 0);
    cargarTexto(cuento, CENTRO[0]/4, CENTRO[1]/2);
    if(NumBotones === 1){
    boton(MEDIO[0],MEDIO[1], txt0);
    }
    if(NumBotones === 2){
    boton(IZQUIERDA[0],IZQUIERDA[1],txt0);
    boton(DERECHA[0],DERECHA[1],txt1);
    
    } else if(NumBotones === 3){
    boton(IZQUIERDA[0], IZQUIERDA[1], txt0);
    boton(MEDIO[0],MEDIO[1], txt1);
    boton(DERECHA[0], DERECHA[1], txt2);
    }
}
function cargarEscena(){
    if(estado == 0){
    Escena(fondos[0],"",textos[1],textos[2],0,2);
    }
    if(estado === 1){
    Escena(fondos[1],textos[9],textos[0],textos[2],0,2);
    }
    if(estado === 2){
    Escena(fondos[2],textos[10],textos[0],textos[2],0,2);
    }
    if(estado === 3){
    Escena(fondos[3],textos[11],textos[3],textos[4],textos[5],3);
    }
    if(estado === 4){
    Escena(fondos[4],textos[12],textos[0],textos[2],0,2);
    }
    if(estado === 5){
    Escena(fondos[5],textos[13],textos[7],textos[8],0,2);
    }
    if(estado === 6){
    Escena(fondos[6],textos[14],textos[0],textos[2],0,2);
    }
    if(estado === 7){
    Escena(fondos[7],textos[15],textos[0],textos[2],0,2);
    }
    if(estado === 8){
    Escena(fondos[8],textos[16],textos[6],0,0,1);
    }
    if(estado === 9){
    Escena(fondos[9],textos[19],textos[6],0,0,1);
    }
    if(estado === 10){
    Escena(fondos[10],textos[20],textos[6],0,0,1);
    }
    if(estado === 11){
    Escena(fondos[11],textos[17],textos[0],textos[2],0,2);
    }
    if(estado === 12){
    Escena(fondos[12],textos[18],textos[6],0,0,1);
    }
    if(estado === 13){
    Escena(fondos[13],textos[24],textos[6],0,0,1);
    }
    if(estado === 14){
    Escena(fondos[15],textos[23],textos[0],textos[2],0,2);
    }
    if(estado === -1){
    Escena(fondos[14],"",textos[6],0,0,1);
    }
}

/*
Dejo esto para comparación

function pruebaEscenaLite(img, x, y, an, al, txt, x2, y2, txt2, x3, y3, an2, al2, txt3, x4, y4, an3, al3, txt4, x5, y5, an4, al4){
    cargarFondo(img, x, y, an, al);
    cargarTexto(txt, x2, y2);
    boton(x3, y3, an2, al2, txt2);
    boton(x4, y4, an3, al3, txt3);
    boton(x5, y5, an4, al4, txt4);
}
//ACA se llaman a todas las escenas con CONDICIONALESSSS
function cargarEscena(){
  if(estado == 0){
    pruebaEscenaLite(fondos[0], 0, 0, 640, 480, 0, -100, 0,  textos[1], 20, 420, 150, 50,  textos[2], 470, 420, 150, 50, 0,-100,0,0,0);
  }
  else if(estado == -1){
    pruebaEscenaLite(fondos[14], 0, 0, 640, 480, 0, -100, 0,  textos[0], 250, 420, 150, 50,  0,-100,0,0,0,0,-100,0,0,0);
  }
  else if(estado == 1){
    pruebaEscenaLite(fondos[1], 0, 0, 640, 480, textos[9], 50, 200,  textos[0], 20, 420, 150, 50,  textos[2], 470, 420, 150, 50,0,-100,0,0,0);
  }
  else if(estado == 2){
    pruebaEscenaLite(fondos[2], 0, 0, 640, 480, textos[10], 50, 200,  textos[0], 20, 420, 150, 50,  textos[2], 470, 420, 150, 50, 0,-100,0,0,0);
  }
  else if(estado == 3){
    pruebaEscenaLite(fondos[3], 0, 0, 640, 480, textos[11], 50, 200,  textos[3], 20, 420, 150, 50,  textos[4], 250, 420, 150, 50, textos[5], 470, 420, 150, 50);
  }//OPCIONES DEL DESTINO DE LA LEJANA
  else if(estado == 4){
    pruebaEscenaLite(fondos[4], 0, 0, 640, 480, textos[12], 50, 200,  textos[2], 250, 420, 150, 50,  0,-100,0,0,0,  0,-100,0,0,0 );
  }
  //aca hay q poner 3 opciones en donde si abandona la boda o no
  else if(estado == 5){
    pruebaEscenaLite(fondos[5], 0, 0, 640, 480, textos[13], 50, 200,  textos[7], 20, 420, 150, 50,  textos[8], 470, 420, 150, 50,  0, -100,0,0,0);
  }
  else if(estado == 6){
    pruebaEscenaLite(fondos[6], 0, 0, 640, 480, textos[14], 50, 200,  textos[2], 250, 420, 150, 50,  0,-100,0,0,0, 0,-100,0,0,0);
  }
  else if(estado == 7){
    pruebaEscenaLite(fondos[7], 0, 0, 640, 480, textos[15], 50, 200,  textos[0], 20, 420, 150, 50,  textos[2], 470, 420, 150, 50, 0, -100,0,0,0);
  }
  else if(estado == 8){
    pruebaEscenaLite(fondos[8], 0, 0, 640, 480, textos[16], 50, 100,  textos[0], 250, 420, 150, 50,  0,-100,0,0,0, 0,-100,0,0,0);
  }
  else if(estado == 9){
    pruebaEscenaLite(fondos[9], 0, 0, 640, 480, textos[19], 50, 200,  textos[0], 250, 420, 150, 50,  0,-100,0,0,0, 0,-100,0,0,0);
  }
  else if(estado == 10){
    pruebaEscenaLite(fondos[10], 0, 0, 640, 480, textos[20], 50, 200,  textos[0], 250, 420, 150, 50,  0,-100,0,0,0, 0,-100,0,0,0);
  }//gana minijuego
  else if(estado == 11){
    pruebaEscenaLite(fondos[11], 0, 0, 640, 480, textos[17], 50, 200,  textos[0], 20, 420, 150, 50,   textos[2], 470, 420, 150, 50,  0,-100,0,0,0);
  }
  else if(estado == 12){
    pruebaEscenaLite(fondos[12], 0, 0, 640, 480, textos[18], 50, 200,  textos[0], 250, 420, 150, 50,   0,-100,0,0,0, 0,-100,0,0,0);
  }//FIN DE LORE MINIJUEGO
  //SI ELIGE ABANDONAR LA BODA
  else if(estado == 13){
    pruebaEscenaLite(fondos[13], 0, 0, 640, 480, textos[24],50, 200,  textos[0], 250, 420, 150, 50,   0,-100,0,0,0, 0,-100,0,0,0);
  }
  else if(estado == 14){
    pruebaEscenaLite(fondos[15], 0, 0, 640, 480, textos[23], 50, 200,  textos[21], 20, 420, 150, 50,   textos[22], 470, 420, 150, 50, 0,-100,0,0,0);
  }
}
*/
