Attribute VB_Name = "Módulo3"
Sub funt3()
    num = dt.Cells(1, 7) + 4
    
    dt.Cells(num, 1) = reg.Cells(5, 5)
    dt.Cells(num, 2) = reg.Cells(7, 5)
    dt.Cells(num, 3) = reg.Cells(9, 5)
    reg.Cells(5, 5) = ""
    reg.Cells(7, 5) = ""
    reg.Cells(9, 5) = ""
    
    a = dt.Cells(1, 7) + 1
    
    dt.Cells(1, 7) = a
    
    MsgBox "Guardado..."
End Sub
