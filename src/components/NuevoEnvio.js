import React from 'react'
import TarjetaTarifa from './TarjetaTarifa'
import { Link } from 'react-router-dom';

const NuevoEnvio = ({ tarifas, pulsa, tarifaSeleccionada }) => {

    const limpia = () => {
        document.getElementById("formularioNuevoEnvio").reset()
    }

    return (
        <div id="content" className="container m-0 p-4 ">
            <h2 className="w-auto text-center py-5 mt-3">Solicita Recogida</h2>
            <div className="row">
                <div className="col-md-8 order-md-1">
                    <form id='formularioNuevoEnvio'>
                        <h3>Datos generales</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputEmail">E-mail</label>
                                <input type="text" className="form-control m-0 p-0" id="inputEmail"
                                    placeholder="ejemplo@correo.com" />
                            </div>
                            <div className="form-group  m-0 p-0 mr-2">
                                <label htmlFor="inputSolicitante">Solicitante(remitente)</label>
                                <input type="text" className="form-control m-0 p-0" id="inputSolicitante"
                                    placeholder="Solicitante" />
                            </div>
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputTelefono">Teléfono</label>
                                <input type="text" className="form-control m-0 p-0" id="inputTelefono"
                                    placeholder="968 82 60 47" />
                            </div>
                        </div>

                        <div className="form-row m-0 p-0 mt-2">
                            <div className="form-group col-md-2 m-0 p-0" >
                                <label htmlFor=" inputNIF">NIF</label>
                                <input type="text" className="form-control m-0 p-0" id="inputNIF" placeholder="48000000Z" />
                            </div>
                        </div>
                        <br /><br />
                        <h3>Datos de recogida</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group col-md-3 m-0 p-0 mr-2">
                                <label htmlFor="inputState">Fecha de recogida</label>
                                <input type="date" id="inputState" className="form-control m-0 p-0">
                                </input>
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mt-2 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="De 10:00 h" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mt-2 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="a 15:00 h" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mt-2 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="y de 17:00 h" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mt-2 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="a 19:00 h" />
                            </div>
                        </div>

                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputEmail"></label>
                                <select type="text" className="form-control m-0 p-0" id="inputEmail" placeholder="España">
                                    <option value="Esp">España</option>
                                    <option value="Por">Portugal</option>
                                    <option value="And">Andorra</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="30401" />
                            </div>

                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputPoblación"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputPoblación"
                                    placeholder="Población" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="inputDireccion"></label>
                            <input type="text" className="form-control m-0 p-0" id="inputCP"
                                placeholder="Dirección: nombre, via, número, piso" />
                        </div>

                        <div className="form-row m-0 p-0 ">
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputAtencionRecogida"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputAtencionRecogida"
                                    placeholder="Empresa/Persona de recogida" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputTelefonoRecogida"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputTelefonoRecogida"
                                    placeholder="Teléfono" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputNombreAtencionRecogida"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputNombreAtencionRecogida"
                                    placeholder="Persona de contacto" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="inputObservacionesRecogida"></label>
                            <input type="text" className="form-control m-0 p-0" id="inputObservacionesRecogida"
                                placeholder="Observaciones de la recogida" />
                        </div>

                        <a href="#" onClick={limpia} class="text-success">Limpiar campos</a>
                        <br />
                        <br /><br />
                        <h3>Datos de Entrega</h3>
                        <div className="form-row m-0 p-0">
                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputEmail"></label>
                                <select type="text" className="form-control m-0 p-0" id="inputEmail" placeholder="España">
                                    <option value="Esp">España</option>
                                    <option value="Por">Portugal</option>
                                    <option value="And">Andorra</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputCP"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputCP" placeholder="30401" />
                            </div>

                            <div className="form-group m-0 p-0 mr-2">
                                <label htmlFor="inputPoblación"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputPoblación"
                                    placeholder="Población" />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="inputDireccion"></label>
                            <input type="text" className="form-control m-0 p-0" id="inputCP"
                                placeholder="Dirección: nombre, via, número, piso" />
                        </div>

                        <div className="form-row m-0 p-0">
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputDestinatario"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputDestinatario"
                                    placeholder="Destinatario" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputTelefonoEntrega"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputTelefonoEntrega"
                                    placeholder="Teléfono" />
                            </div>
                            <div className="form-group col-md-2 m-0 p-0 mr-2">
                                <label htmlFor="inputNombreAtencionEntrega"></label>
                                <input type="text" className="form-control m-0 p-0" id="inputNombreAtencionEntrega"
                                    placeholder="A la atención de " />
                            </div>
                        </div>

                        <div className="form-group col-md-6 m-0 p-0">
                            <label htmlFor="inputObservacionesEntrega"></label>
                            <input type="text" className="form-control m-0 p-0" id="inputObservacionesEntrega"
                                placeholder="Observaciones de la entrega" />
                        </div>
                        <a href="#" onClick={limpia} class="text-success">Limpiar campos</a>
                    </form>
                </div>
            </div>

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h3 className="display-4">Tarifas</h3>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {tarifas.map((tarifa) => (
                        <TarjetaTarifa
                            seleccionada={tarifaSeleccionada == tarifa.key}
                            tarifa={tarifa}
                            pulsa={pulsa} />
                    ))}
                </div>

                <div className="form-group m-0 p-0 pl-2 pt-4 pb-5">
                    <div className="form-check m-0 p-0">
                        <input className="form-check-input m-0 p-0 mt-1" type="checkbox" id="gridCheck" />
                        <label className="form-check-label m-0 pl-4" htmlFor="gridCheck">
                            He leido y acepto <Link to='/PoliticaPrivacidad' className="text-success">la política de privacidad y
                                condiciones de uso de la
                                web</Link> *
                            campo obligatorio
                        </label>
                    </div>

                </div>
                <div className="form-row m-0 p-0 ">
                    <button type="submit" className="btn btn-success col-md-4 m-0 p-2 px-4 bg-success">Enviar</button>
                </div>
            </div>

        </div>
    )
}

export default NuevoEnvio
