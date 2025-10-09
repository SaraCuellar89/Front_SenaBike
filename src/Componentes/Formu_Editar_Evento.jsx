import React from "react";
import '../Componentes/css/Formu_Editar_Evento.css'

const Formu_Editar_Evento = ({Editar_Evento, nombre, setNombre, descripcion, setDescripcion, fecha_inicio, setFecha_inicio, fecha_fin, setFecha_fin, imagen, setImagen, Cancelar_Actualizacion}) => {
    return(
        <div className="contenedor_formu_editar_evento">
            <form action="" onSubmit={Editar_Evento}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
                </div>

                <div>
                    <label htmlFor="fecha_inicio">Fecha inicio</label>
                    <input type="date" name="fecha_inicio" id="fecha_inicio" value={fecha_inicio} onChange={(e) => setFecha_inicio(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="fecha_fin">Fecha fin</label>
                    <input type="date" name="fecha_fin" id="fecha_fin" value={fecha_fin} onChange={(e) => setFecha_fin(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="imagen">Imagen</label>
                    <input type="text" name="imagen" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required/>
                </div>

                <div>
                    <button type="submit">Editar</button>
                    <button type="button" onClick={Cancelar_Actualizacion} className="btn_editar">Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Formu_Editar_Evento