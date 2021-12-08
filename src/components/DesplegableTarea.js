import React from 'react'

const DesplegableTarea = () => {
    return (

        <div className="card">
            <div className="card-header p-1" id="headingOne">
                <button className="w-100 btn btn-link p-0 m-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className=" d-flex justify-content-between h5">
                        <a>20:00</a><a>Los Madriles</a><a>30007</a><a>2</a>
                    </div>
                    <div className=" d-flex justify-content-between m-0" style={{ fontSize: "0.9rem" }}>
                        <a >C/ Castillo del Madrigal de las altas torres, </a> &nbsp; <a>20</a>
                    </div>
                </button>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">

                    <div className="d-flex justify-content-between h5">
                        <a>Alberto</a><a>648182808</a>
                    </div>
                    <div className="d-flex justify-content-between  h6  ">
                        <a >Garre Mula Muñoz Marín</a>
                    </div>
                    <br />
                    <div >
                        <label><b>Dirección: </b></label><br />
                        <a >Camino viejo del Carcanox n 45 2 esc 4H</a>
                    </div>
                    <br />
                    <div >
                        <label><b>Nº bultos: </b> </label>
                        <a > 2</a>
                    </div>
                    <div >
                        <label><b>Entregar antes de: </b> </label>
                        <a > 20:00</a>
                    </div>
                    <div >
                        <label><b>Municipio: </b> </label>
                        <a > Los Madriles</a>
                    </div>
                    <div >
                        <label><b>CP: </b></label>
                        <a > 30007</a>
                    </div>
                    <br />
                    <div >
                        <label><b>Observaciones: </b></label><br />
                        <a >Loren Ipsum entrega por la tarde</a>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-success col-md-4 m-0 p-2 px-4 bg-success">Confirmar</button>
                    <br />
                </div>
            </div>
        </div>

    )
}

export default DesplegableTarea
