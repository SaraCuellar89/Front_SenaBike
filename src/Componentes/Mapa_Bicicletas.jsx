import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Componentes/css/Bicicletas_Mapa_Administrador.css";


//cambiar la vista cuando cambian las coordenadas
function CambiarVista({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center[0] && center[1]) {
      map.flyTo(center, map.getZoom()); // animación suave
    }
  }, [center, map]);

  return null;
}


const Mapa_Bicicletas = ({altitud, longitud, info_bicicletas}) => {
  
    return(
        <div className="contenedor_mapa_administrador">
            {/* Mapa */}
            <MapContainer center={[altitud, longitud]} zoom={13} scrollWheelZoom={true} className="mapa_bicicletas_mapa_administrador">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* 🔁 Actualiza la vista cuando cambian las coordenadas */}
                <CambiarVista center={[altitud, longitud]} />

                {info_bicicletas.map((b) => (
                    <Marker position={[b.Altitud, b.Longitud]} key={b.ID_Bicicletas}>
                      <Popup>
                        <h3>{b.Nombre_Centro}</h3>
                        <p>{b.Marca}</p>
                        {b.Estado === null || b.Estado === 'Pagado' 
                          ? <p style={{ color: 'green' }}>Disponible</p> 
                          : <p style={{ color: 'red' }}>No disponible</p>
                        }
                      </Popup>
                  </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Mapa_Bicicletas