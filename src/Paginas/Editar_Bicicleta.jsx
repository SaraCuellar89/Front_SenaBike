import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Formu_Editar_Bicicleta from "../Componentes/Formu_Editar_Bicicleta";

const Editar_Bicicleta = () => {

    const navigate = useNavigate()


    // ------------------ Obtener informacion de la bicicleta por su id ------------------
    const id_url = useParams()
    const id_bicicleta = id_url.id_bicicleta

    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [color, setColor] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");

    const [altitud, setAltitud] = useState(4.616609873947949);
    const [longitud, setLongitud] = useState(-74.09218564248098);


    useEffect(() => {
      const Obtener_info_bicicleta = async () => {
          try{
              const res = await fetch('https://back-sena-bike.vercel.app/bicicleta_id_administrador', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({id_bicicleta})
              })

              const datos = await res.json()

              if(datos.success){
                  console.log(datos.data[0])
                  setNombre(datos.data[0].Nombre_Centro)
                  setMarca(datos.data[0].Marca)
                  setColor(datos.data[0].Color)
                  setPrecio(datos.data[0].Precio_Alquiler)
                  setAltitud(datos.data[0].Altitud)
                  setLongitud(datos.data[0].Longitud)
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

      Obtener_info_bicicleta()
    }, [])


    useEffect(() => {
      if (altitud === "" || longitud === "") {
        setAltitud(4.616609873947949);
        setLongitud(-74.09218564248098);
      }
    }, [altitud, longitud]);

    

    // ------------------ Editar Bicicletas ------------------
    const Editar_Bicicleta = async (e) => {
      e.preventDefault()

      try{
          const confirmar = confirm('¿Quiere finalizar el proceso?')

          if(!confirmar) return
          
          const res = await fetch('https://back-sena-bike.vercel.app/editar_bicicleta', {
              method: 'PUT',
              headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({id_bicicleta, marca, color, precio_alquiler: precio, nombre_centro: nombre, altitud, longitud, imagen})
          })

          const datos = await res.json()

          if(datos.success){
              alert('Bicicleta actualizada correctamente')
              navigate('/Bicicletas_Administrador')
          }
          else{
              console.log('no')
          }
      }
      catch(error){
          console.error('Error: ' + error)
      }
    }


    // ------------------ Cancelar Edicion ------------------
    const Cancelar_Edicion = () => {
      const confirmar = confirm('¿Quiere deshacer los cambios?')

      if(!confirmar) return

      navigate('/Bicicletas_Administrador')
    }
    

    return(
        <div className="contenedor_inicio_sesion">
            <div>
                <Encabezado/>
                <div>
                    <Formu_Editar_Bicicleta
                        Editar_Bicicleta={Editar_Bicicleta}
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
                        Cancelar_Edicion={Cancelar_Edicion}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Editar_Bicicleta
