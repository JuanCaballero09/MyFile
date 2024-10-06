def saludar(nombre, sexo)
  sexo = sexo.downcase

  if sexo == "mujer"
    adjetivo = "mina"
  elsif sexo == "hombre"
    adjetivo = "maquina"
  else
    adjetivo = "guapo"
  end

  puts "Hola #{nombre}, ¿cómo andas #{adjetivo}?"
end

# Input
for m in 1..3

  puts "Sexo:"
  sexo = gets.chomp
  puts "Nombre:"
  nombre = gets.chomp

  saludar(nombre, sexo)
  puts ("-------------------------------------------------")
end
