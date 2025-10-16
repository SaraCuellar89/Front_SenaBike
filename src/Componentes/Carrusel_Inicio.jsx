import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Componentes/css/Carrusel_Inicio.css'
import { Link } from "react-router-dom";

const Carrusel_Inicio = ({eventos}) => {

    //Configuracion del carrusel
    var settings = {
        infinite: true,          // Permite que el carrusel vuelva al inicio al llegar al último slide (bucle infinito)
        speed: 800,            // Duración de la animación de transición entre slides (en milisegundos)
        autoplay: true,          // Activa el desplazamiento automático de los slides
        autoplaySpeed: 3000,        // Tiempo que el carrusel espera antes de pasar al siguiente slide (en milisegundos)
        pauseOnHover: true,      // Pausa el autoplay cuando el usuario pasa el mouse sobre el carrusel
        swipeToSlide: true,     // Si es true, permite arrastrar (swipe) libremente al siguiente slide con el dedo o mouse
        slidesToShow: 1,         // Cantidad de slides visibles al mismo tiempo
        slidesToScroll: 1        // Cantidad de slides que avanza cada vez
    };
    return(
        <div className="contenedor_carrusel_inicio">
            <p>¡Participa en algun evento!</p>

            <Slider {...settings} className="carrusel_inicio">
                {eventos.map((e) => (
                    <div className="evento_carrusel_inicio">
                        <div>
                            <img src={e.Imagen} alt="" />
                        </div>
                        <div>
                            <p>{e.Nombre}</p>

                            <p>{e.Descripcion}</p>

                            <Link to={'/Eventos'}>
                                <button>¡Participar!</button>
                            </Link>
                        </div>                    
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carrusel_Inicio
