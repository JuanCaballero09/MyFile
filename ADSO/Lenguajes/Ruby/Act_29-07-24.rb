class Dog
  attr_accessor :raza, :edad, :peso
end

class Moto
  attr_accessor :marca, :color, :modelo
end

class Peli
  attr_accessor :genero, :edad_max_permitida, :fecha_de_estreno
end

a = Dog.new
a.raza = "Doberman"
a.edad = 7
a.peso = 35

b = Moto.new
b.marca = "Suzuki"
b.color = "Negro"
b.modelo = "DR 150 FI"

c = Peli.new
c.genero = "Acción"
c.edad_max_permitida = 18
c.fecha_de_estreno = 25072024
