class Transporte {
  String? marca;
}

class Terrestre extends Transporte {
  int? llantas;
}

class Aereo extends Transporte {
  int? motores;
}

class Auto extends Terrestre {
  bool? aire;
}

class Moto extends Terrestre {
  int? cascos;
}

class Avion extends Aereo {
  static void manual() {
    print("Manual");
  }
}

//---------------------------------------------------------------//

void main() {
  Auto car = new Auto();
  car.marca = "Mercedes";
  car.llantas = 4;
  car.aire = true;
  //----------------------//
  Moto moto = new Moto();
  moto.marca = "Ninja";
  moto.llantas = 2;
  moto.cascos = 2;
  //----------------------//
  Avion avion = new Avion();
  avion.marca = "Boeing";
  avion.motores = 4;
  Avion.manual();
}
