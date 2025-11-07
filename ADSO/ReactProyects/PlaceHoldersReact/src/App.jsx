import './App.css'
import { useState, useEffect } from 'react'
import {UserCard} from './UserCard.jsx'


export function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const obtenerUsers = async () => {
            try{
                const respuesta = await fetch('https://dummyjson.com/users');
                if (!respuesta.ok) {
                    throw new Error ('Error en la peticion')
                }
                const datos = await respuesta.json();

                setTimeout(()=>{
                    setUsers(datos.users);
                    setLoading(false)
                }, 3000)

            } catch (error) {
                console.error('Error al obtener los datos:', error)
                setLoading(false)
            }
        };

        obtenerUsers();
    }, []);

    return (
        <>
            {loading ? (
                <section className='loading-widget'>
                    <h1>BIENVENIDO</h1> 
                    <h2>Cargando...</h2>
                </section>
            ):(
                <section className='UsersCards'> 
                    {users.map(user =>{
                        const {id, firstName, lastName, image, phone, email} = user;
                        return (
                            <UserCard 
                            key={id}
                            firstName={firstName}
                            lastName={lastName}
                            image={image}
                            phone={phone}
                            email={email}
                            />
                        );
                    })}

                </section>
            )}
            
        </>
    )
}