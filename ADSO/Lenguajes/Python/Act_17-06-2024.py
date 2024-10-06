n = int(input("Cantidad de aprendices:"))

for x in range (0,n):
    nm = input("Introduce tu nombre:")
    a = len(nm)
    nm_inv = ""
    for i in range (a-1,-1,-1):      
        s = nm[i]
        nm_inv += s

    print("tu nombre es: " + nm + " y la forma inversa es: " + nm_inv)
