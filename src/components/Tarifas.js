import React from 'react'
import TarjetaTarifa from './TarjetaTarifa'
import { useNavigate } from 'react-router-dom';


const Tarifas = ({ tarifas, seleccionaTarifa, tarifaSeleccionada }) => {

    const navigate = useNavigate();

    const seleccionaTarifaYRedirige = (id) => {
        seleccionaTarifa(id)
        setTimeout(() => {
            navigate('/NuevoEnvio')
        }, 1000);
    }

    return (
        <div id="content" className=" m-0 p-4" style={{ width: "100%" }}>
            <br /> <br />
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Tarifas</h1>
                <p className="lead">Ofrecemos los mejores precios con las condiciones que mejor se adaptan a ti. Queremos llegar donde los demás no llegan y para eso te ofrecemos más opciones de personalización.</p>
            </div>
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {tarifas.map((tarifa) => (
                        <TarjetaTarifa
                            seleccionada={tarifaSeleccionada == tarifa.id}
                            tarifa={tarifa}
                            seleccionaTarifa={seleccionaTarifaYRedirige} />
                    ))}
                </div>
            </div>
            <br />
        </div>
    )
}

export default Tarifas
