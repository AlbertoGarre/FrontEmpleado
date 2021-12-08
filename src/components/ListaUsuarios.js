import React from 'react'

const ListaUsuarios = () => {

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
                        <tr>
                            <td><a href="" className="text-success">Alberto Garre</a></td>
                            <td>Admin</td>
                            <td><a href="" className="text-success d-flex justify-content-end">Borrar</a></td>
                        </tr>
                        <tr>
                            <td><a href="" className="text-success">Juan</a></td>
                            <td>Oficina</td>
                            <td><a href="" className="text-success d-flex justify-content-end">Borrar</a></td>
                        </tr>
                        <tr>
                            <td><a href="" className="text-success">Paco</a></td>
                            <td>Empleado</td>
                            <td><a href="" className="text-success d-flex justify-content-end">Borrar</a></td>
                        </tr>
                        <tr>
                            <td><a href="" className="text-success">Andrés</a></td>
                            <td>Empleado</td>
                            <td><a href="" className="text-success d-flex justify-content-end">Borrar</a></td>
                        </tr>
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
