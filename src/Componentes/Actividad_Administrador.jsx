import React from "react";
import '../Componentes/css/Actividad.css'
import { Link } from "react-router-dom";

const Actividad_Administrador = ({eventos, Eliminar_Evento}) => {
    return(
        <>
            {eventos.map((e) => (
                <div className="contenedor_actividad" key={e.ID_Eventos}>
                    <div>
                        <img src={e.Imagen} alt="" />
                    </div>

                    <div>
                        <p>{e.Nombre}</p>

                        <p>{e.Descripcion}</p>

                        <p>Del "{e.Fecha_Inicio.split('T')[0]}" al "{e.Fecha_Fin.split('T')[0]}"</p>
                    </div>

                
                    <div>
                        <Link to={`/Editar_Evento/${e.ID_Eventos}`}>
                            <button>Editar</button>
                        </Link>
                        <button onClick={() => Eliminar_Evento(e.ID_Eventos, e.Nombre)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Actividad_Administrador