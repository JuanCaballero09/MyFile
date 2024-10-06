def contador
  j = 0

  puts '--------------------------------------'
  puts 'Para detener el programa escribe "stop"'
  puts '--------------------------------------'

  while true
    print "Introducir numero: "
    n = gets.chomp

    if n.downcase == "stop"
      break
    else
      m = n.to_i
      j += m
    end
  end

  puts '-------------------------'
  puts j
end

puts "Ejecutar programa Y/N"
y_n = gets.chomp.downcase

if y_n == "y"
  contador
end
