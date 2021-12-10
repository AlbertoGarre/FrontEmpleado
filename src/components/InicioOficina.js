import React from 'react'
import { useNavigate } from 'react-router-dom';

const InicioOficina = () => {

    const navigate = useNavigate();

    return (

        <div id="content" className=" m-0 p-4" style={{ width: '100%' }}>

            <div id="listaBotones">
                <h3 className="pl-4">Oficina</h3>
                <br />
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link " data-target="" onClick={()=> navigate('/NuevoEnvio')}>
                                Nueva recogida (repartidor)
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-target="" onClick={()=> navigate('/AsignacionTareas')}>
                                Asignar paquetes
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link " data-target="" onClick={()=> navigate('/TareasPendientes')}>
                                Entrega paquete (presencial)
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link " data-target="" onClick={()=> navigate('/NuevoEnvio')}>
                                Recibe paquete (presencial)
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )


}

export default InicioOficina
