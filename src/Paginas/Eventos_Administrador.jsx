import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/Eventos.css'
import Footer from "../Componentes/Footer";
import Actividad_Administrador from "../Componentes/Actividad_Administrador";

const Eventos_Administrador = () =>{

    const navigate = useNavigate()

    const [eventos, setEventos] = useState([])

    // ------------------ Listar Eventos ------------------
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


    // ------------------ Eliminar Evento ------------------
    const Eliminar_Evento = async (id_evento, nombre) => {
        try{
            const confirmar = confirm(`¿Quiere eliminar el evento ${nombre}?`)

            if(!confirmar) return

            const res = await fetch('https://back-sena-bike.vercel.app/eliminar_evento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id_evento})
            })

            const datos = await res.json()

            if(datos.success){
                alert('Evento eliminado correctamente')
                navigate(0)
            }
            else{
                alert('No se pudo eliminar el evento')
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
                    <Actividad_Administrador
                        eventos={eventos}
                        Eliminar_Evento={Eliminar_Evento}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Eventos_Administrador
