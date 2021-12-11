import React from 'react'

const FilaTablaUsuario = ({usuario, setUsuarioEdicionYRedirige, borraUsuario}) => {

    return (

        <tr> 
            <td><a href="#" className="text-success" onClick={() => {
                console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                setUsuarioEdicionYRedirige(usuario.id)}}>{usuario.nombre}</a></td>
            <td>{usuario.roles.map((rol) => (
                rol + ' '
            ))}</td>
            <td><a href="#" className="text-success d-flex justify-content-end" onClick={() => {borraUsuario(usuario.id) }}>
                    Borrar</a></td>
        </tr>

    )
}

export default FilaTablaUsuario
