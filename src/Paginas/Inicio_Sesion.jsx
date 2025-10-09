import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/Inicio_Sesion.css'
import Footer from "../Componentes/Footer";
import Formu_Inicio_Sesion from "../Componentes/Formu_Inicio_Sesion";

const Inicio_Sesion = () => {

    const navigate = useNavigate()

    // ------------------ Iniciar Sesion ------------------
    const [documento, setDocumento] = useState('')
    const [contrasena, setContrasena] = useState('')

    const Iniciar_Sesion = async (e) => {
        e.preventDefault()
        
        try{
            const res = await fetch('https://back-sena-bike.vercel.app/iniciar_sesion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    documento, contrasena
                })
            })

            const datos = await res.json()

            if(datos.success){
                alert(`¡Hola ${datos.data.nombre}!`)
                
                if(datos.data.rol === 'Administrador'){
                    navigate('/Perfil_Administrador')
                }
                else{
                    navigate('/Perfil_Usuario')
                }
            }
            else{
                alert('No se pudo iniciar sesion')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    // ------------------ Ver contraseña ------------------
    const [ver, setVer] = useState(false)

    const Mostrar_contrasena = () => {
        if(ver === true){
            setVer(false)
        }
        else{
            setVer(true)
        }
    }

    return(
        <div className="contenedor_inicio_sesion">
            <div>
                <Encabezado/>
                <div>
                    <Formu_Inicio_Sesion
                        Iniciar_Sesion={Iniciar_Sesion}
                        documento={documento}
                        setDocumento={setDocumento}
                        contrasena={contrasena}
                        setContrasena={setContrasena}
                        Mostrar_contrasena={Mostrar_contrasena}
                        ver={ver}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Inicio_Sesion
