# -FOR-

# El ciclo for en python se usa asi
for i in range(1, 4):
    print (i)

# Ejemplo
print ("Número de estudiantes:")
n = int(input())

for i in range (0, n):
    print("nombre del estudiante:")
    m = input()

    print("Las notas van de 1 al 10")

    print("Nota 1:")
    n1 = int(input())

    print("Nota 2:")
    n2 = int(input())

    print("Nota 3:")
    n3 = int(input())

    sum = n1 + n2 + n3
    prom = sum / 3

    if prom > 6:
      print(f"El estudiante {m} paso la materia")
    else:
      print(f"El estudiante {m} no paso la materia")