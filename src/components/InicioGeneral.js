import React from 'react'
import InicioAdmin from './InicioAdmin'
import InicioReparto from './InicioReparto'
import InicioOficina from './InicioOficina'

const InicioGeneral = ({usuarioActual}) => {

    const usuario =
        {
            id: 1,
            roles: ["Reparto", "Oficina", "Admin"],
        }
    

    return (
        <div>
            <br />
            <br />
            <br />
            {usuarioActual.Reparto ? <InicioReparto />: null}
            {usuarioActual.Oficina ? <InicioOficina />: null}
            {usuarioActual.Admin ? <InicioAdmin />: null}
                        
        </div>
    )
}

export default InicioGeneral
