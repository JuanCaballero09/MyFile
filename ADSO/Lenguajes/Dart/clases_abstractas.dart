abstract class Animal {
  void sonidoAnimal();
  void edad();
}

class Perro implements Animal {
  void sonidoAnimal(){
    print("GUAU");
  }
  void edad(){
    print("6 años");
  }
}