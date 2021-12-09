import React from 'react'
import FilaTablaUsuario from './FilaTablaUsuario'

const ListaUsuarios = ({usuarios}) => {

    return (
        <div>
            <br /><br /><br /><br /><br />
            <div className="d-flex justify-content-center">
                <table className="table table-striped col-12 col-sm-8 pl-sm-5">
                    <thead>
                        <tr>
                            <th scope="col"> Usuario </th>
                            <th scope="col" className="col-4 col-md-3"> Grupo </th>
                            <th scope="col" className="col-4 col-md-3">  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <FilaTablaUsuario usuario={usuario}/>)
                        )}
                    </tbody>
                </table>
            </div>
            <br /><br />
            <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-block col-3 col-sm-2 ml-3 ml-sm-3" type="submit">Nuevo usuario</button>
            </div>
            <br /><br /><br />
        </div>
    )
}
export default ListaUsuarios
