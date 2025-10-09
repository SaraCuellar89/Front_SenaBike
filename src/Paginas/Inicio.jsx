import React, { useEffect, useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import Carrusel_Inicio from "../Componentes/Carrusel_Inicio";
import '../Paginas/css/General.css'
import '../Paginas/css/Inicio.css'
import Footer from "../Componentes/Footer";
import Opciones_Inicio from "../Componentes/Opciones_Inicio";

const Inicio = () => {

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

    return(
        <div className="contenedor_inicio">
            <div>
                <Encabezado/>
                <div>
                    <Carrusel_Inicio
                        eventos = {eventos}
                    />
                    <Opciones_Inicio/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Inicio
