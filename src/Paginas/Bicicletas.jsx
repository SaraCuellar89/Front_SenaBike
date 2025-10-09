import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/Bicicletas.css'
import Footer from "../Componentes/Footer";
import Tarjeta_Bicicleta from "../Componentes/Tarjeta_Bicicleta";

const Bicicletas = () => {

    const navigate = useNavigate()

    // ------------------ Listar todas la bicicletas ------------------
    const [info_bicicletas, setInfo_bicicletas] = useState([])

    useEffect(() => {
        const Obtener_Bicicletas = async () => {
            try{
                const res = await fetch('https://back-sena-bike.vercel.app/listar_bicicletas', {
                    credentials: 'include',
                )
                const datos = await res.json()

                if(datos.success){
                    setInfo_bicicletas(datos.data)
                    
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }   
        }

        Obtener_Bicicletas()
    }, [])


    // ------------------ Alquilar Bicicleta ------------------
    const Alquilar_Bicicleta = async (id_bicicleta, nombre) => {
        try{
            const confirmar = confirm(`La bicicleta se encuentra en el "${nombre}" ¿Quieres alquilarla?`)

            if(!confirmar) return

            const res = await fetch('https://back-sena-bike.vercel.app/alquilar_bicicleta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({id_bicicleta})
            })

            const datos = await res.json()

            if(datos.success){
                alert('¡Alquilaste una bicicleta!')
                navigate('/Perfil_Usuario')
            }
            else{
                alert('Tienes que iniciar sesion para alquilar una bicicleta')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <div className="contenedor_bicicletas">
            <div>
                <Encabezado/>
                <div>
                    <Tarjeta_Bicicleta
                        info_bicicletas = {info_bicicletas}
                        Alquilar_Bicicleta = {Alquilar_Bicicleta}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Bicicletas
