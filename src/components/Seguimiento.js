import React from 'react'
import CodigoSeguimiento from './CodigoSeguimiento'

const Seguimiento = ({codigoSeguimiento, setCodigoSeguimiento}) => {
    
    return (
        <>
            <br />
            <CodigoSeguimiento codigoSeguimiento={codigoSeguimiento} setCodigoSeguimiento={setCodigoSeguimiento}/>
            <br /><br /><br />
            <div className="d-flex justify-content-center" style={codigoSeguimiento == "" ? {visibility: 'hidden'}:{}}>
                <table className="table table-striped col-12 col-sm-8 pl-sm-5">
                    <thead>
                        <tr>
                            <th scope="col"> Lugar </th>
                            <th scope="col" className="col-4 col-md-3"> Hora </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Central Log. Molina</td>
                            <td>21/2/12 16:48</td>
                        </tr>
                        <tr>
                            <td>Oficina local</td>
                            <td>Pendiente</td>
                        </tr>
                        <tr>
                            <td>Destino</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br /><br />
        </>
    )
}

export default Seguimiento
