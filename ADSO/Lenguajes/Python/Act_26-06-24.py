a = 0
i = 0

z = 0
b = 0

x = 0 
c = 0

while a < 100000:
    cant = int(input("Cantidad de dinero aportado "))

    a = a + cant
    i = i + 1

    if cant >= 5000:
        b = b + 1
        z = z + cant
    else:
        c = c + 1
        x = x + cant

print("----------------------------------------------------------------")

print("El total recaudado es $" + str(a) )
print("El promedio por persona es de $" + str((a/i)) )
  
print("----------------------------------------------------------------")

print("el total que recaudaron los que pusieron más de $5k es: $" + str(z))
print("la cantidad de personas que pusieron más de $5k son: " + str(b))
print("el promedio de los que pusieron más de $5k es: $" + str((z/b)))

print("----------------------------------------------------------------")
  
print("el total que recaudaron los que pusieron menos de $5k es: $" + str(x))
print("la cantidad de personas que pusieron menos de $5k son: " + str(c))
print("el promedio de los que pusieron menos de $5k es: $" + str((x/c)))
