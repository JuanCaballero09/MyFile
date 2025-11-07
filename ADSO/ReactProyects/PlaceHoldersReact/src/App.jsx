import './App.css'
import { useState, useEffect } from 'react'
import {UserCard} from './UserCard.jsx'


export function App() {
    const [success, setSucces] = useState([])
    const [loading, setLoading] = useState(true)
    const [failed, setFailed] = useState(false)

    useEffect(()=>{
        const obtenerUsers = async () => {
            try{
                const respuesta = await fetch('https://dummyjson.com/users');
                if (!respuesta.ok) {
                    setFailed(true)
                    throw new Error ('Error en la peticion')
                }
                const datos = await respuesta.json();

                setTimeout(()=>{
                    setSucces(datos.users);
                    setLoading(false)
                }, 3000)

            } catch (error) {
                console.error('Error al obtener los datos:', error)
                setFailed(true)
                setLoading(false)
            }
        };

        obtenerUsers();
    }, []);

    return (
        <>  
            {loading ? (
                <section className='loading-widget'>
                    <h1>BIENVENIDO AL SOFTWARE</h1> 
                    <h2>Cargando...</h2>
                </section>
            ) : failed ? (
                <section className='failed-widget'>
                    <h1>Se ha Producido un error inesperado</h1>
                    <h2>Comprueba tu estado de red o contacta a soporte</h2>
                </section>
            ) : (
                <section className='UsersCards'> 
                    {success.map(user =>{
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