Attribute VB_Name = "Módulo1"
Sub funt()
    cantidad = InputBox("Cantidad de nombres")
    For i = 2 To cantidad + 1
        nombre = Cells(i, 1)
        a = Len(nombre)
        For x = 1 To a
            sw = Mid(nombre, x, 1)
            Cells(i, x + 1) = sw
        Next x
    Next i
End Sub
