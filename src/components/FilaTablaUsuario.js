import React from 'react'

const FilaTablaUsuario = ({usuario, setUsuarioEdicionYRedirige}) => {
    return (

        <tr> 
            <td><a href="#" className="text-success" onClick={() => setUsuarioEdicionYRedirige(usuario.key)}>{usuario.nombre}</a></td>
            <td>{usuario.roles.map((rol) => (
                rol + ' '
            ))}</td>
            <td><a href="#" className="text-success d-flex justify-content-end">Borrar</a></td>
        </tr>

    )
}

export default FilaTablaUsuario
