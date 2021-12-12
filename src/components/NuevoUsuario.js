import React from 'react'
import { useNavigate } from 'react-router-dom';

const NuevoUsuario = ({ usuario, añadeUsuario, actualizaUsuario }) => {

    if (usuario == null) {
        usuario = 0
    }

    const navigate = useNavigate();

    React.useEffect(() => {
        //consigue ejecutarse en el momento en el que se carga el componente por primera vez
        //así es como consigo mostrar los values & checked y editarlos despues
        if (usuario != 0) {
            document.getElementById("nombre").value = usuario.name
            document.getElementById("apellidos").value = usuario.apellidos
            document.getElementById("email").value = usuario.email
            document.getElementById("telefono").value = usuario.telefono
            document.getElementById("clave").value = usuario.password;

            if(usuario.Reparto == 'true'){
                document.getElementById("checkBoxRolReparto").checked = true
            }
            
            if(usuario.Oficina == 'true') {
                document.getElementById("checkBoxRolOficina").checked = true 
            }    
            
            if(usuario.Admin == 'true') {
                document.getElementById("checkBoxRolAdmin").checked = true
            }
        }
    }, []);

    

    return (
        <div id="content" className=" m-0 p-4" style={{ width: "100%" }}>
            <br />
            <br />
            <div className="container">
                <br /><br /><br />
            </div>
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">{usuario != 0 ? "Edita empleado" : "Nuevo empleado"}</h4>
                <form className="needs-validation"
                    onSubmit={(e) => {
                        e.preventDefault()
                        const empleado = {
                            id: (usuario != 0 ? usuario.id : null),
                            username: (usuario != 0 ? usuario.usuario : document.getElementById("nombre").value.substring(0, 2) + document.getElementById("apellidos").value.substring(0, 2)),
                            franquicia: (usuario != 0 ? usuario.franquicia : 1),
                            name: document.getElementById("nombre").value,
                            apellidos: document.getElementById("apellidos").value,
                            email: document.getElementById("email").value,
                            telefono: document.getElementById("telefono").value,
                            password: document.getElementById("clave").value,
                            Reparto: (document.getElementById("checkBoxRolReparto").checked ? 'true': 'false'),
                            Oficina: (document.getElementById("checkBoxRolOficina").checked ? 'true': 'false'),
                            Admin: (document.getElementById("checkBoxRolAdmin").checked ? 'true': 'false'),
                        }
                        
                        setTimeout(() => {
                            navigate("/ListaUsuarios")
                        }, 100);
                        (usuario == 0) ? añadeUsuario(empleado) : actualizaUsuario(empleado)
                        return false
                    }}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombre" required />
                            <div className="invalid-feedback">
                                Nombre válido.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" className="form-control" id="apellidos" placeholder="Apellidos" required />
                            <div className="invalid-feedback">
                                Apellidos válidos.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted"></span></label>
                        <input type="email" className="form-control" id="email" placeholder="ejemplo@email" />
                        <div className="invalid-feedback">
                            Introduce un email válido.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono">Teléfono <span className="text-muted"></span></label>
                        <input type="text" className="form-control" id="telefono" placeholder="648123456" />
                        <div className="invalid-feedback">
                            Introduce un número de teléfono.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="clave">Contraseña</label>
                        <input type="password" name="password" className="form-control" id="clave" required placeholder="" />

                    </div>

                    <div>
                        <input className="mx-2" type="checkbox" id="checkBoxRolReparto" name="checkBoxRolReparto" value="Reparto" />
                        <label htmlFor="checkBoxRolReparto"> Reparto</label><br />

                        <input className="mx-2" type="checkbox" id="checkBoxRolOficina" name="checkBoxRolOficina" value="Oficina" />
                        <label htmlFor="checkBoxRolOficina"> Oficina</label><br />

                        <input className="mx-2" type="checkbox" id="checkBoxRolAdmin" name="checkBoxRolAdmin" value="Admin" />
                        <label htmlFor="checkBoxRolAdmin"> Admin</label><br />
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-success btn-block col-3 col-sm-4 ml-3 ml-sm-3" type="submit">{usuario != 0 ? "Confirmar cambios" : "Crear"}</button>
                </form>
            </div>
        </div>
    )
}

export default NuevoUsuario
