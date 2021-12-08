import React from 'react'

const InicioAdmin = () => {

    return (
        <div id="content" className=" m-0 p-4" style={{width: '100%'}}>

            <br/>
            <br/>
            <br/>

            <div id="listaBotones">
            <br/>
            <h3 className="pl-4">Oficina</h3>
            <br/>
            <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Nueva recogida (repartidor)
                            </button>
                        </h5>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link"  data-target="">
                                Asignar paquetes
                            </button>
                        </h5>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Entrega paquete (presencial)
                            </button>
                        </h5>
                    </div>                    
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Recibe paquete (presencial)
                            </button>
                        </h5>
                    </div>
                </div>
                <br/>
            <br/>
            <h3 className="pl-4">Administración</h3>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Balance BALANCE DIAMOND HAND STONKS
                            </button>
                        </h5>
                    </div> 
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Gestion de usuarios
                            </button>
                        </h5>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link "  data-target="">
                                Estado de tareas total, realizado/pendientes
                            </button>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioAdmin
