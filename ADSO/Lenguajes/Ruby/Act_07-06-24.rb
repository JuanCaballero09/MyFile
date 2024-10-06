puts "Ingresar cantidad de personas participando"
i = gets.chomp.to_i
puts "----------------------------------------------------------------"

a = 0
b = 0
c = 0
z = 0
x = 0

for m in 1..i
  puts "Cantidad de dinero aportado"
  v = gets.chomp.to_i

  a = a + v

  if v >= 5000
    b = b + 1
    z = z + v
  else
    c = c + 1
    x = x + v
  end
end

puts "El total recaudado es: $#{a}"
puts "El promedio por persona es: $#{a / i}"

puts "----------------------------------------------------------------"

puts "El total que recaudaron los que pusieron más de $5000 es: $#{z}"
puts "La cantidad de personas que pusieron más de $5000 son: #{b}"
puts "El promedio de los que pusieron más de $5000 es: $#{z / b}"

puts "----------------------------------------------------------------"

puts "El total que recaudaron los que pusieron menos de $5000 es: $#{x}"
puts "La cantidad de personas que pusieron menos de $5000 son: #{c}"
puts "El promedio de los que pusieron menos de $5000 es: $#{x / c}"
