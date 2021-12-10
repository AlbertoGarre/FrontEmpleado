import React from 'react'
import { useNavigate } from 'react-router-dom';

const InicioAdmin = () => {

    const navigate = useNavigate();

    return (
        <div id="content" className=" m-0 p-4" style={{ width: '100%' }}>

            <div id="listaBotones">
                <h3 className="pl-4">Administración</h3>
                <br />
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link " data-target="" onClick={()=> navigate('/GraficaBalance')}>
                                Balance BALANCE DIAMOND HAND STONKS
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link " data-target="" onClick={()=> navigate('/ListaUsuarios')}>
                                Gestion de usuarios
                            </button>
                        </h5>
                    </div>
                </div>
                <br />
                
            </div>
        </div>
    )
}

export default InicioAdmin
