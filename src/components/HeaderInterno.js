import React from 'react'

const HeaderInterno = () => {
    return (
        <div>
            <nav id="header" className="container mx-0 cristal navbar navbar-expand-sm text-dark fixed-top navbar-light">
                <a className="navbar-brand text-success" href="#"><i class="fab fa-contao display-4"></i></a>
                <div className="nav-item">
                    <h5 className=" nav-link bg-transparent text-success  text-muted pb-2" >Lista de reparto</h5>
                </div>
                <div>
                    <a className="my-2 my-md-0 text-success d-flex justify-content-end">
                        Salir
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default HeaderInterno
