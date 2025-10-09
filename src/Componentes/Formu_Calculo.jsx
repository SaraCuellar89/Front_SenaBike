import React from "react";
import '../Componentes/css/Formu_Calculo.css'

const Formu_Calculo = ({Calcular, mes, setMes, ano, setAno, extras, setExtras, ingresos_mensuales, ganancias_netas}) => {
    return(
        <div className="contenedor_formu_calculo">
            <form action="" onSubmit={Calcular}>
                <div>
                    <label htmlFor="">Fecha:</label>

                    <div>
                        <input type="number" name="mes" id="mes" value={mes} onChange={(e) => setMes(e.target.value)}  placeholder="Mes - Ejemplo: 1" required/>

                        <input type="number" name="ano" id="ano" value={ano} onChange={(e) => setAno(e.target.value)}  placeholder="Año - Ejemplo: 2025" required/>
                    </div>
                </div>

                <div>
                    <p>Ingresos Mensuales:</p>
                    <p>{ingresos_mensuales == '' ? 'Calculando...' : `$${ingresos_mensuales}`}</p>
                </div>

                <div>
                    <label htmlFor="extras">Gastos Extras:</label>
                    <input type="number" name="extras" id="extras" value={extras} onChange={(e) => setExtras(e.target.value)} required/>
                </div>

                <div>
                    <button type="submit">Calcular</button>
                </div>
            </form>

            <div>
                <p>Ganancias netas mensuales:</p>
                <input type="text" name="" id="" value={ganancias_netas == '' ? 'Calculando...' : `$${ganancias_netas}`} readOnly/>
            </div>
        </div>
    )
}

export default Formu_Calculo