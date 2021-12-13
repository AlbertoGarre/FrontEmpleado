import React from 'react'

const AsignacionTareas = ( {usuarioActual, servidor}) => {

    
    const fetchPaquete = async (id) => {
        console.log("id = ", id) 
        let ruta = `http://${servidor}/api/paquetes/${id}`
        console.log('ruta = ', ruta)
        const res = await fetch(ruta)
        const data = await res.json()
        return data.paquete
    }
    const actualizaPaquete = async (paqueteActualizado) => {
        console.log("paquete = ", await paqueteActualizado)
        let id = (await paqueteActualizado).id
        console.log(id)
        const res = await fetch(`http://${servidor}/api/paquetes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(await paqueteActualizado),

        })
    }

    return (
        <div>
            <br /><br /><br /><br />
            <h4 className="mb-3 d-flex justify-content-center">Añadir nuevo paquete</h4>
            <form className="needs-validation col-12"
                    onSubmit={async (e)=>{
                        e.preventDefault()
                        let idPaquete = document.getElementById("idPaquete").value
                        if(idPaquete.length < 1 ){
                            alert("Escribe el id válido de un paquete")
                            return false
                        }
                        let id = parseInt(idPaquete)

                        if(id == null){
                            alert("Escribe el id válido de un paquete")
                            return false
                        }
                        if(typeof(id)!= 'number'){
                            alert("Escribe el id válido de un paquete")
                            return false
                        }
                        
                        if(isNaN(id)){
                            alert("Escribe el id válido de un paquete")
                            return false
                        }
                        console.log(id)
                        let paquete = await fetchPaquete(id)
                        console.log(paquete)
                        console.log(usuarioActual)
                        paquete.asignado = usuarioActual

                        actualizaPaquete(paquete)

                        return false
                    }}
            >
                <div className="form-row  mb-3 d-flex justify-content-center">
                    <input type="text" className=" input-lg rounded col-5 col-sm-4 mr-sm-3 mb-0" id="idPaquete" placeholder="7" required />
                    <button className="btn btn-success btn-block col-5 col-sm-4 ml-3 ml-sm-3" type="submit">Añadir paquete</button>
                </div>
            </form>

            <div className="d-flex justify-content-center">
                <table className="table table-striped col-12 col-sm-8 pl-sm-5">
                    <thead>
                        <tr>
                            <th scope="col"> Hora de admisión </th>
                            <th scope="col" className="col-4 col-md-3"> Identificador Paquete </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>08:17 </td>
                            <td>AAA</td>
                        </tr>
                        <tr>
                            <td>08:14 </td>
                            <td>ZBP</td>
                        </tr>
                        <tr>
                            <td>08:12 </td>
                            <td>ZQA</td>
                        </tr>
                        <tr>
                            <td>08:09 </td>
                            <td>UMP</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AsignacionTareas
