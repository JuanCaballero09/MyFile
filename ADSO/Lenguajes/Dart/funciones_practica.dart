import 'dart:io';

void saludar(nombre, sexo){
  sexo = sexo.toLowerCase();
  var adjetivo;

  
  if (sexo == "mujer" ) {
    adjetivo = "Guapa";

  }else if (sexo == "hombre" ){
    adjetivo = "Guapisimo";

  }else {
    adjetivo = "tú";
  }

  print("hola $nombre ¿como andas $adjetivo?");
}

void main(){
  for (var i = 0; i < 3; i++) {
    print("Sexo:");
  String? a = stdin.readLineSync();
  print("Nombre:");
  String? name = stdin.readLineSync();
  
  saludar(name, a);
  
  print("-------------------------------------------------");
  }
}