import React, { useState } from 'react'

function Saludo(props){
    
    const [contador, setContador] = useState(0)
    const [texto, setTexto] = useState('')

    const frutas = ['Manzana', 'Pera', 'Uva', 'Banana']
    return (
    <div>
        <h2>!Hola, soy Juan¡</h2>
        <h2>!Hola, {props.nombre}¡</h2>

        <p>Veces echo click: {contador}</p>
        <button onClick={() => setContador(contador+1)}>click</button>

        <ul>
            {frutas.map((frutas, index) => (
                <li key={index}>{frutas}</li>
            ))}
        </ul>

        <h1>Tu Texto: {texto}</h1>
        <input type='text' onChange={input => setTexto(input.target.value)} placeholder='Pon tu texto'/>
    </div>

    )
}

export default Saludo;