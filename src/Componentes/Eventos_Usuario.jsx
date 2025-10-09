import React from "react";
import '../Componentes/css/Eventos_Usuario.css'

const Eventos_Usuarios = ({palabra, info_eventos_usuario, Cancelar_Evento}) => {

    if(!info_eventos_usuario || info_eventos_usuario.length === 0){
        return(
            <h3>No estas participando en ningun Evento</h3>
        )
    }

    return(
        <>
         {info_eventos_usuario.map((e) => (
            <div className="contenedor_eventos_usuario" key={e.ID_Eventos}>
                <div>
                    <img src={e.Imagen} alt="" />
                </div>

                <div>
                    <p>{e.Nombre}</p>

                    <p>{e.Descripcion}</p>
                    
                    <p>Del "{e.Fecha_Inicio.split('T')[0]}" al "{e.Fecha_Fin.split('T')[0]}"</p>
                </div>

                <div>
                    <button onClick={() => Cancelar_Evento(e.ID_Eventos, e.Nombre)}>{palabra}</button>
                </div>
            </div>
         ))}   
        </>
    )
}

export default Eventos_Usuarios