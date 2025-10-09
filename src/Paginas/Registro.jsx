import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import '../Paginas/css/Inicio_Sesion.css'
import Footer from "../Componentes/Footer";
import Formu_Registro from "../Componentes/Formu_Registro";

const Registro = () => {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState('')
    const [rol, setRol] = useState('')
    const [documento, setDocumento] = useState('')
    const [estrato, setEstrato] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')


    // ------------------ Registro de usuario ------------------
    const Registrar_Usuario = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch('https://back-sena-bike.vercel.app/registro_usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    nombre, rol, documento, estrato, correo, contrasena
                })
            })

            const datos = await res.json()

            if(datos.success){
                alert('¡Registro Exitoso!')
                navigate('/Inicio_Sesion')
            }
            else{
                alert('No se pudo completar el registro')
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
                    <Formu_Registro
                        Registrar_Usuario={Registrar_Usuario}
                        nombre={nombre}
                        setNombre={setNombre}
                        rol={rol}
                        setRol={setRol}
                        documento={documento}
                        setDocumento={setDocumento}
                        estrato={estrato}
                        setEstrato={setEstrato}
                        correo={correo}
                        setCorreo={setCorreo}
                        contrasena={contrasena}
                        setContrasena={setContrasena}
                        ver={ver}
                        Mostrar_contrasena={Mostrar_contrasena}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Registro
