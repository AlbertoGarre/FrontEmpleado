import React from 'react'
import { useNavigate } from 'react-router-dom';

const DesplegableTarea = ({tarea}) => {

    const navigate = useNavigate();

    return (

        <div className="card">
            <div className="card-header p-1" id="headingOne">
                <button className="w-100 btn btn-link p-0 m-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className=" d-flex justify-content-between h5">
                        <a>{tarea.horario}</a><a>{tarea.municipio}</a><a>{tarea.cp}</a><a>{tarea.bultos}</a>
                    </div>
                    <div className=" d-flex justify-content-between m-0" style={{ fontSize: "0.9rem" }}>
                        <a >{tarea.direccion} </a> &nbsp; <a>{tarea.numero}</a>
                    </div>
                </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">

                    <div className="d-flex justify-content-between h5">
                        <a>{tarea.nombre}</a><a>{tarea.telefono}</a>
                    </div>
                    <div className="d-flex justify-content-between  h6  ">
                        <a >{tarea.apellidos}</a>
                    </div>
                    <br />
                    <div >
                        <label><b>Dirección: </b></label><br />
                        <a >
                            {tarea.direccion} &nbsp;
                            {tarea.numero != '' ? 'nº' + tarea.numero : ''}  &nbsp;
                            {tarea.escalera!= '' ? 'Esc.' + tarea.escalera : ''}  &nbsp;
                            {tarea.planta != '' ? tarea.planta + 'º': ''}  &nbsp;
                            {tarea.puerta}
                        </a>
                    </div>
                    <br />
                    <div >
                        <label><b>Nº bultos: </b> </label>
                        <a >{tarea.bultos}</a>
                    </div>
                    <div >
                        <label><b>Entregar antes de: </b> </label>
                        <a > {tarea.horario}</a>
                    </div>
                    <div >
                        <label><b>Municipio: </b> </label>
                        <a > {tarea.municipio}</a>
                    </div>
                    <div >
                        <label><b>CP: </b></label>
                        <a > {tarea.cp}</a>
                    </div>
                    <br />
                    <div >
                        <label><b>Observaciones: </b></label><br />
                        <a >{tarea.observaciones}</a>
                    </div>
                    <br />
                    <button type="submit" onClick={()=> navigate('/Confirmacion')} className="btn btn-success col-md-4 m-0 p-2 px-4 bg-success" style={tarea.terminada ? {visibility: "hidden"} : {}}>{tarea.tipo == 'entrega' ? 'Entrega': 'Recoge'}</button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default DesplegableTarea
