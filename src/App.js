import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderCliente from './components/HeaderCliente'
import Portada from './components/Portada'
import Tarifas from './components/Tarifas'
import Seguimiento from './components/Seguimiento'
import NuevoEnvio from './components/NuevoEnvio'
import Acceso from './components/Acceso'
import InicioEmpleado from './components/InicioEmpleado'
import InicioAdmin from './components/InicioAdmin'
import TareasFinalizadas from './components/TareasFinalizadas'
import TareasPendientes from './components/TareasPendientes'
import AsignacionTareas from './components/AsignacionTareas'
import ConfirmacionDatos from './components/ConfirmacionDatos'
import NuevoEmpleado from './components/NuevoEmpleado'
import ListaUsuarios from './components/ListaUsuarios'
import PoliticaPrivacidad from './components/PoliticaPrivacidad'
import HeaderInterno from './components/HeaderInterno'



const App = () => {
    const [codigoSeguimiento, setCodigoSeguimiento] = useState('')

    const [tarifas, setTarifas] = useState([
        {
            key: 1,
            titulo: "Económica",
            Precio: "5 €",
            Cualidades: ["Hasta 1 kg de peso", "Volumen inferior a 30x20x10 cm", "Entrega antes de 48 horas", "El mejor servicio"],
        },
        {
            key: 2,
            titulo: "Hogar",
            Precio: "15 €",
            Cualidades: ["Hasta 7 kg de peso", "Volumen inferior a 50x50x50 cm", "Entrega antes de 48 horas", "El mejor servicio"],
        },
        {
            key: 3,
            titulo: "Profesional",
            Precio: "50 €",
            Cualidades: ["Hasta 25 kg de peso", "Volumen transportable por un operario", "Entrega antes de 48 horas", "El mejor servicio"],
        },
    ])

    const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)

    const pulsa = (key) => {
        //establece el valor del nuevo estado
        setTarifaSeleccionada(key)
        //console.log
        console.log("Tarifa seleccionada: ", tarifaSeleccionada)
    }



    return (
        <Router>

            <HeaderInterno/>
            <Routes>

                <Route path='/' element={<Acceso />} />
                <Route path='/Acceso' element={<Acceso />} />
                
                <Route path='/InicioEmpleado' element={<InicioEmpleado />} />
                <Route path='/InicioAdmin' element={<InicioAdmin />} />
                <Route path='/TareasFinalizadas' element={<TareasFinalizadas />} />
                <Route path='/TareasPendientes' element={<TareasPendientes />} />
                <Route path='/AsignacionTareas' element={<AsignacionTareas />} />
                <Route path='/ConfirmacionDatos' element={<ConfirmacionDatos />} />
                <Route path='/NuevoEmpleado' element={<NuevoEmpleado />} />
                <Route path='/ListaUsuarios' element={<ListaUsuarios />} />
               

            </Routes>
            <Footer />
        </Router>
    )
}

export default App
