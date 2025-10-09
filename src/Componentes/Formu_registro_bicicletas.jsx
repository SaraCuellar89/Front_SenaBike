import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Componentes/css/Formu_registro_bicicletas.css";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});



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


//detecta clics en el mapa y actualiza las coordenadas
function ClickEnMapa({ setAltitud, setLongitud }) {
  useMapEvents({
    click(e) {
      setAltitud(e.latlng.lat);
      setLongitud(e.latlng.lng);
    },
  });
  return null;
}



const Formu_registro_bicicletas = ({altitud, longitud, setAltitud, setLongitud, nombre, setNombre, marca, setMarca, color, setColor, precio, setPrecio, imagen, setImagen, Registrar_bicicleta}) => {
  
  return (
    <div className="contenedor_formu_registro_bicicletas">

      {/* Mapa */}
      <MapContainer center={[altitud, longitud]} zoom={12} scrollWheelZoom={true} className="mapa_formu_registro_bicicletas">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🔁 Actualiza la vista cuando cambian las coordenadas */}
        <CambiarVista center={[altitud, longitud]} />

        {/* 👆 Detecta clics en el mapa */}
        <ClickEnMapa setAltitud={setAltitud} setLongitud={setLongitud} />

        <Marker position={[altitud, longitud]}>
          <Popup>
            📍 soy un puntito
          </Popup>
        </Marker>
      </MapContainer>


      {/* Formulario */}
      <form action="" onSubmit={Registrar_bicicleta}>
        <div>
          <label htmlFor="nombre">Nombre Centro</label>
          <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="marca">Marca</label>
          <input type="text" name="marca" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="precio">Precio Alquiler</label>
          <input type="number" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required/>
        </div>

        <div>
          <label htmlFor="">Coordenadas</label>
          <input type="number" name="altitud" id="altitud" value={altitud} onChange={(e) => setAltitud(Number(e.target.value))} required/>
          <input type="number" name="longitud" id="longitud" value={longitud} onChange={(e) => setLongitud(Number(e.target.value))} required/>
        </div>

        <div>
          <label htmlFor="imagen">Imagen</label>
          <input type="text" name="imagen" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required/>
        </div>

        <button type="submit">Registrar</button>
                    
      </form>

    </div>
  );
};

export default Formu_registro_bicicletas;
