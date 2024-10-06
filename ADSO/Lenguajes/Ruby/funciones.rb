=begin
1. Las funciones:
  Una función es un bloque de código diseñado para realizar una tarea específica.
  Cada función tiene un nombre y puede ser llamada desde cualquier parte del programa, lo que permite reutilizar el código sin tener que escribirlo varias veces.
--------------------------------------------------------------------------------------------------------------------------
2. Parametros
  tambien tenemos que tener en cuenta los parametros que son los parámetros son variables que se utilizan para recibir valores que se pasan a una función cuando esta es llamada. Los parámetros permiten que las funciones sean más flexibles y reutilizables, ya que pueden operar con diferentes datos cada vez que se llaman.
--------------------------------------------------------------------------------------------------------------------------
1.1 Definiendo Funciones en ruby
  En Ruby, las funciones (también conocidas como métodos) se definen utilizando la palabra clave def, seguida por el nombre del método y, opcionalmente, una lista de parámetros. Al final del método se utiliza la palabra clave end para indicar que la definición del método ha terminado.

=end

def saludar
  puts "hola"
end

# Llamando al método
# Para llamarlo solo pones el nombre del metodo o función

saludar
#------------------------------------------------------------------------------------------------------------------------------------

=begin
1.2 Valores por Defecto para Parámetros
  Ruby permite definir valores por defecto para los parámetros. Si no se pasa un valor para un parámetro con un valor por defecto, se utilizará el valor por defecto.
=end

def saludar(nombre = "amigo")
  puts "¡Hola, #{nombre}!"
end

# Llamando al método sin argumentos
saludar          # Salida: ¡Hola, amigo!
# Llamando al método con un argumento
saludar("María") # Salida: ¡Hola, María!

#------------------------------------------------------------------------------------------------------------------------------------

=begin
1.3. Métodos con Múltiples Parámetros
  Puedes definir métodos que acepten múltiples parámetros.
=end

def sumar(a, b)
  return a + b
end

# Llamando al método con dos argumentos
resultado = sumar(3, 5)
puts resultado  # Salida: 8
