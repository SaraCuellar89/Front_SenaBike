import React from "react";
import '../Componentes/css/Actividad.css'

const Actividad = ({palabra, eventos, Agregar_Participacion}) => {
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
                        <button onClick={() => Agregar_Participacion(e.ID_Eventos, e.Nombre)}>{palabra}</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Actividad