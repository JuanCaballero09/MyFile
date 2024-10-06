import 'dart:io';

// Función para sumar dos números
double sumar(double a, double b) {
  return a + b;
}

// Función para restar dos números
double restar(double a, double b) {
  return a - b;
}

// Función para multiplicar dos números
double multiplicar(double a, double b) {
  return a * b;
}

// Función para dividir dos números
double dividir(double a, double b) {
  if (b == 0) {
    print("Error: No se puede dividir por cero.");
    return 0;
  }
  return a / b;
}

void main() {
  print("ejecutar y / n");
  String? ejecutar = stdin.readLineSync();
  while (ejecutar == "y" ) {
    print("Calculadora Básica");
    print("1. Sumar");
    print("2. Restar");
    print("3. Multiplicar");
    print("4. Dividir");
    print("5. Salir");

    print("----------------------------------------");

    stdout.write("Elige una opción: ");
    String? opcion = stdin.readLineSync();

    print("----------------------------------------");

    if (opcion == '5') {
      print("Saliendo del programa.");
      break;
    }

    stdout.write("Ingrese el primer número: ");
    double? num1 = double.tryParse(stdin.readLineSync() ?? '');
    stdout.write("Ingrese el segundo número: ");
    double? num2 = double.tryParse(stdin.readLineSync() ?? '');
    print("----------------------------------------");

    if (num1 == null || num2 == null) {
      print("Error: Entrada inválida. Por favor, ingrese números válidos.");
      continue;
    }

    double resultado;
    switch (opcion) {
      case '1':
        resultado = sumar(num1, num2);
        print("Resultado de la suma: $resultado");
        print("----------------------------------------");
        break;
      case '2':
        resultado = restar(num1, num2);
        print("Resultado de la resta: $resultado");
        print("----------------------------------------");
        break;
      case '3':
        resultado = multiplicar(num1, num2);
        print("Resultado de la multiplicación: $resultado");
        print("----------------------------------------");
        break;
      case '4':
        resultado = dividir(num1, num2);
        if (num2 != 0) {
          print("Resultado de la división: $resultado");
          print("----------------------------------------");
        }
        break;
      default:
        print("Opción no válida. Intenta de nuevo.");
        print("----------------------------------------");
    }
  }
}


/*
# Explicación del Código
1. Importar dart:io:
  ○ Necesario para leer entradas del usuario en la consola usando stdin.readLineSync().

2. Funciones Matemáticas:
  ○ sumar(double a, double b): Devuelve la suma de a y b.
  ○ restar(double a, double b): Devuelve la resta de a menos b.
  ○ multiplicar(double a, double b): Devuelve el producto de a y b.
  ○ dividir(double a, double b): Devuelve la división de a entre b, comprobando si b es cero para evitar la división por cero.

3. Función main:
  ○ Presenta un menú al usuario con opciones para realizar operaciones matemáticas básicas o salir del programa.
  ○ Utiliza un bucle while para continuar mostrando el menú hasta que el usuario elija salir (opción 5).
  ○ Lee los números ingresados por el usuario y valida que sean números válidos.
  ○ Realiza la operación seleccionada por el usuario y muestra el resultado.

Este ejemplo te permitirá practicar funciones en Dart, así como el manejo de entradas y salidas en la consola, y la estructura de control switch-case.
*/