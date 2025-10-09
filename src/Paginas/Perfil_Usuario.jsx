import React, { useState, useEffect } from "react";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Encabezado_Usuario from "../Componentes/Encabezado_Usuario";
import '../Paginas/css/Perfil_Usuario.css'
import Bicicletas_Usuarios from "../Componentes/Bicicletas_Usuarios";
import Eventos_Usuarios from "../Componentes/Eventos_Usuario";
import Modal_Pago from "../Componentes/Modal_Pago";
import { useNavigate } from "react-router-dom";

const Perfil_Usuario = () => {

    const navigate = useNavigate()

    const [mostrar, setMostrar] = useState("bicicletas")
    

    // ------------------ Obtener informacion del usuario ------------------
    const [info_usuario, setInfo_usuario] = useState([])

    useEffect(() => {
        const Obtener_info_usuario = async () => {
            try{
                const res = await fetch('https://back-sena-bike.vercel.app/info_usuario', {
                    credentials: 'include'
                })

                const datos = await res.json()

                if(datos.success){
                    setInfo_usuario(datos.data)
                }
            }
            catch(error){
                console.error('No se pudo obtener la informacion del usuario')
            }
        }

        Obtener_info_usuario()
    }, [])



    // ------------------ Cerrar Sesion ------------------
    const Cerrar_Sesion = async () =>{
        try{
            let confirmar = confirm('¿Quiere cerrar su cuenta?')

            if(!confirmar) return

            const res = await fetch('https://back-sena-bike.vercel.app/cerrar_sesion', {
                method: 'POST',
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                alert('¡Saliste de tu cuenta!')
                navigate('/Inicio_Sesion')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    // ------------------ Mostrar bicicletas o eventos del usuario ------------------
    const [mostrarModal, setMostrarModal] = useState(false)
    const [info_bicicleta, setInfo_bicicleta] = useState([])


    // ------------------ Cerrar Modal ------------------
    const cancelar = () => {
        alert('¡Aun conservas la bicicleta!')
        navigate('/Perfil_Usuario')
    }


    // ------------------ Obtener bicicletas del usuario ------------------
    const [info_bicicletas_usuario, setInfo_bicicletas_usuario] = useState([])

    useEffect(() => {
        const Obtener_bicicletas_usuario = async () => {
            const res = await fetch('https://back-sena-bike.vercel.app/bicicletas_usuario', {
                credentials: 'include'
            })
            const datos = await res.json()

            if(datos.success){
                setInfo_bicicletas_usuario(datos.data)
            }
            else{
                setInfo_bicicletas_usuario([])
                console.log('no')
            }
        }

        Obtener_bicicletas_usuario()
    }, [])


    // ------------------ Estados para obtener descuento dependiendo del estrato ------------------
    const [precio, setPrecio] = useState(null)



    // ------------------ Obtener informacion del usuario ------------------
    const [estrato, setEstrato] = useState(null)
    
    useEffect(() => {
        const Obtener_info_usuario = async () => {
            const res = await fetch('https://back-sena-bike.vercel.app/info_usuario', {
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                setEstrato(datos.data[0].Estrato)
            }
            else{
                console.log('No hay usuario en sesion')
            }
        }

        Obtener_info_usuario()
    }, [])


    // ------------------ Devolver Bicicleta ------------------
    const Devolver_Bicicleta = async (e) => {
        e.preventDefault()
        
        try{
            const id_bicicleta = info_bicicleta.ID_Bicicletas

            const res = await fetch('https://back-sena-bike.vercel.app/devolver_bicicleta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({id_bicicleta, total_pagado: precio})
            })

            const datos = await res.json()

            if(datos.success){
                alert('¡Pago realizado con exito!')
                navigate(0)
            }
            else{
                alert('No se pudo completar el pago')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }



    // ------------------ Obtener eventos del usuario ------------------
    const [info_eventos_usuario, setInfo_eventos_usuario] = useState([])

    useEffect(() => {
        const Obtener_Eventos_Usuario = async () => {
            const res = await fetch('https://back-sena-bike.vercel.app/eventos_usuario', {
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                setInfo_eventos_usuario(datos.data)
            }
        }

        Obtener_Eventos_Usuario()
    }, [])


    // ------------------ Cancelar evento ------------------
    const Cancelar_Evento = async (id_evento, nombre) => {
        try{
            const confirmar = confirm('¿Quieres dejar de participar en este evento?')

            if(!confirmar) return

            const res = await fetch('https://back-sena-bike.vercel.app/cancelar_evento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({id_evento})
            })

            const datos = await res.json()

            if(datos.success){
                alert(`¡Cancelaste tu participacion en ${nombre}!`)
                navigate(0)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }
    

    return(
        <div className="contenedor_perfil_usuario">
            <div>
                <Encabezado/>
                {info_usuario.length === 0 ? 
                (
                    <h3>No hay inicio de sesion</h3>
                ) : 
                (
                    <>
                        <div>
                            <Encabezado_Usuario
                                setMostrar={setMostrar}
                                info_usuario={info_usuario}
                                Cerrar_Sesion={Cerrar_Sesion}
                            /> 

                            {mostrar === "bicicletas" ? 
                                (<div className="bicicletas_perfil_usuario">
                                    <Bicicletas_Usuarios 
                                        palabra = {'Devolver'} 
                                        setMostrarModal = {setMostrarModal}
                                        setInfo_bicicleta = {setInfo_bicicleta}
                                        info_bicicletas_usuario = {info_bicicletas_usuario}
                                    />
                                </div>) :
                                ((<div className="eventos_perfil_usuario">
                                    <Eventos_Usuarios 
                                        palabra = {'Cancelar'}
                                        info_eventos_usuario = {info_eventos_usuario}
                                        Cancelar_Evento = {Cancelar_Evento}
                                    />
                                </div>))
                            } 
                        </div>

                        {mostrarModal && <Modal_Pago 
                            cancelar={() => setMostrarModal(false)} 
                            Devolver_Bicicleta = {Devolver_Bicicleta}
                            precio = {precio}
                            setPrecio = {setPrecio}
                            estrato = {estrato}
                            info_bicicleta = {info_bicicleta}
                            />
                        }
                    </>
                )}
                <Footer/>
            </div>
        </div>
    )
}

export default Perfil_Usuario
