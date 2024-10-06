class Player
  # Atributos
  attr_accessor :nombre, :color


  # Metodo Constructor

  def initialize(nombre = "Desconcido", color = "no seleccionado")
    @nombre = nombre
    @color = color
  end

  # Metodo Normal

  def saludar
    "hola mi nombre es #{@nombre}, y soy de color #{@color}"
  end

  # Metodo Get y Set

  def nombre
    @nombre
  end

=begin
  def initialize(nombre)
    @nombre = nombre
  end
=end

  # Metodo Estatico

  def self.saludo
    puts("Hola pe")
  end

end

# Instanciar
p1 = Player.new("Juan", "Rojo")
p2 = Player.new("Pedro", "Azul")

puts(p1.saludar)
puts(p2.saludar)

# GET
puts(p1.nombre)

# SET
p1.nombre = "Juancho"
puts(p1.nombre)

# STATIC
Player.saludo

#-------------------------------------------------------------------------

# HERENCIA

class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class Perro < Animal
  attr_accessor :raza


  def initialize()
    @raza = raza
  end

  def Presentacion
    puts("Hola mi perr@ se llama #{@name} y es de la raza #{@raza}")
  end
end


perro = Perro.new()

perro.name = "Kiara"
perro.raza = "Pug"

perro.Presentacion()
