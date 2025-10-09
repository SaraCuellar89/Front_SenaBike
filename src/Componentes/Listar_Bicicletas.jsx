import React from "react";
import "../Componentes/css/Bicicletas_Mapa_Administrador.css";
import { Link } from "react-router-dom";

const Listar_Bicicletas = ({info_bicicletas, Eliminar_Bicicleta}) => {
    return(
        <div className="contenedor_bicicletas_mapa_administrador">

            {/* lista de todas las bicicletas */}
            {info_bicicletas.map((b) => (
                <div className="caja_bicicletas_mapa_administrador" key={b.ID_Bicicletas}>
                    <div>
                        <img src={b.Imagen} alt="" />
                        <div>
                            <div>
                                <p>Nombre del Centro:</p>
                                <p>{b.Nombre_Centro}</p>
                            </div>

                            <div>
                                <p>Especificaciones:</p>
                                <p>Marca: {b.Marca} - Color: {b.Color}</p>
                            </div>
                            {b.Estado === null || b.Estado === 'Pagado' ? 
                            (
                                <div>
                                    <p>Disponible</p>
                                </div>
                            ) : 
                            (
                                <div>
                                    <p>Usuario:</p>
                                    <p>{b.Nombre}</p>
                                    <p>{b.Documento}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <Link to={`/Editar_Bicicleta/${b.ID_Bicicletas}`}>
                            <button>Editar</button>
                        </Link>
                        <button onClick={() => Eliminar_Bicicleta(b.ID_Bicicletas)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Listar_Bicicletas