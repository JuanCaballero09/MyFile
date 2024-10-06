#para hacer condicionales en python su estructura es:
condicion = 1
codigo = print ("hola")

if condicion:
    codigo
elif condicion:
    codigo
else:
    codigo


#ejemplo
edad = 16
if edad >= 50 and edad <= 70:
    print("Eres un abuelo")
elif edad >= 18:
    print("Eres mayor de edad")
else:
    print("eres menor de edad")