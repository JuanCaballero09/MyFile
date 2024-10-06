## Clases
Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.

### Declaración de clases
Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada class y un nombre para la clase .


```
Class Persona

    // Programa

end
```
### Instancia

```
persona = Persona.new()
```
### Atributo

```
Calss Persona
    
    attr_accessor :atributo1, :atributo2

end
```

### Método

```
class Persona
  
// Método constructor

    def initialize(n1 = "", n2 = "")

        @atributo1 = n1
        @atributo2 = n2
        
    end

// Método normal

    def nombre_metodo

        @atributo1

    end
end
```

### Método Get y Set
```
class Persona
    
    attr_accessor :nombre 
    
    // Set

    def newNombre(newNombre)
        @nombre = newNombre
    end

    // Get

    def nombre
        @nombre
    end
end
```

### Método Estáticos
```
Class Persona 

    def self.saludo
        "Hola"
    end
end
```

### Herencia

herencia se refiere a transmitir características de un padre a un hijo para que un nuevo fragmento de código pueda reutilizarse y desarrollarse a partir de las características de uno existente.

```
class Animal 
    def nombre(nombre)
        @nombre = nombre;
    end
end

class Perro < Animal 
    def raza(raza) 
        @raza = raza;
    end
end
```