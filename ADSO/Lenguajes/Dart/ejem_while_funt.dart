import 'dart:io';

void contador(){
  int j = 0;

  print('--------------------------------------');
  print('Para detener el programa escribe "stop"');
  print('--------------------------------------');

  while (true){

    print("Introducir numero:");
    String? n = stdin.readLineSync();

    n = n?.toLowerCase();

    if (n == "stop" ) {
      break;
    }else {
      int m = int.parse(n!);
      j = j + m;
    }
  }
  print("-------------------------");

  print(j);
}

void main(){
  
  print("Ejecutar programa Y/N");
  String? y_n = stdin.readLineSync();
  y_n = y_n?.toLowerCase();

  if (y_n == "y") {
    contador();
  }
}