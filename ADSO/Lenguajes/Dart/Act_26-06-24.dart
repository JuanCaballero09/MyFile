import 'dart:io';

void main(){
  int a = 0;
  int i = 0;

  int z = 0; 
  int b = 0;

  int x = 0;
  int c = 0;

  while (a < 100000) {
    print("Cantidad de dinero aportado");
    int cant = int.parse(stdin.readLineSync()!);
    
    a = a + cant;
    i = i + 1;

    if (cant >= 5000) {

      b = b + 1;
      z = z + cant;

    } else {

      c = c + 1;
      x = x + cant;

    }
  }
  print("El total recaudado es \$$a ");
  print("El promedio por persona es de \$${a~/i} ");
  
  print("----------------------------------------------------------------");

  print("el total que recaudaron los que pusieron más de \$5k es: \$$z");
  print("la cantidad de personas que pusieron más de \$5k son: $b");
  print("el promedio de los que pusieron más de \$5k es: \$${z~/b}");

  print("----------------------------------------------------------------");
  
  print("el total que recaudaron los que pusieron menos de \$5k es: \$$x");
  print("la cantidad de personas que pusieron menos de \$5k son: $c");
  print("el promedio de los que pusieron menos de \$5k es: \$${x~/c}");

}