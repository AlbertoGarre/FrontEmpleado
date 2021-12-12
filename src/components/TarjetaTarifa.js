import React from 'react'

const TarjetaTarifa = ({ seleccionada, seleccionaTarifa, tarifa }) => {

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{tarifa.titulo}</h4>
            </div>
            <div className="card-body" onClick={() =>  seleccionaTarifa(tarifa.id)} style={{ backgroundColor: seleccionada ? 'green' : 'white' }}>
                <h1 className="card-title pricing-card-title"> <small className={(seleccionada ? 'text-white' : 'text-muted')}>{tarifa.precio} / envío</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    
                        <li className={(seleccionada ? 'text-white' : '')}>{tarifa.cualidad1}</li>
                        <li className={(seleccionada ? 'text-white' : '')}>{tarifa.cualidad2}</li>
                        <li className={(seleccionada ? 'text-white' : '')}>{tarifa.cualidad3}</li>
                        <li className={(seleccionada ? 'text-white' : '')}>{tarifa.cualidad4}</li>
                  
                </ul>
                <button type="button" style={{ backgroundColor: 'white' }} className={'btn btn-lg btn-block btn-outline-primary ' + (seleccionada ? 'text-success border-0 font-weight-bold' : 'text-muted')}>{seleccionada ? "Seleccionada" : "Contrata ahora"}</button>
            </div>
        </div>
    )
}
export default TarjetaTarifa
