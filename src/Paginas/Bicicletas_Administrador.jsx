import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Mapa_Bicicletas from "../Componentes/Mapa_Bicicletas";
import Listar_Bicicletas from "../Componentes/Listar_Bicicletas";
import '../Paginas/css/Bicicletas_Administrador.css'

const Bicicletas_Administrador = () => {

    const navigate = useNavigate()

    // ------------------ Listar todas la bicicletas ------------------
    const [info_bicicletas, setInfo_bicicletas] = useState([])
    const [altitud, setAltitud] = useState(4.5981);
    const [longitud, setLongitud] = useState(-74.0760);

    useEffect(() => {
        const Obtener_Bicicletas = async () => {
            try{
                const res = await fetch('https://back-sena-bike.vercel.app/listar_bicicletas_usuarios')
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

    useEffect(() => {
    if (altitud === "" || longitud === "") {
        setAltitud(4.5981);
        setLongitud(-74.0760);
    }
    }, [altitud, longitud]);



    // ------------------ Eliminar bicicleta ------------------
    const Eliminar_Bicicleta = async (id_bicicleta) => {
        try{
            const confirmar = confirm('¿Quiere eliminar esa bicicleta?')

            if(!confirmar) return

            const res = await fetch('https://back-sena-bike.vercel.app/eliminar_bicicleta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id_bicicleta})
            })

            const datos = await res.json()

            if(datos.success){
                alert('Se elimino la bicicleta')
                navigate(0)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }
    
    return(
        <div className="contenedor_bicicletas_administrador">
            <div>
                <Encabezado/>
                <div>
                    <div>
                        <Listar_Bicicletas
                            info_bicicletas={info_bicicletas}
                            Eliminar_Bicicleta={Eliminar_Bicicleta}
                        />
                    </div>
                    <Mapa_Bicicletas
                        altitud={altitud}
                        longitud={longitud}
                        info_bicicletas={info_bicicletas}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Bicicletas_Administrador
