class Dog{
  String? raza;
  int? edad;
  int? peso;
}

class Moto{
  String? marca;
  String? color;
  String? modelo;
}

class Peli {
  String? genero;
  int? edadMaxPermitida;
  int? fechaDeEstreno;
}


void main(){
  Dog a = new Dog();

  a.raza = "Doberman";
  a.edad = 7;
  a.peso = 35;

  Moto b = new Moto();

  b.marca = "Suzuki";
  b.color = "Negro";
  b.modelo = "DR 150 FI";

  Peli c = new Peli();

  c.genero = "Acción";
  c.edadMaxPermitida = 18;
  c.fechaDeEstreno = 25072024;

  
}