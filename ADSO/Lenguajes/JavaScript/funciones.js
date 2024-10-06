function saludar(nombre,sexo){
    sexo = sexo.toLowerCase()

    if (sexo == "mujer"){
        adjetivo = "mina"
    } else if (sexo == "hombre"){
        adjetivo = "maquina" 
    } else {
        adjetivo = "guapo"
    }
    console.log("hola " + nombre + " ¿como andas " + adjetivo+"?")
}
/*------------------------------------------------*/
console.log(saludar("juan", "HOMbre"))

