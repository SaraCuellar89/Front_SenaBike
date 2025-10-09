import React from "react";
import paisaje from "../img/ruta_2.jpg"
import '../Componentes/css/Formu_Inicio_Sesion.css'
import { Link } from "react-router-dom";

const Formu_Inicio_Sesion = ({ver, Iniciar_Sesion, documento, setDocumento, contrasena, setContrasena, Mostrar_contrasena}) => {
    return(
        <div className="contenedor_formu_inicio_sesion">
            <div>
                <img src={paisaje} alt="" />
            </div>

            <form action="" onSubmit={Iniciar_Sesion}>
                <div>
                    <label htmlFor="documento">Documento</label>
                    <input type="number" name="documento" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="contrasena">Contrasena</label>
                    {ver === false ? 
                    (<input type="password" name="contrasena" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>) :
                    <input type="text" name="contrasena" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>}

                    {ver === false ? 
                    (<p onClick={Mostrar_contrasena}>Ver</p>) : 
                    (<p onClick={Mostrar_contrasena}>Ocultar</p>)}
                </div>

                <div>
                    <button type="submit">¡Entrar!</button>
                    <Link to={'/Registro'}>¿No tienes Cuenta?</Link>
                </div>
            </form>
        </div>
    )
}

export default Formu_Inicio_Sesion