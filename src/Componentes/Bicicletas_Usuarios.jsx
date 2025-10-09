import React, { useState } from "react";
import '../Componentes/css/Bicicletas_Usuarios.css'

const Bicicletas_Usuarios = ({palabra, setMostrarModal, setInfo_bicicleta, info_bicicletas_usuario}) => {

    if(!info_bicicletas_usuario || info_bicicletas_usuario.length === 0){
        return(
            <h3>No has alquilado ninguna Bicicleta</h3>
        )
    }

    return(
        <>
            {info_bicicletas_usuario.map((b) => (
                <div className="contenedor_bicicletas_usuario" key={b.ID_Bicicletas}>
                    <div>
                        <img src={b.Imagen} alt="" />
                    </div>

                    <div>
                        <div>
                            <p>Marca:</p>
                            <p>{b.Marca}</p>
                        </div>
                        <div>
                            <p>Color:</p>
                            <p>{b.Color}</p>
                        </div>
                        <div>
                            <p>Alquiler:</p>
                            <p>${b.Precio_Alquiler}</p>
                        </div>
                    </div>

                
                    <div>
                        <button onClick={() => {
                            setMostrarModal(true)
                            setInfo_bicicleta(b)
                        }}>{palabra}</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Bicicletas_Usuarios