import React from "react";
import paisaje from "../img/ruta_3.jpg"
import { Link } from "react-router-dom";
import '../Componentes/css/Formu_Inicio_Sesion.css'

const Formu_Registro = ({Registrar_Usuario, nombre, setNombre, rol, setRol, documento, setDocumento, estrato, setEstrato, correo, setCorreo, contrasena, setContrasena, ver, Mostrar_contrasena}) => {

    return(
        <div className="contenedor_formu_inicio_sesion">
            <form action="" onSubmit={Registrar_Usuario}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="rol">Rol</label>
                    <select name="rol" id="rol" value={rol} onChange={(e) => setRol(e.target.value)} required>
                        <option value="" hidden>Selecciona...</option>
                        <option value="Aprendiz" >Aprendiz</option>
                        <option value="Funcionario" >Funcionario</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="documento">Documento</label>
                    <input type="number" name="documento" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="estrato">Estrato</label>
                    <select name="estrato" id="estrato" value={estrato} onChange={(e) => setEstrato(e.target.value)}>
                        <option value="" hidden>Selecciona...</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <input type="email" name="correo" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
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
                    <button type="submit">¡Registrarte!</button>
                    <Link to={'/Inicio_Sesion'}>¡Inicia Sesion!</Link>
                </div>
            </form>

            <div>
                <img src={paisaje} alt="" />
            </div>
        </div>
    )
}

export default Formu_Registro