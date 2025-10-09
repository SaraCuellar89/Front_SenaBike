import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Eventos from "./Paginas/Eventos";
import Bicicletas from "./Paginas/Bicicletas";
import Inicio_Sesion from "./Paginas/Inicio_Sesion";
import Registro from "./Paginas/Registro";
import Perfil_Usuario from "./Paginas/Perfil_Usuario";
import Estadisticas from "./Paginas/Estadisticas";
import Eventos_Administrador from "./Paginas/Eventos_Administrador";
import Editar_Evento from "./Paginas/Editar_Evento";
import Perfil_Administrador from "./Paginas/Perfil_Administrador";
import Bicicletas_Administrador from "./Paginas/Bicicletas_Administrador";
import Editar_Bicicleta from "./Paginas/Editar_Bicicleta";

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Eventos" element={<Eventos/>}/>
        <Route path="/Bicicletas" element={<Bicicletas/>}/>
        <Route path="/Inicio_Sesion" element={<Inicio_Sesion/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Perfil_Usuario" element={<Perfil_Usuario/>}/>
        <Route path="/Perfil_Administrador" element={<Perfil_Administrador/>}/>
        <Route path="/Estadisticas" element={<Estadisticas/>}/>
        <Route path="/Eventos_Administrador" element={<Eventos_Administrador/>}/>
        <Route path="/Editar_Evento/:id_evento" element={<Editar_Evento/>}/>
        <Route path="/Editar_Bicicleta/:id_bicicleta" element={<Editar_Bicicleta/>}/>
        <Route path="/Bicicletas_Administrador" element={<Bicicletas_Administrador/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
