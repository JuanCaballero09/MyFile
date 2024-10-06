## Clases abstractas en Dart
Una clase abstracta en Dart se define como aquellas clases que contienen uno o más de un método abstracto (métodos sin implementación) en ellas. Mientras que para declarar una clase abstracta hacemos uso de la palabra clave abstract . Por lo tanto, debe tenerse en cuenta que una clase declarada abstracta puede o no incluir métodos abstractos, pero si incluye un método abstracto, entonces debe ser una clase abstracta.

### Características de la clase abstracta:  

- Una clase que contiene un método abstracto debe declararse abstracta, mientras que la clase declarada abstracta puede o no tener métodos abstractos, es decir, puede tener métodos abstractos o concretos.
- Una clase se puede declarar abstracta utilizando solo la palabra clave abstracta .
- Una clase declarada como abstracta no se puede inicializar.
- Una clase abstracta se puede ampliar, pero si hereda una clase abstracta, debe asegurarse de que todos los métodos abstractos en ella se proporcionen con implementación.
Generalmente, las clases abstractas se utilizan para implementar los métodos abstractos en las subclases extendidas.

Sintaxis: 

```
abstract class class_name {

    // Body of the abstract class
    
}
```

Anulación del método abstracto de una clase abstracta.