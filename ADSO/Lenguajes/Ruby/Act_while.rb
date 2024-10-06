=begin
Ejercicio
  - Se pide ingresar los sueldos de los empleados de una compañía y sumarlos.
  - Cuando se ingresa un sueldo en cero (0) se termina la carga y se muestra el resultado de la sumatoria de los sueldos ingresados.
=end


while true
  puts "Introduce Sueldo:"
  n = gets.chomp.to_i

  if n == 0
    break
  else
    sueldo_total = sueldo_total.to_i + n
  end
end
puts ("el sueldo total es: #{sueldo_total}")
