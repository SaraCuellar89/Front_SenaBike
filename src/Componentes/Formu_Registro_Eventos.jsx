import React from "react";
import paisaje from "../img/ruta_4.jpg"

const Formu_Registro_Eventos = ({Registrar_Eventos, nombre_evento, setNombre_evento, descripcion, setDescripcion, fecha_inicio, setFecha_inicio, fecha_fin, setFecha_fin, imagen_evento, setImagen_evento, }) => {
    return (
    <div className="contenedor_formu_inicio_sesion">
      <form onSubmit={Registrar_Eventos}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre_evento}
            onChange={(e) => setNombre_evento(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="fecha_inicio">Fecha inicio</label>
          <input
            type="date"
            id="fecha_inicio"
            value={fecha_inicio}
            onChange={(e) => setFecha_inicio(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="fecha_fin">Fecha fin</label>
          <input
            type="date"
            id="fecha_fin"
            value={fecha_fin}
            onChange={(e) => setFecha_fin(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="imagen">Imagen (URL)</label>
          <input
            type="text"
            id="imagen"
            value={imagen_evento}
            onChange={(e) => setImagen_evento(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>

      <div>
        <img src={paisaje} alt="Vista previa" />
      </div>
    </div>
  )
}

export default Formu_Registro_Eventos