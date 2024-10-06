class Dog:
    def __init__(self, raza=None, edad=None, peso=None):
        self.raza = raza
        self.edad = edad
        self.peso = peso
class Moto:
    def __init__(self, marca=None, color=None, modelo=None):
        self.marca = marca
        self.color = color
        self.modelo = modelo

class Peli:
    def __init__(self, genero=None, edad_max_permitida=None, fecha_de_estreno=None):
        self.genero = genero
        self.edad_max_permitida = edad_max_permitida
        self.fecha_de_estreno = fecha_de_estreno


a = Dog(raza="Doberman", edad=7, peso=35)

b = Moto(marca="Suzuki", color="Negro", modelo="DR 150 FI")

c = Peli(genero="Acción", edad_max_permitida=18, fecha_de_estreno=25072024)



print(a.__dict__)  
print(b.__dict__)  
print(c.__dict__) 