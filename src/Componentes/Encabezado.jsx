import React, { useEffect } from "react";
import perfil from "../img/perfil.png"
import '../Componentes/css/Encabezado.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const Encabezado = () => {

    const [info, setInfo] = useState(null)

    useEffect(() => {
        const Obtener_info_usuario = async () => {
            const res = await fetch('https://back-sena-bike.vercel.app/info_usuario', {
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                setInfo(datos.data[0])
            }
            else{
                console.log('No hay usuario en sesion')
            }
        }

        Obtener_info_usuario()
    }, [])

    return(
        <div className="contenedor_encabezado">
            <p>SenaBike</p>

            <div>
                {info && info.Rol === 'Administrador' ? 
                (<>
                    <Link to={'/Estadisticas'}>Estadisticas</Link>
                    <Link to={'/Eventos_Administrador'}>Eventos</Link>
                    <Link to={'/Bicicletas_Administrador'}>Bicicletas</Link>
                </>) : 
                (<>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/Eventos'}>Eventos</Link>
                    <Link to={'/Bicicletas'}>Bicicletas</Link>
                </>)}

                {info ? 
                (info.Rol === 'Administrador' ? 
                    (<Link to={'/Perfil_Administrador'}><img src={perfil} alt="perfil"/></Link>) : 
                    (<Link to={'/Perfil_Usuario'}><img src={perfil} alt="perfil"/></Link>)) :
                (<Link to={'/Inicio_Sesion'}><img src={perfil} alt="perfil"/></Link>)}
            </div>
        </div>
    )
}

export default Encabezado
