def saludar(nombre,sexo):
    sexo = sexo.lower()

    if sexo == "mujer":
        adjetivo = "mina"
    elif sexo == "hombre":
        adjetivo = "maquina" 
    else:
        adjetivo = "guapo"

    print(f"hola {nombre} ¿como andas {adjetivo}?")

for m in range(0, 3):
#input
    a = input("sexo: ")
    name = input("nombre: ")

    saludar(name, a)
    print("-------------------------------------------------")