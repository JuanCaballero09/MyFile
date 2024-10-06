import 'dart:io';

void main(){
  print("Ingresar cantidad de personas participando");
  int i = int.parse(stdin.readLineSync()!);
  int a = 0;
  int b = 0;
  int c = 0;
  int z = 0;
  int x = 0;

  print("----------------------------------------------------------------");

  for (var m = 1; m <= i; m++) {
    print("Cantidad de dinero aportado");
    int v = int.parse(stdin.readLineSync()!);

    a = a + v;

    if (v >= 5000) {
      b = b + 1;
      z = z + v;
    }else{
      c = c + 1;
      x = x + v;
    }
  }

  print("el total recaudado es: \$$a");
  print("el promedio por persona es: \$${(a~/i)}");

  print("----------------------------------------------------------------");

  print("el total que recaudaron los que pusieron más de \$5000 es: \$$z");
  print("la cantidad de personas que pusieron más de \$5000 son: $b");
  print("el promedio de los que pusieron más de \$5000 es: \$${z~/b}");

  print("----------------------------------------------------------------");
  
  print("el total que recaudaron los que pusieron menos de \$5000 es: \$$x");
  print("la cantidad de personas que pusieron menos de \$5000 son: $c");
  print("el promedio de los que pusieron menos de \$5000 es: \$${x~/c}");
}