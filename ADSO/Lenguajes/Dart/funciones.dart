/*
1. Las funciones:
  Una función es un bloque de código diseñado para realizar una tarea específica. 
  Cada función tiene un nombre y puede ser llamada desde cualquier parte del programa, lo que permite reutilizar el código sin tener que escribirlo varias veces.
--------------------------------------------------------------------------------------------------------------------------
2. Parametros
  tambien tenemos que tener en cuenta los parametros que son los parámetros son variables que se utilizan para recibir valores que se pasan a una función cuando esta es llamada. Los parámetros permiten que las funciones sean más flexibles y reutilizables, ya que pueden operar con diferentes datos cada vez que se llaman.
--------------------------------------------------------------------------------------------------------------------------
1.1. Definiendo Funciones en Dart 
  En Dart, las funciones se definen de manera similar a otros lenguajes de programación. Aquí tienes un ejemplo básico:
*/

int sumar(int a, int b){
    return a + b;
}

/*
1.2. Funciones sin Valor de Retorno
  Las funciones que no devuelven un valor se definen con el tipo void. 
  Se usan dos funciones para poder llamar una sin retorno
*/

void saludar(String nombre){
  print('hola $nombre');
}

//Pruebas
void main(){
  saludar('María');  // Salida: Hola, María!
  print(sumar(2, 5));
}