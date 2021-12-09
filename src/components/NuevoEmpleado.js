import React from 'react'
import { useNavigate } from 'react-router-dom';


const NuevoEmpleado = ({ usuario }) => {

    if (usuario == null)
    {
        usuario = 0
    }

    const navigate = useNavigate();

    return (
        <div id="content" className=" m-0 p-4" style={{ width: "100%" }}>
            <br />
            <br />
            <div className="container">
                <br /><br /><br />
            </div>
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Nuevo empleado</h4>
                <form className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder={usuario != 0 ? usuario.nombre : "Nombre"} required />
                            <div className="invalid-feedback">
                                Nombre válido.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" className="form-control" id="apellidos" placeholder={usuario != 0 ? usuario.apellidos : "Apellidos"} required />
                            <div className="invalid-feedback">
                                Apellidos válidos.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted"></span></label>
                        <input type="email" className="form-control" id="email" placeholder={usuario != 0 ? usuario.email : "ejemplo@email"} />
                        <div className="invalid-feedback">
                            Introduce un email válido.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono">Teléfono <span className="text-muted"></span></label>
                        <input type="text" className="form-control" id="telefono" placeholder={usuario != 0 ? usuario.telefono : "648123456"} />
                        <div className="invalid-feedback">
                            Introduce un número de teléfono.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="clave">Contraseña</label>
                        <input type="password" name="password" className="form-control" id="clave" required placeholder={usuario != 0 ? usuario.contraseña : ""} />

                    </div>

                    <div>
                        <input className="mx-2" type="checkbox" id="checkBoxRolReparto" name="checkBoxRolReparto" value="Reparto"
                            checked={usuario != 0 ? (usuario.roles.includes("Reparto")): false}                        
                        />
                        <label htmlFor="checkBoxRolReparto"> Reparto</label><br/> 

                        <input className="mx-2" type="checkbox" id="checkBoxRolOficina" name="checkBoxRolOficina" value="Oficina"
                            checked={usuario != 0 ? (usuario.roles.includes("Oficina")): false}  
                        />
                        <label htmlFor="checkBoxRolOficina"> Oficina</label><br/> 

                        <input className="mx-2" type="checkbox" id="checkBoxRolAdmin" name="checkBoxRolAdmin" value="Admin"
                            checked={usuario != 0 ? (usuario.roles.includes("Admin")): false} 
                        />
                        <label htmlFor="checkBoxRolAdmin"> Admin</label><br/> 
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-success btn-block col-3 col-sm-4 ml-3 ml-sm-3" type="submit">Confirmar empleado</button>
                </form>
            </div>
        </div>
    )
}

export default NuevoEmpleado
