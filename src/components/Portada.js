import { Link } from 'react-router-dom'
import CodigoSeguimiento from './CodigoSeguimiento'

const Portada = ({codigoSeguimiento, setCodigoSeguimiento}) => {
    return (

        /*Contenido de la página*/
        <div id="content" className=" m-0 p-4" style={{width: '100%'}}>
            <br />
            <br />
            <div className="center imagenDeFondo" style={{width: '100%'}}>
                <CodigoSeguimiento codigoSeguimiento={codigoSeguimiento} setCodigoSeguimiento={setCodigoSeguimiento}/>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p  style={{color: "grey" }} className="subtitle">Nuestros servicios</p>
                        <h2 style={{color: "grey" }} className="mb-5">SIEMPRE LLEGAMOS A TIEMPO</h2>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow ">
                            <div className="card-body"> <i className="fas fa-cube h1 display-4 text-primary  mb-3"></i>
                                <h4 className="mt-4 mb-3">Calidad con total entrega</h4>
                                <p>CONTOSOX es una compañía líder en el segmento de la mensajería exprés en España, Andorra y Portugal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow ">
                            <div className="card-body"> <i className="fa fa-users h1 display-4 text-warning   mb-3"></i>
                                <h4 className="mt-4 mb-3">Nuestro objetivo: tu satisfacción</h4>
                                <p>Nuestro objetivo es desarrollar servicios que cumplan con las expectativas de nuestros clientes. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow ">
                            <div className="card-body"> <i className="fas fa-shuttle-van h1 display-4 text-danger  mb-3"></i>
                                <h4 className="mt-4 mb-3">Más que un transporte</h4>
                                <p>Ofrecemos una amplia gama de servicios nacionales, internacionales y de valor añadido.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow ">
                            <div className="card-body"> <i className="fa fa-search-plus h1 display-4 text-success  mb-3"></i>
                                <h4 className="mt-4 mb-3">Más información</h4>
                                <p>Acerquese a nuestras oficinas a solicitar más información o bien consultenos a través de email</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portada
