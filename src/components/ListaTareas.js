import React from 'react'
import DesplegableTarea from './DesplegableTarea'

const ListaTareas = ({terminado, paquetes, usuarioActual}) => {

    return (
        <div id="content " className=" m-0 p-4 " style={{ width: "100%" }}>
            <br /><br /><br />
            <div id="accordion">

                {paquetes
                    .filter((paquete) => paquete.asignado == usuarioActual)
                    .filter((paquete) => paquete.terminado == terminado)
                    .map((paquete) => (
                        <DesplegableTarea
                            paquete={paquete}
                        />
                    ))}
            </div>
        </div>
    )
}
export default ListaTareas

