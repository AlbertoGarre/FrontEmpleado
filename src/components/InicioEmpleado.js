import React from 'react'

const InicioEmpleado = () => {
    
    return (
        <div id="content" className=" m-0 p-4" style={{width: '100%'}}>
            <br/>
            <br/>
            <br/>
            <div id="listaBotones">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0 d-flex justify-content-center">
                            <button className="btn btn-link "  data-target="">
                                TAREAS FINALIZADAS
                            </button>
                        </h5>
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0 d-flex justify-content-center">
                            <button className="btn btn-link "  data-target="">
                                TAREAS PENDIENTES
                            </button>
                        </h5>
                    </div>                    
                </div>
                <br/>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0 d-flex justify-content-center">
                            <button className="btn btn-link "  data-target="">
                                ASIGNACIÓN DE TAREAS
                            </button>
                        </h5>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default InicioEmpleado
