import React from "react";
import '../Componentes/css/Tarjeta_Bicicleta.css'

const Tarjeta_Bicicleta = ({info_bicicletas, Alquilar_Bicicleta}) => {
    return(
        <>
            {info_bicicletas.map((b) => (
                <div className="contenedor_tarjeta_bicicleta" key={b.ID_Bicicletas}>
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
                            <p>Estado:</p>
                            {b.Estado === null || b.Estado === 'Pagado' ? 
                            (<p>Disponible</p>) :
                            (<p>Alquilada</p>)}
                        </div>
                        <div>
                            <p>Alquiler:</p>
                            <p>{b.Precio_Alquiler}</p>
                        </div>
                    </div>

                    {b.Estado === null || b.Estado === 'Pagado' ?
                    (<button onClick={() => Alquilar_Bicicleta(b.ID_Bicicletas, b.Nombre_Centro)} title={b.Nombre_Centro}>¡Alquilar!</button>) :
                    (<button className="alquilada" title={b.Nombre_Centro} disabled>¡Rentada!</button>)}
                    
                </div>
            ))}
        </>
    )
}

export default Tarjeta_Bicicleta