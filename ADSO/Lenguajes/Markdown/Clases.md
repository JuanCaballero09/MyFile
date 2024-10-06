## Clases

En programación orientada a objetos (POO), una clase es una plantilla o un modelo que define un tipo particular de objeto. Las clases encapsulan datos (atributos) y métodos (funciones o procedimientos) que operan sobre esos datos. Son la piedra angular de la POO, permitiendo la creación de objetos que son instancias de estas clases.

### Tipos de Clases y Definiciones

1. **Clases Base o Superclases:**
   - **Definición:** Son clases que se utilizan como base para derivar otras clases. No se instancian directamente, sino que proporcionan atributos y métodos comunes que pueden ser heredados por las subclases.
   - **Ejemplo:** En un sistema de vehículos, `Vehiculo` podría ser una clase base con atributos como `marca` y `modelo` y métodos como `arrancar()`.

2. **Subclases o Clases Derivadas:**
   - **Definición:** Son clases que heredan de una clase base. Pueden añadir nuevos atributos y métodos, así como modificar los existentes de la clase base.
   - **Ejemplo:** `Coche` y `Moto` podrían ser subclases de `Vehiculo`, añadiendo atributos específicos como `numeroDePuertas` para `Coche`.

3. **Clases Abstractas:**
   - **Definición:** Son clases que no pueden ser instanciadas directamente y generalmente contienen al menos un método abstracto (un método declarado, pero sin implementación). Se utilizan para definir interfaces comunes para sus subclases.
   - **Ejemplo:** `Forma` podría ser una clase abstracta con un método `calcularArea()` que debe ser implementado por subclases como `Circulo` y `Rectangulo`.

4. **Clases Concretas:**
   - **Definición:** Son clases que se pueden instanciar directamente. Tienen implementaciones completas de todos sus métodos.
   - **Ejemplo:** `Empleado` podría ser una clase concreta con atributos como `nombre` y `salario`, y métodos como `calcularSalario()`.

5. **Clases Anidadas:**
   - **Definición:** Son clases definidas dentro de otras clases. Pueden ser estáticas o no estáticas.
   - **Ejemplo:** En una clase `Orden`, podrías tener una clase `Producto` que representa los productos de esa orden.

6. **Clases Estáticas:**
   - **Definición:** Son clases que no pueden ser instanciadas y todos sus métodos y atributos son estáticos, lo que significa que pertenecen a la clase en sí misma, no a instancias de la clase.
   - **Ejemplo:** En Java, una clase `Utilidades` con métodos estáticos para realizar operaciones matemáticas.

7. **Clases Singleton:**
   - **Definición:** Son clases diseñadas para permitir solo una única instancia. Se utiliza un patrón de diseño para asegurar que solo haya una instancia de la clase durante la ejecución del programa.
   - **Ejemplo:** Una clase `Configuracion` que carga las configuraciones de una aplicación y asegura que solo haya una configuración global.

8. **Clases Internas o Inner Classes:**
   - **Definición:** Son clases definidas dentro de otra clase. Pueden acceder a los miembros de la clase externa.
   - **Ejemplo:** Una clase `Nodo` dentro de una clase `ListaEnlazada`, donde `Nodo` representa los elementos individuales de la lista.

9. **Clases Metaclases:**
   - **Definición:** Son clases de clases, es decir, clases cuyas instancias son otras clases. Se utilizan en lenguajes que permiten la manipulación y creación dinámica de clases.
   - **Ejemplo:** En Python, `type` es una metaclase por defecto que puede crear nuevas clases.

Cada tipo de clase tiene su propósito y se utiliza en diferentes contextos para lograr una estructura de código más modular, reutilizable y fácil de mantener.