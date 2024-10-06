import 'dart:io';

void main(){
  print("Cantidad de aprendices:");
  int n = int.parse(stdin.readLineSync()!);

  for (var x = 1; x <= n; x++) {
    print("Introduce tu nombre:");
    String? nm = stdin.readLineSync();

    int a = nm!.length;
    String nm_inv = "";

    for (var i = a - 1 ; i >= 0; i--) {
      String s = nm[i];
      nm_inv += s;
    }
  
  print("tu nombre es: " + nm + " y la forma inversa es: " + nm_inv);
  }


}