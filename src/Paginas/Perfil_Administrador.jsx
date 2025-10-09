import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Formu_registro_bicicletas from "../Componentes/Formu_registro_bicicletas";
import Encabezado_Usuario from "../Componentes/Encabezado_Usuario";
import '../Paginas/css/Perfil_Administrador.css'
import Formu_Registro_Eventos from "../Componentes/Formu_Registro_Eventos";

const Perfil_Administrador = () => {

    const navigate = useNavigate()

    const [mostrar, setMostrar] = useState("bicicletas")

    // ------------------ Obtener informarion del usuario ------------------
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
    

    // ------------------ Registrar bicicleta ------------------
    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [color, setColor] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");

    const Registrar_bicicleta = async (e) => {
    e.preventDefault()

    try{
        const res = await fetch('https://back-sena-bike.vercel.app/registrar_bicicleta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({marca, color, precio_alquiler:precio, nombre_centro: nombre, altitud, longitud, imagen})
        })

        const datos = await res.json()

        if(datos.success){
        alert('Se registro una bicicleta')
            navigate(0)
        }
        else{
        console.log('no')
        }
    }
    catch(error){
        console.error('Error: ' + error)
    }
    }


    const [altitud, setAltitud] = useState(4.616609873947949);
    const [longitud, setLongitud] = useState(-74.09218564248098);

    useEffect(() => {
    if (altitud === "" || longitud === "") {
        setAltitud(4.616609873947949);
        setLongitud(-74.09218564248098);
    }
    }, [altitud, longitud]);



    // ------------------ Registrar evento ------------------
    const [nombre_evento, setNombre_evento] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha_inicio, setFecha_inicio] = useState("");
    const [fecha_fin, setFecha_fin] = useState("");
    const [imagen_evento, setImagen_evento] = useState("");

    const Registrar_Eventos = async (e) => {
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

            const res = await fetch('https://back-sena-bike.vercel.app/registrar_evento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre:nombre_evento, descripcion, fecha_inicio, fecha_fin, imagen: imagen_evento})
            })

            const datos = await res.json()

            if(datos.success){
                alert('Evento registrado correctamente')
                navigate(0)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    return(
        <div className="contenedor_perfil_administrador">
            <div>
                <Encabezado/>
                
                {info_usuario.length === 0 ?
                (
                    <h3>No hay inicio de sesion</h3>
                ) : 
                (
                    <div>
                        <Encabezado_Usuario
                            setMostrar={setMostrar}
                            info_usuario={info_usuario}
                            Cerrar_Sesion={Cerrar_Sesion}
                        /> 

                        {mostrar === "bicicletas" ? 
                            (<div className="">
                                <Formu_registro_bicicletas
                                    Registrar_bicicleta={Registrar_bicicleta}
                                    altitud={altitud}
                                    setAltitud={setAltitud}
                                    longitud={longitud}
                                    setLongitud={setLongitud}
                                    nombre={nombre}
                                    setNombre={setNombre}
                                    marca={marca}
                                    setMarca={setMarca}
                                    color={color}
                                    setColor={setColor}
                                    precio={precio}
                                    setPrecio={setPrecio}
                                    imagen={imagen}
                                    setImagen={setImagen}
                                />
                            </div>) :
                            ((<div className="">
                                <Formu_Registro_Eventos
                                    Registrar_Eventos={Registrar_Eventos}
                                    nombre_evento={nombre_evento}
                                    setNombre_evento={setNombre_evento}
                                    descripcion={descripcion}
                                    setDescripcion={setDescripcion}
                                    fecha_inicio={fecha_inicio}
                                    setFecha_inicio={setFecha_inicio}
                                    fecha_fin={fecha_fin}
                                    setFecha_fin={setFecha_fin}
                                    imagen_evento={imagen_evento}
                                    setImagen_evento={setImagen_evento}
                                />
                            </div>))
                        } 
                    </div>
                )}

                <Footer/>
            </div>
        </div>
    )
}

export default Perfil_Administrador
