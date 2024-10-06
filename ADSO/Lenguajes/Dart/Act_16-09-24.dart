import 'dart:convert';

class Colaborador{
  String? nombreCompleto;
  int? tipoColaborador;
  double? aporte;
  
  Colaborador(String m){
    Map<String, dynamic> map = jsonDecode(m);
    this.nombreCompleto  = map['nombreCompleto'];
    this.tipoColaborador = map['tipoColaborador'];
    this.aporte = map['aporte'];
  }
}

void main(){
  String json = '{"nombreCompleto": "Juanes", "tipoColaborador": 1, "aporte": 10000.0}';

  Colaborador c = Colaborador(json);

  print(c.nombreCompleto);
  print(c.aporte);
  print(c.tipoColaborador);
}