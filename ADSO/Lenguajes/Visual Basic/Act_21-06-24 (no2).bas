Attribute VB_Name = "Módulo2"
Sub funt2()
    For i = 1 To 9
        sw = Cells(3, i)
        Cells(3, i + 1) = sw
        Cells(3, i) = ""
        MsgBox ("continuar")
    Next i
    Cells(3, 1) = sw
    Cells(3, 10) = ""
End Sub
