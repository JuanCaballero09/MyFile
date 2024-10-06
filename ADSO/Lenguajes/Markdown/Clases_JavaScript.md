## Clases
Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.

### Declaración de clases
Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y un nombre para la clase .


```
// Declaración de Variables

Class Persona{
    // Programa
}
```
### Instancia

```
let p = new Pesona();
```
### Atributo

```
Calss Persona{
    
    edad = 10
    nombre = "Juan"

}
```

### Método

```
class Persona{
  
// Método constructor

    constructor(nombre, edad) {
        this._nombre = nombre; 
        this._edad = edad;     
    }

// Método normal

    edad(){
        return this.edad;
    }
}
```

### Método Get y Set
```
class Persona{
    
    _nombre = ""
    
    // Set

    set nombre(newNombre){
        this._nombre = newNombre
    }

    // Get

    get nombre(){
        return this._nombre
    }
}
```

### Método Estáticos
```
Class Persona {

    static saludo(){
        return "Hola"
    }
}
```

### Herencia

herencia se refiere a transmitir características de un padre a un hijo para que un nuevo fragmento de código pueda reutilizarse y desarrollarse a partir de las características de uno existente. JavaScript implementa la herencia mediante el uso de objetos. Cada objeto tiene un enlace interno a otro objeto llamado prototype (prototipo).

```
class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
}

class Perro extends Animal {
    constructor(raza) {
        this._raza = raza;
    }
}

```