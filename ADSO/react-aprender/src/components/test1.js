import React, { useState } from 'react'


export const Test1 = () => {
    
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        if (tarea.trim()=== '') return;
        setTareas([...tareas, tarea]);
        setTarea('');
    }

    const eliminarTarea = (index) => {
        const nuevaTarea = tareas.filter((_, i)=> i !== index);
        setTareas(nuevaTarea)
    }

    return (
        <div className='App'>
            <h1>Lista De Tareas</h1>
            <input 
                type='text'
                value={tarea}
                onChange={e => setTarea(e.target.value)}
                placeholder='Escriba Tarea'
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((t, index)=> (
                    <li className='lista'>
                        {t}
                        <button onClick={() => eliminarTarea(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
