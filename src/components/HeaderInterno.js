import React from 'react'

const HeaderInterno = () => {
    return (
    
            <nav 
            id="header" 
            className="w-100 d-flex justify-content-between cristal navbar navbar-expand-sm text-dark fixed-top navbar-light mx-0"
            >
                <a className="navbar-brand text-success" href="#"><i class="fab fa-contao display-4"></i></a>
                <div className="nav-item">
                    <h5 className=" nav-link bg-transparent text-success  text-muted pb-2" >Lista de reparto</h5>
                </div>
                <div>
                    <a className="text-success " style={{ visibility: ""}}>
                        Salir
                    </a>
                </div>
            </nav>
    )
}

export default HeaderInterno
