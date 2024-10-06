/*
Ejercicio
  - Se pide ingresar los sueldos de los empleados de una compañía y sumarlos.
  - Cuando se ingresa un sueldo en cero (0) se termina la carga y se muestra el resultado de la sumatoria de los sueldos ingresados.
*/

import 'dart:io';

void main(){

  int sueldo_total = 0;

  while (true) {
    print("Introduce Sueldo:");
    int n = int.parse(stdin.readLineSync()!);
    
    if (n == 0) {
      break;
    }else 
    sueldo_total = sueldo_total + n;
  }
  print("el sueldo total es: $sueldo_total");
}