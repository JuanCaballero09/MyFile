a = 0
i = 0

z = 0
b = 0

x = 0
c = 0

while a < 100000
  puts "Cantidad de dinero aportado"
  cant = gets.to_i

  a += cant
  i += 1

  if cant >= 5000
    b += 1
    z += cant
  else
    c += 1
    x += cant
  end
end

puts "El total recaudado es $#{a}"
puts "El promedio por persona es de $#{a / i}"

puts "----------------------------------------------------------------"

puts "El total que recaudaron los que pusieron más de $5k es: $#{z}"
puts "La cantidad de personas que pusieron más de $5k son: #{b}"
puts "El promedio de los que pusieron más de $5k es: $#{z / b}"

puts "----------------------------------------------------------------"

puts "El total que recaudaron los que pusieron menos de $5k es: $#{x}"
puts "La cantidad de personas que pusieron menos de $5k son: #{c}"
puts "El promedio de los que pusieron menos de $5k es: $#{x / c}"
