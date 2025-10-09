import React, { useEffect } from "react";
import '../Componentes/css/Modal_Pago.css'

const Modal_Pago = ({cancelar, Devolver_Bicicleta, precio, setPrecio, estrato, info_bicicleta}) => {

    //Obtener descuento dependiendo del estrato
    useEffect(() => {
        if (!estrato || !info_bicicleta) return;
        const Obtener_precio = () => {
            const precio_alquiler = info_bicicleta.Precio_Alquiler
            let total = 0

            if(estrato === 1 || estrato === 2){
                alert('Aplicas a un descuento del 10%')
                total = precio_alquiler - ((10/100)*precio_alquiler)
                setPrecio(total)
            }
            else if(estrato === 3 || estrato === 4){
                alert('Aplicas a un descuento del 5%')
                total = precio_alquiler - ((5/100)*precio_alquiler)
                setPrecio(total)
            }
            else{
                setPrecio(precio_alquiler)
            }
        }

        Obtener_precio()
    }, [estrato, info_bicicleta])

    return(
        <div className="contenedor_modal_pago">
            <form action="" onSubmit={Devolver_Bicicleta}>
                <div>
                    <p>Total a pagar:</p>
                    <p>{precio === null ? "Calculando..." : `$${precio}`}</p>
                </div>

                <div>
                    <label htmlFor="">Metodo de pago</label>
                    <select name="" id="" required>
                        <option value="" hidden>Selecciona...</option>
                        <option value="">Nequi</option>
                        <option value="">DaviPlata</option>
                    </select>
                </div>

                <div>
                    <button type="submit">¡Pagar!</button>
                    <button type="button" onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Modal_Pago