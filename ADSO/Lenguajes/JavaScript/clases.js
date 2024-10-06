
class Player{
    // Atributos
    _nombre = ""
    _color = ""

    // Metodo Constructor
    constructor(nombre,color){
        this._nombre = nombre
        this._color = color
    }

    // Metodo Normal

    saludar(){
        return `hola mi nombre es ${this._nombre}, y soy de color ${this._color}`;
    }

    // Metodo Get y Set

    get nombre(){
        return this._nombre
    }

    set nombre(newNombre){
        this._nombre = newNombre
    }

    // Metodo Estatico

    static saludo(){
        return console.log("Hola pe")
    }

}

// Instanciar
let p1 = new Player("Juan","Rojo");
let p2 = new Player("Pedro","Azul");

console.log(p1.saludar())
console.log(p2.saludar())

// GET
console.log(p1.nombre);

// SET
p1.nombre = "Juancho"
console.log(p1.nombre);


// STATIC
Player.saludo()


//-------------------------------------------------------------------------//


// HERENCIA

class Animal {
    _name = ""

    set name(newName){
        this._name = newName
    }
}

class Perro extends Animal {
    _raza = ""

    set raza (newRaza){
        this._raza = newRaza
    }

    Presentacion(){
        return console.log(`Hola mi perr@ se llama ${this._name} y es de la raza ${this._raza}`)
    }
}



let perro = new Perro();

perro.name = "Kiara"
perro.raza = "Pug"

perro.Presentacion()