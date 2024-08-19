function keyPressed(){
  if(key == ' '){
    modoLocura();
  }
  
  if(key == 'r'){ 
    reiniciarVariables();
  }
}

function modoLocura(){
    cRombo = color(random(255),random(255),random(255));
    bordeRombo = color(random(255),random(255),random(255));
    rellenoRombo = color(random (255),random(255),random(255));
    colorFondo = color(random (255),random(255),random(255));
}

function reiniciarVariables(){
  cRombo = color(30);
  bordeRombo = color(30);
  rellenoRombo = color(255);
  colorFondo = color(255);
  
}
