import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/Eventos.css'
import Footer from "../Componentes/Footer";
import Actividad from "../Componentes/Actividad";

const Eventos = () => {

    const navigate = useNavigate()

    // ------------------ Listar Eventos ------------------
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        const Listar_Eventos = async () => {
            try{
                const res = await fetch('https://back-sena-bike.vercel.app/listar_eventos')
                const datos = await res.json()

                if(datos.success){
                    setEventos(datos.data)
                }
                else{
                    console.log('No se pudo obtener los datos')
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Listar_Eventos()
    }, [])


    // ------------------ Agregar participacion de un usuario ------------------
    const Agregar_Participacion = async (id_evento, nombre) => {
        try{
            const res = await fetch('https://back-sena-bike.vercel.app/participar_evento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({id_evento})
            })

            const datos = await res.json()

            if(datos.success){
                alert(`¡Ahora estas participando en ${nombre}!`)
                navigate('/Perfil_Usuario')
            }
            else if(datos.message === 'el usuario ya esta participando en esta actividad'){
                alert('Ya estas particiando en este evento')
            }
            else{
                alert('Tienes que iniciar sesion para participar en un evento')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    return(
        <div className="contenedor_eventos">
            <div>
                <Encabezado/>
                <div>
                    <Actividad 
                        palabra="¡Participar!"
                        eventos = {eventos}    
                        Agregar_Participacion = {Agregar_Participacion}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Eventos
