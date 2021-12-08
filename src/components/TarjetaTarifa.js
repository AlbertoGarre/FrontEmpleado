import React from 'react'

const TarjetaTarifa = ({ seleccionada, pulsa, tarifa }) => {

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{tarifa.titulo}</h4>
            </div>
            <div className="card-body" onClick={() => pulsa(tarifa.key)} style={{ backgroundColor: seleccionada ? 'green' : 'white' }}>
                <h1 className="card-title pricing-card-title"> <small className={(seleccionada ? 'text-white' : 'text-muted')}>{tarifa.Precio} / envío</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {tarifa.Cualidades.map((Cualidad) => (
                        <li className={(seleccionada ? 'text-white' : '')}>{Cualidad}</li>
                    ))}
                </ul>
                <button type="button" style={{ backgroundColor: 'white' }} className={'btn btn-lg btn-block btn-outline-primary ' + (seleccionada ? 'text-success border-0 font-weight-bold' : 'text-muted')}>{seleccionada ? "Seleccionada" : "Contrata ahora"}</button>
            </div>
        </div>
    )
}
export default TarjetaTarifa
