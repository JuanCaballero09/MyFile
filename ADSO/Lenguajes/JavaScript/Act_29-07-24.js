class Dog{
    constructor(raza, edad, peso){
        this.raza = raza;
        this.edad = edad;
        this.peso = peso;
    }
}

class Moto {
    constructor(marca, color, modelo) {
      this.marca = marca;
      this.color = color;
      this.modelo = modelo;
    }
}
  
class Peli {
    constructor(genero, edadMaxPermitida, fechaDeEstreno) {
      this.genero = genero;
      this.edadMaxPermitida = edadMaxPermitida;
      this.fechaDeEstreno = fechaDeEstreno;
    }
}


const a = new Dog("Doberman", 7, 35);

const b = new Moto("Suzuki", "Negro", "DR 150 FI");

const c = new Peli("Acción", 18, 25072024);

console.log(a)
console.log(b)
console.log(c)