=begin
Ejemplo de Gestión de Contactos
1.Definir un Contacto: Cada contacto tendrá un nombre y una edad.
2.Agregar un Contacto: Función para agregar un contacto a una lista.
3.Mostrar Todos los Contactos: Función para mostrar todos los contactos.
4.Buscar un Contacto: Función para buscar un contacto por nombre.
=end

# Definimos un método para agregar un contacto a la lista

def agregar_contacto(contactos, nombre = "User", edad = "No definida")
  puts "Insertar nombre:"
  nombre_input = gets.chomp
  puts "Insertar edad:"
  edad_input = gets.chomp

  nombre = nombre_input.empty? ? nombre : nombre_input
  edad = edad_input.empty? ? edad : edad_input.to_i

  contactos << { nombre: nombre, edad: edad }
end

# Definimos un método para mostrar todos los contactos
def mostrar_contactos(contactos)
  puts "Lista de contactos:"
  contactos.each_with_index do |contacto, index|
    puts "#{index + 1}. Nombre: #{contacto[:nombre]}, Edad: #{contacto[:edad]}"
  end
end

# Definimos un método para buscar un contacto por nombre
def buscar_contacto(contactos, nombre)
  encontrado = contactos.find { |contacto| contacto[:nombre].downcase == nombre.downcase }
  if encontrado
    puts "Contacto encontrado: Nombre: #{encontrado[:nombre]}, Edad: #{encontrado[:edad]}"
  else
    puts "Contacto no encontrado."
  end
end

# Inicializamos una lista vacía de contactos
contactos = []

# Menú principal
loop do
  puts "Menú de Gestión de Contactos"
  puts "1. Agregar contacto"
  puts "2. Mostrar todos los contactos"
  puts "3. Buscar contacto"
  puts "4. Salir"
  print "Elige una opción: "
  opcion = gets.chomp.to_i

  case opcion
  when 1
    agregar_contacto(contactos)
    puts "-----------------------------------------------------"
  when 2
    mostrar_contactos(contactos)
    puts "-----------------------------------------------------"
  when 3
    print "Ingrese el nombre del contacto a buscar: "
    nombre = gets.chomp
    buscar_contacto(contactos, nombre)
    puts "-----------------------------------------------------"
  when 4
    puts "Saliendo del programa."
    break
    puts "-----------------------------------------------------"
  else
    puts "Opción no válida. Intenta de nuevo."
    puts "-----------------------------------------------------"
  end
end


=begin
# Explicación del Código

1. Función 'agregar_contacto':
  ○ Solicita al usuario el nombre y la edad del contacto.
  ○ Si el usuario no ingresa un valor, se usa un valor predeterminado ("User" para el nombre y "No definida" para la edad).
  ○ Agrega el contacto a la lista de contactos (contactos).

2. Función mostrar_contactos:
  ○ Recorre la lista de contactos y los muestra en la consola con su índice correspondiente.
  ○ Función buscar_contacto:

3. Solicita al usuario el nombre del contacto a buscar.
  ○ Busca en la lista de contactos un contacto cuyo nombre coincida (ignorando mayúsculas y minúsculas).
  ○ Muestra el contacto si lo encuentra, o un mensaje indicando que no se encontró.

4.Menú Principal:
  ○ Presenta un menú al usuario con opciones para agregar, mostrar, buscar contactos o salir del programa.
  ○ Utiliza un bucle loop para continuar mostrando el menú hasta que el usuario elija salir (opción 4).

Este ejemplo práctico te muestra cómo utilizar funciones en Ruby para organizar y manejar tareas específicas dentro de un programa más grande, facilitando la gestión y reutilización del código.
=end
