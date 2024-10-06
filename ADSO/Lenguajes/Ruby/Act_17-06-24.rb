puts "Cantidad de aprendices:"
n = gets.chomp.to_i

for x in 1..n
  puts "Introduce tu nombre:"
  nm = gets.chomp
  a = nm.length - 1
  nm_inv = ""
  for i in (a..0).step(-1)
    s = nm[i]
    nm_inv += s
  end
  puts("tu nombre es: " + nm + " y la forma inversa es: " + nm_inv)
end
