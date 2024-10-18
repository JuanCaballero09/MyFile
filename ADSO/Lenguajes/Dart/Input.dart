import 'dart:io';

void main(){
  print('digite su nombre');
  String nombre = stdin.readLineSync()!;

  print('Su nombre es: $nombre');
}