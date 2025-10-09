import React from "react";
import '../Componentes/css/Opciones_Inicio.css'
import cicla from "../img/cicla_1.png"
import inicio_sesion from "../img/inicio_sesion.png"
import { Link } from "react-router-dom";

const Opciones_Inicio = () => {
    return(
        <div className="contenedor_opciones_inicio">
            <div className="opcion_1">
                <div></div>

                <div>
                    <img src={cicla} alt="" />
                </div>

                <div>
                    <Link to={'/Bicicletas'}>¡Alquila una bicicleta!</Link>
                </div>
            </div>


            <div className="opcion_2">
                <div>
                    <Link to={'/Registro'}>¡Regisrate Aqui!</Link>
                </div>

                <div></div>

                <div>
                    <img src={inicio_sesion} alt="" />
                </div>
            </div> 
        </div>
    )
}

export default Opciones_Inicio