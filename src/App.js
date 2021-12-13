import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderCliente from './components/HeaderCliente'
import Portada from './components/Portada'
import Tarifas from './components/Tarifas'
import Seguimiento from './components/Seguimiento'
import NuevoEnvio from './components/NuevoEnvio'
import InicioReparto from './components/InicioReparto'
import InicioAdmin from './components/InicioAdmin'
import TareasFinalizadas from './components/ListaTareas'
import TareasPendientes from './components/TareasPendientes'
import AsignacionTareas from './components/AsignacionTareas'
import NuevoUsuario from './components/NuevoUsuario'
import ListaUsuarios from './components/ListaUsuarios'
import PoliticaPrivacidad from './components/PoliticaPrivacidad'
import HeaderInterno from './components/HeaderInterno'
import Confirmacion from './components/Confirmacion'
import InicioGeneral from './components/InicioGeneral'
import ListaTareas from './components/ListaTareas'


const App = () => {

    const servidor = "localhost:8000"

    const [usuarioEdicion, setUsuarioEdicion] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)
    const [tarifas, setTarifas] = useState([])
    const [paquetes, setPaquetes] = useState([])

    const [usuarioActual, setUsuarioActual] = useState(4)

    //establece que tarifa vamos a contratar
    //es un estado que se guarda en FRONTEND, no en el servidor
    const seleccionaTarifa = (id) => {
        //establece el valor del nuevo estado
        setTarifaSeleccionada(id)
    }

    //establece que usuario vamos a editar
    //es un estado que se guarda en FRONTEND, no en el servidor
    const editaUsuario = (id) => {
        //establece el valor del nuevo estado
        setUsuarioEdicion(id)
    }

    
 ////////////////////////////PAQUETES////////////////////////////////////////////////////////
    //GET
    // (solo 1)
    const fetchPaquete = async (id) => {
        const res = await fetch(`http://${servidor}/api/paquetes/${id}`)
        const data = await res.json()
        return data
    }

    //GET
    //
    const fetchPaquetes = async () => {
        const res = await fetch(`http://${servidor}/api/paquetes`)
        const data = await res.json()
        //peticion GET de forma predeterminada
        setPaquetes(data.paquetes)
    }


    //POST
    // crear paquete
    const añadePaquete = async (paquete) => {
        const res = await fetch(`http://${servidor}/api/paquetes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(paquete),
        })
        fetchPaquetes()
    }

    //PUT
    //actualizar paquete
    const actualizaPaquete = async (paqueteActualizado) => {
        const res = await fetch(`http://${servidor}/api/paquetes/${paqueteActualizado.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(paqueteActualizado),
        })
        fetchPaquetes()
    }


    ////////////////////////////USUARIOS////////////////////////////////////////////////////////
    //GET
    // (solo 1)
    const fetchUsuario = async (id) => {
        const res = await fetch(`http://${servidor}/api/users/${id}`)
        const data = await res.json()
        return data
    }

    //GET
    //
    const fetchUsuarios = async () => {
        const res = await fetch(`http://${servidor}/api/users`)
        const data = await res.json()
        //peticion GET de forma predeterminada
        setUsuarios(data.usuarios)
    }

    //DELETE
    //borrar usuario
    const borraUsuario = async (id) => {
        await fetch(`http://${servidor}/api/users/${id}`, {
            method: 'DELETE'
        })
        fetchUsuarios()
    }

    //POST
    // crear usuario
    const añadeUsuario = async (usuario) => {
        const res = await fetch(`http://${servidor}/api/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
        fetchUsuarios()
    }

    //PUT
    //actualizar usuario
    const actualizaUsuario = async (usuarioActualizado) => {
        const res = await fetch(`http://${servidor}/api/users/${usuarioActualizado.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(usuarioActualizado),
        })
        fetchUsuarios()
    }



    ////////////////////////////TARIFAS////////////////////////////////////////////////////////

    //GET
    //
    const fetchTarifas = async () => {
        const res = await fetch(`http://${servidor}/api/tarifas`)
        const data = await res.json()
        //peticion GET de forma predeterminada
        setTarifas(data.tarifas)
    }

    
    useEffect(() => {
        fetchUsuarios()
        fetchTarifas()
        fetchPaquetes()
        //[] dependency array Si tienes un valor  y queremos que la función useEffect funcione si el valor cambia, pasaremos el valor dentro del array de dependencia [valor]
    }, [])


    return (
        <Router>

            <HeaderInterno />
            <Routes>

                <Route path='/' element={<InicioGeneral />} />

                <Route path='/TareasFinalizadas' element={<ListaTareas terminado={true} paquetes={paquetes} usuarioActual={usuarioActual}/>} />
                <Route path='/TareasPendientes' element={<ListaTareas terminado={false} paquetes={paquetes} usuarioActual={usuarioActual}/>} />
                <Route path='/AsignacionTareas' element={<AsignacionTareas />} />
                <Route path='/NuevoUsuario' element={<NuevoUsuario usuario={usuarios.find((usuario) => usuario.id == usuarioEdicion)} añadeUsuario={añadeUsuario} actualizaUsuario={actualizaUsuario} />} />
                <Route path='/ListaUsuarios' element={<ListaUsuarios usuarios={usuarios} setUsuarioEdicion={editaUsuario} borraUsuario={borraUsuario} />} />
                <Route path='/Confirmacion' element={<Confirmacion />} />
                <Route path='/NuevoEnvio' element={<NuevoEnvio tarifas={tarifas} seleccionaTarifa={seleccionaTarifa} tarifaSeleccionada={tarifaSeleccionada} añadePaquete={añadePaquete}/>} />


            </Routes>
            <Footer />
        </Router>
    )
}

export default App
