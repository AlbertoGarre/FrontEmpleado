import React from 'react'

const ConfirmacionDatos = () => {
    return (
        <div id="content" className=" m-0 p-4" style={{ width: "100%" }}>
            <br /><br />
            <div className="container">
                <br /><br /><br />
            </div>

            <div className="col-md-8 order-md-1 col-12">
                <h4 className="mb-3">Confirmación</h4>
                <form className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="firstName">Nombre</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Nombre válido.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="lastName">Apellidos</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Apellidos válidos.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="dni">DNI <span className="text-muted"></span></label>
                        <input type="text" className="form-control" id="dni" placeholder="486000000A" />
                        <div className="invalid-feedback">
                            Introduce un número de teléfono.
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <button className="btn btn-success btn-block col-10 col-sm-4 ml-3 ml-sm-3" type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmacionDatos
