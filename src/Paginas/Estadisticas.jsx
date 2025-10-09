import React, { useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Formu_Calculo from "../Componentes/Formu_Calculo";
import '../Paginas/css/Estadisticas.css'

const Estadisticas = () => {

    // ------------------ Calcular ganancias mensuales ------------------
    const [mes, setMes] = useState(10)
    const [extras, setExtras] = useState(10000)
    const [ano, setAno] = useState(2025)
    const [ingresos_mensuales, setIngresos_mensuales] = useState('')
    const [ganancias_netas, setGanancias_netas] = useState('')

    const Calcular = async (e) => {
        e.preventDefault()

        try{
            //Validar mes
            if(mes > 12 || mes < 1){
                alert('Fecha invalida')
                return
            }

            const res = await fetch('https://back-sena-bike.vercel.app/obtener_cifra_mensual', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({mes, ano, extras})
            })

            const datos = await res.json()

            if(datos.success){
                setIngresos_mensuales(datos.data.cifra)
                setGanancias_netas(datos.data.ganacias_mensuales)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <div className="contenedor_estadisticas">
            <div>
                <Encabezado/>
                <div>
                    <Formu_Calculo
                        Calcular={Calcular}
                        mes={mes}
                        setMes={setMes}
                        ano={ano}
                        setAno={setAno}
                        extras={extras}
                        setExtras={setExtras}
                        ingresos_mensuales={ingresos_mensuales}
                        ganancias_netas={ganancias_netas}
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Estadisticas
