import React from 'react'
import InicioAdmin from './InicioAdmin'
import InicioReparto from './InicioReparto'
import InicioOficina from './InicioOficina'

const InicioGeneral = () => {

    const usuario =
        {
            key: 1,
            roles: ["Reparto", "Oficina", "Admin"],
        }
    

    return (
        <div>
            <br />
            <br />
            <br />
            {usuario.roles.includes("Reparto") ? <InicioReparto usuario={usuario}/>: null}
            {usuario.roles.includes("Oficina") ? <InicioOficina />: null}
            {usuario.roles.includes("Admin") ? <InicioAdmin />: null}
                        
        </div>
    )
}

export default InicioGeneral
