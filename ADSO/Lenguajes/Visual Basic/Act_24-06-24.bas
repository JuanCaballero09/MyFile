Attribute VB_Name = "Módulo1"
Sub funt()
    nm = Cells(2, 2)
    For Z = 2 To 8
        Cells(Z + 1, Z + 1) = nm
        Cells(Z, Z) = ""
        For t = 1 To 20000000
        Next t
    Next Z
    
    For y = 8 To 2 Step -1
        Cells(y, 9) = nm
        Cells(y + 1, 9) = ""
        For t = 1 To 40000000
        Next t
    Next y
    
    For x = 8 To 2 Step -1
        Cells(2, x) = nm
        Cells(2, x + 1) = ""
        For t = 1 To 40000000
        Next t
    Next x
End Sub

