import React from 'react'
import { useNavigate } from 'react-router-dom';

const DesplegableTarea = ({paquete}) => {

    const navigate = useNavigate();

    return (

        <div className="card">
            <div className="card-header p-1" id="headingOne">
                <button className="w-100 btn btn-link p-0 m-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className=" d-flex justify-content-between h5">
                        <div>20:00</div>
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_poblacion : paquete.e_poblacion}</div>
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_cp : paquete.e_cp}</div>
                        <div>{paquete.g_bultos}</div>
                    </div>
                    <div className=" d-flex justify-content-between m-0" style={{ fontSize: "0.9rem" }}>
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_direccion : paquete.e_direccion} </div> &nbsp; 
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_numero : paquete.e_numero}</div>
                    </div>
                </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">

                    <div className="d-flex justify-content-between h5">
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_atencion : paquete.e_destinatario}</div>
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_telefono : paquete.e_telefono}</div>
                    </div>
                    <br />
                    <div >
                        <label><b>Dirección: </b></label><br />
                        <div>
                            {paquete.tipo_servicio == "recogida" ? paquete.r_direccion : paquete.e_direccion} &nbsp;
                            {paquete.e_numero != '' ? 'nº' + paquete.e_numero : ''}  &nbsp;
                            {paquete.e_escalera!= '' ? 'Esc.' + paquete.e_escalera : ''}  &nbsp;
                            
                            {paquete.e_planta != '' ? paquete.e_planta + 'º': ''}  &nbsp;
                            
                            {paquete.e_puerta}
                        </div>
                    </div>
                    <br />
                    <div >
                        <label><b>Nº bultos: </b> </label>
                        <div>{paquete.g_bultos}</div>
                    </div>
                    <div >
                        <label><b>Entregar antes de: </b> </label>
                        <div> 20:00</div>
                    </div>
                    <div >
                        <label><b>Municipio: </b> </label>
                        <div> {paquete.tipo_servicio == "recogida" ? paquete.r_poblacion : paquete.e_poblacion}</div>
                    </div>
                    <div >
                        <label><b>CP: </b></label>
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_cp : paquete.e_cp}</div>
                    </div>
                    <br />
                    <div >
                        <label><b>Observaciones: </b></label><br />
                        <div>{paquete.tipo_servicio == "recogida" ? paquete.r_observaciones : paquete.e_observaciones}</div>
                    </div>
                    <br />
                    <button type="submit" onClick={()=> navigate('/Confirmacion')} className="btn btn-success col-md-4 m-0 p-2 px-4 bg-success" style={paquete.terminado ? {visibility: "hidden"} : {}}>{paquete.tipo_servicio == 'entrega' ? 'Entrega': 'Recoge'}</button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default DesplegableTarea
