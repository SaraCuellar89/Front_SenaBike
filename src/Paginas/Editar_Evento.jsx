import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Formu_Editar_Evento from "../Componentes/Formu_Editar_Evento";

const Editar_Evento = () => {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha_inicio, setFecha_inicio] = useState("");
    const [fecha_fin, setFecha_fin] = useState("");
    const [imagen, setImagen] = useState("");


    // ------------------ Obtener informarion del evento por su id ------------------
    const id_url = useParams()
    const id_evento = id_url.id_evento

    useEffect(() => {
        const Obtener_Info_Evento = async () => {
            try{

                const res = await fetch('https://back-sena-bike.vercel.app/evento_id_administrador', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id_evento})
                })

                const datos = await res.json()

                if(datos.success){
                    setNombre(datos.data[0].Nombre)
                    setDescripcion(datos.data[0].Descripcion)
                    setFecha_inicio(datos.data[0].Fecha_Inicio.split('T')[0])
                    setFecha_fin(datos.data[0].Fecha_Fin.split('T')[0])
                    setImagen(datos.data[0].Imagen)
                }
                else{
                    console.log('no')
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Info_Evento()
    }, [])


    // ------------------ Editar Evento ------------------
    const Editar_Evento = async (e) => {
        e.preventDefault()

        try{
            //Validacion de fechas:
            let hoy = new Date();
            let fecha_actual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];

            if(fecha_inicio < fecha_actual){
                alert('La fecha de inicio no puede ser menor a la actual')
                return
            }
            else if(fecha_fin < fecha_actual){
                alert('La fecha de finalizacion no puede ser menor a la actual')
                return
            }
            else if(fecha_fin < fecha_inicio){
                alert('La fecha de finalizacion no puede ser menor a la fecha de inicio')
                return
            }


            const res = await fetch('https://back-sena-bike.vercel.app/editar_evento', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_evento, nombre, descripcion, fecha_inicio, fecha_fin, imagen})
            })

            const datos = await res.json()

            if(datos.success){
                alert('Evento Actualizado')
                navigate('/Eventos_Administrador')
            }
            else{
                alert('No se pudo actualizar el evento')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    // ------------------ Cancelar Actualizacion ------------------
    const Cancelar_Actualizacion = () =>{
        const confirmar = confirm('¿Quiere deshacer los cambios?')
        if(!confirmar) return
        navigate('/Eventos_Administrador')
    }

    

    return(
        <div className="contenedor_inicio_sesion">
            <div>
                <Encabezado/>
                <div>
                    <Formu_Editar_Evento
                        Editar_Evento={Editar_Evento}
                        nombre={nombre}
                        setNombre={setNombre}
                        descripcion={descripcion}
                        setDescripcion={setDescripcion}
                        fecha_inicio={fecha_inicio}
                        setFecha_inicio={setFecha_inicio}
                        fecha_fin={fecha_fin}
                        setFecha_fin={setFecha_fin}
                        imagen={imagen}
                        setImagen={setImagen}
                        Cancelar_Actualizacion={Cancelar_Actualizacion}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Editar_Evento
