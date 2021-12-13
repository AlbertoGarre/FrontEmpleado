import React from 'react'
import TarjetaTarifa from './TarjetaTarifa'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NuevoEnvio = ({ tarifas, seleccionaTarifa, tarifaSeleccionada, añadePaquete}) => {

    const navigate = useNavigate();
    const limpia = () => {
        document.getElementById("formularioNuevoEnvio").reset()
    }

    return (
        <div id="content" className="m-0 p-4 ">
            <br /><br />
            <h2 className="w-auto text-center py-5 mt-3 display-4">Solicita Recogida</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-8">
                    <form 
                        id='formularioNuevoEnvio'
                        onSubmit={(e) => {
                            e.preventDefault()
                            
                            //Datos generales
                            if ( document.getElementById("g_Email").value == '') { alert("El e-mail del solicitante está vacío"); return false}
                            if ( document.getElementById("g_Solicitante").value == '') {alert("El solicitante está vacio"); return false}
                            if ( document.getElementById("g_Telefono").value == '') {alert("El teléfono del solicitante está vacío"); return false}
                            if ( document.getElementById("g_NIF").value == '') {alert("El NIF del solicitante está vacío"); return false}
                            if ( document.getElementById("g_Bultos").value == '') {alert("El número de paquetes está vacío"); return false}
                            //Datos recogida
                            if ( document.getElementById("r_Pais").value == '') {alert("El país de recogida está vacío"); return false}
                            if ( document.getElementById("r_CP").value == '') {alert("El código postal de recogida está vacío"); return false}
                            if ( document.getElementById("r_Poblacion").value == '') {alert("La poblacion de recogida está vacía"); return false}
                            if ( document.getElementById("r_direccion").value == '') {alert("La direccíon de recogida está vacía"); return false}
                            if ( document.getElementById("r_Atencion").value == '') {alert("La atención de recogida está vacía"); return false}
                            if ( document.getElementById("r_Telefono").value == '') {alert("El teléfono de recogida está vacío"); return false}
                            if ( document.getElementById("r_NombreAtencion").value == '') {alert("\"A la Atención de\" de recogida está vacío"); return false}
                            
                            //Datos entrega
                            if ( document.getElementById("e_Pais").value == '') {alert("El país de entrega está vacío"); return false}
                            if ( document.getElementById("e_CP").value == '') {alert("El código postal de entrega está vacío"); return false}
                            if ( document.getElementById("e_Provincia").value == '') {alert("La provincia de entrega está vacía"); return false}
                            if ( document.getElementById("e_Poblacion").value == '') {alert("La población de entrega está vacía"); return false}
                            if ( document.getElementById("e_Direccion").value == '') {alert("La dirección de entrega está vacía"); return false}
                            if ( document.getElementById("e_Numero").value == '') {alert("El número de entrega está vacío"); return false}
                            if ( document.getElementById("e_Escalera").value == '') {alert("La escalera de entrega está vacía"); return false}
                            if ( document.getElementById("e_Planta").value == '') {alert("La planta de entrega está vacía"); return false}
                            if ( document.getElementById("e_Puerta").value == '') {alert("La puerta de entrega está vacía"); return false}
                            if ( document.getElementById("e_Destinatario").value == '') {alert("El destinatario de entrega está vacío"); return false}
                            if ( document.getElementById("e_Telefono").value == '') {alert("El teléfono de entrega está vacío"); return false}
                            if ( document.getElementById("e_NombreAtencion").value == '') {alert("\"A la Atención de\" de entrega está vacío"); return false}

                            
                            //tarifas
                            if (tarifaSeleccionada == 0) {alert("No ha seleccionado la tarifa"); return false}
                            if(! document.getElementById("gridCheck").checked ){alert("No has aceptado la política de privacidad"); return false}


                            const paquete = {
                                //Datos generales
                                g_email: document.getElementById("g_Email").value,
                                g_remitente: document.getElementById("g_Solicitante").value,
                                g_telefono: document.getElementById("g_Telefono").value,
                                g_nif: document.getElementById("g_NIF").value,
                                g_bultos: document.getElementById("g_Bultos").value,
                                //Datos recogida
                                r_pais: document.getElementById("r_Pais").value,
                                r_cp: document.getElementById("r_CP").value,
                                r_poblacion: document.getElementById("r_Poblacion").value, 
                                r_direccion:  document.getElementById("r_direccion").value,
                                r_atencion: document.getElementById("r_Atencion").value,
                                r_telefono: document.getElementById("r_Telefono").value,
                                r_contacto: document.getElementById("r_NombreAtencion").value,
                                r_observaciones: document.getElementById("r_Observaciones").value,
                                //Datos entrega
                                
                                e_pais: document.getElementById("e_Pais").value,
                                e_cp: document.getElementById("e_CP").value,
                                e_provincia: document.getElementById("e_Provincia").value,
                                e_poblacion: document.getElementById("e_Poblacion").value,
                                e_direccion: document.getElementById("e_Direccion").value,
                                e_numero: document.getElementById("e_Numero").value,
                                e_escalera: document.getElementById("e_Escalera").value,
                                e_planta: document.getElementById("e_Planta").value,
                                e_puerta: document.getElementById("e_Puerta").value,
                                e_destinatario: document.getElementById("e_Destinatario").value,
                                e_telefono: document.getElementById("e_Telefono").value,
                                e_atencion: document.getElementById("e_NombreAtencion").value,
                                e_observaciones: document.getElementById("e_Observaciones").value,
                                asignado: '',
                                terminado: 'false',
                                tipo_servicio: '',
                                //tarifas
                                tarifa: tarifaSeleccionada,
                                
                            }
                            añadePaquete(paquete)
                            navigate("/")
                            return false
                        }}
                    >


                    
                        <h3>Datos generales</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="g_Email">E-mail</label>
                                <input type="text" className="form-control m-0 p-0" id="g_Email"
                                    placeholder="ejemplo@correo.com" />
                            </div>
                            <div className="form-group  m-0 p-0 mr-2">
                                <label htmlFor="g_Solicitante">Solicitante(remitente)</label>
                                <input type="text" className="form-control m-0 p-0" id="g_Solicitante"
                                    placeholder="Solicitante" />
                            </div>
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="g_Telefono">Teléfono</label>
                                <input type="text" className="form-control m-0 p-0" id="g_Telefono"
                                    placeholder="968 82 60 47" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0" >
                                <label htmlFor="g_NIF">NIF</label>
                                <input type="text" className="form-control m-0 p-0" id="g_NIF" placeholder="48000000Z" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0" >
                                <label className='m-1' htmlFor="g_Bultos">Nº paquetes</label>
                                <input type="text" className="form-control m-0 p-0" id="g_Bultos" placeholder="Nº de bultos" />
                            </div>
                        </div>
                        <a href="#" onClick={limpia} className="text-success">Limpiar campos</a>
                        <br /><br />

                        <h3>Datos de recogida</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="r_Pais"></label>
                                <select type="text" className="form-control m-0 p-0" id="r_Pais" placeholder="España">
                                    <option value="Esp">España</option>
                                    <option value="Por">Portugal</option>
                                    <option value="And">Andorra</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="r_CP"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_CP" placeholder="30401" />
                            </div>

                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="r_Poblacion"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_Poblacion"
                                    placeholder="Población" />
                            </div>

                            <div className="form-group col-md-6 m-0 p-0">
                                <label htmlFor="r_direccion"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_direccion"
                                    placeholder="Dirección: nombre, via, número, piso" />
                            </div>
                        </div>

                        <div className="form-row m-0 p-0 ">
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="r_Atencion"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_Atencion"
                                    placeholder="Empresa/Persona de recogida" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="r_Telefono"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_Telefono"
                                    placeholder="Teléfono" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="r_NombreAtencion"></label>
                                <input type="text" className="form-control m-0 p-0" id="r_NombreAtencion"
                                    placeholder="Persona de contacto" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="r_ObservacionesRecogida"></label>
                            <input type="text" className="form-control m-0 p-0" id="r_Observaciones"
                                placeholder="Observaciones de la recogida" />
                        </div>

                        <a href="#" onClick={limpia} className="text-success">Limpiar campos</a>
                        <br />
                        <br /><br />
                        <h3>Datos de Entrega</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="e_Pais"></label>
                                <select type="text" className="form-control m-0 p-0" id="e_Pais" placeholder="España">
                                    <option value="Esp">España</option>
                                    <option value="Por">Portugal</option>
                                    <option value="And">Andorra</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_CP"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_CP" placeholder="30401" />
                            </div>

                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="e_Provincia"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Provincia"
                                    placeholder="Provincia" />
                            </div>

                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="e_Poblacion"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Poblacion"
                                    placeholder="Población" />
                            </div>


                            <div className="form-group col-md-6 m-0 p-0">
                                <label htmlFor="e_Direccion"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Direccion"
                                    placeholder="Dirección: nombre, via, número, piso" />
                            </div>
                        </div>

                        <div className="form-row m-0 p-0">
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Numero"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Numero"
                                    placeholder="Numero" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Escalera"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Escalera"
                                    placeholder="Escalera" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Planta"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Planta"
                                    placeholder="Planta" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Puerta"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Puerta"
                                    placeholder="Puerta" />
                            </div>
                        </div>

                        <div className="form-row m-0 p-0">
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Destinatario"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Destinatario"
                                    placeholder="Destinatario" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_Telefono"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_Telefono"
                                    placeholder="Teléfono" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="e_NombreAtencion"></label>
                                <input type="text" className="form-control m-0 p-0" id="e_NombreAtencion"
                                    placeholder="A la atención de " />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="e_Observaciones"></label>
                            <input type="text" className="form-control m-0 p-0" id="e_Observaciones"
                                placeholder="Observaciones de la entrega" />
                        </div>
                        <a href="#" onClick={limpia} className="text-success">Limpiar campos</a>


                        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <h3 className="display-4">Tarifas</h3>
                        </div>

                        <div className="container">
                            <div className="card-deck mb-3 text-center">
                                {tarifas.map((tarifa) => (
                                    <TarjetaTarifa
                                        seleccionada={tarifaSeleccionada == tarifa.id}
                                        tarifa={tarifa}
                                        seleccionaTarifa={seleccionaTarifa} />
                                ))}
                            </div>

                            <div className="form-group m-0 px-5 pt-4 pb-5">
                                <div className="form-check m-0 p-0">
                                    <input className="form-check-input m-0 p-0 mt-2" type="checkbox" id="gridCheck" required/>
                                    <label className="form-check-label m-0 pl-4 h5" htmlFor="gridCheck">
                                        He leido y acepto <Link to='/PoliticaPrivacidad' className="text-success">la política de privacidad y
                                            condiciones de uso de la web</Link>
                                    </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <small>* campo obligatorio</small>
                                </div>
                            </div>
                            <br />
                            <div className="form-row m-0 p-0 d-flex justify-content-center">
                                <button type="submit" className="btn btn-success col-md-6 m-0 p-3 px-6 bg-success">CONTRATA</button>
                            </div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NuevoEnvio
