import React, { useState } from "react";
import '../Componentes/css/Encabezado_Usuario.css'

const Encabezado_Usuario = ({setMostrar, info_usuario, Cerrar_Sesion}) => {
    return(
        <div className="contenedor_encabezado_usuario" >
            {info_usuario.map((u) => (
                <React.Fragment key={u.ID_Usuario}>
                    <div key={u.ID_Usuario}>
                        <div>
                            <p>{u.Nombre}</p>
                            <p>{u.Rol}</p>
                            <p>{u.Documento}</p>
                        </div>
                        
                        <button onClick={Cerrar_Sesion}>Salir</button>
                    </div>

                    <div>
                        <button onClick={() => setMostrar("bicicletas")}>Bicicletas</button>
                        <button onClick={() => setMostrar("eventos")}>Eventos</button>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Encabezado_Usuario