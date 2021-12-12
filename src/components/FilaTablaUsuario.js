import React from 'react'

const FilaTablaUsuario = ({usuario, setUsuarioEdicionYRedirige, borraUsuario}) => {

    return (

        <tr> 
            <td><a href="#" className="text-success" onClick={() => {
                console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                setUsuarioEdicionYRedirige(usuario.id)}}>{usuario.name}</a></td>
            <td>
                {usuario.Reparto == "true" ? 'Reparto' :''}&nbsp;
                {usuario.Oficina == "true" ? 'Oficina':''}&nbsp;
                {usuario.Admin == "true" ? 'Admin' : ''}&nbsp;
            </td>
            <td><a href="#" className="text-success d-flex justify-content-end" onClick={() => {borraUsuario(usuario.id) }}>
                    Borrar</a></td>
        </tr>

    )
}

export default FilaTablaUsuario
