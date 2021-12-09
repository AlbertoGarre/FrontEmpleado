import React from 'react'

const FilaTablaUsuario = ({usuario}) => {
    return (

        <tr>
            <td><a href="" className="text-success">{usuario.nombre}</a></td>
            <td>{usuario.roles.map((rol) => (
                rol + ' '
            ))}</td>
            <td><a href="" className="text-success d-flex justify-content-end">Borrar</a></td>
        </tr>

    )
}

export default FilaTablaUsuario
