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

    const servidor = "192.168.1.47"

    const [usuarioEdicion, setUsuarioEdicion] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    const [codigoSeguimiento, setCodigoSeguimiento] = useState('')
    const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)
    const [tarifas, setTarifas] = useState([])

    const tareas = [
        {
            id: 1,
            tipo: "entrega",
            provincia: "Murcia",
            municipio: "Murcia",
            cp: "30007",
            direccion: "Avenida Abenarabi ",
            numero: "4",
            escalera: "2",
            planta: "4",
            puerta: "A",
            nombre: "roberto",
            apellidos: "Garcia Muñoz",
            telefono: "600123456",
            bultos: "5",
            observaciones: "Rápido",
            tarifa: "1",
            horario: "20:00",
            terminada: true,
        },
        {
            id: 2,
            tipo: "recogida",
            provincia: "Murcia",
            municipio: "Murcia",
            cp: "30100",
            direccion: "Camino del Carcanox",
            numero: "3",
            escalera: "",
            planta: "",
            puerta: "",
            nombre: "Jose Antonio",
            apellidos: "Gutierrez",
            telefono: "968123123",
            bultos: "1",
            observaciones: "",
            tarifa: "3",
            horario: "10:00",
            terminada: false,
        },
        {
            id: 3,
            tipo: "entrega",
            provincia: "Murcia",
            municipio: "Murcia",
            cp: "30020",
            direccion: "Calle Mayor",
            numero: "29",
            escalera: "",
            planta: "3",
            puerta: "B",
            nombre: "Ana",
            apellidos: "Marín",
            telefono: "648987987",
            bultos: "2",
            observaciones: "Entregar por la mañana",
            tarifa: "2",
            horario: "20:00",
            terminada: false,
        },
    ]

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

    


    ////////////////////////////USUARIOS////////////////////////////////////////////////////////
    //GET
    //fetch usuario (solo 1)
    const fetchUsuario = async (id) => {
        const res = await fetch(`http://${servidor}:5000/usuarios/${id}`)
        const data = await res.json()
        return data
    }

    //GET
    //fetch usuarios 
    const fetchUsuarios = async () => {
        const res = await fetch(`http://${servidor}:5000/usuarios`)
        const data = await res.json()
        //peticion GET de forma predeterminada
        setUsuarios(data)
    }

    //DELETE
    //borrar usuario
    const borraUsuario = async (id) => {
        await fetch(`http://${servidor}:5000/usuarios/${id}`, {
            method: 'DELETE'
        })
        fetchUsuarios()
    }

    //POST
    // crear usuario
    const añadeUsuario = async (usuario) => {
        const res = await fetch(`http://${servidor}:5000/usuarios`, {
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
        const res = await fetch(`http://${servidor}:5000/usuarios/${usuarioActualizado.id}`, {
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
    //fetch Tarifas
    const fetchTarifas = async () => {
        const res = await fetch(`http://${servidor}:5000/tarifas`)
        const data = await res.json()
        //peticion GET de forma predeterminada
        setTarifas(data)
    }

    


    useEffect(() => {
        fetchUsuarios()
        fetchTarifas()
        
        //[] dependency array Si tienes un valor  y queremos que la función useEffect funcione si el valor cambia, pasaremos el valor dentro del array de dependencia [valor]
    }, [])


    return (
        <Router>

            <HeaderInterno />
            <Routes>

                <Route path='/' element={<InicioGeneral />} />

                <Route path='/TareasFinalizadas' element={<ListaTareas terminada={true} tareas={tareas}/>} />
                <Route path='/TareasPendientes' element={<ListaTareas terminada={false} tareas={tareas}/>} />
                <Route path='/AsignacionTareas' element={<AsignacionTareas />} />
                <Route path='/NuevoUsuario' element={<NuevoUsuario usuario={usuarios.find((usuario) => usuario.id == usuarioEdicion)} añadeUsuario={añadeUsuario} actualizaUsuario={actualizaUsuario} />} />
                <Route path='/ListaUsuarios' element={<ListaUsuarios usuarios={usuarios} setUsuarioEdicion={editaUsuario} borraUsuario={borraUsuario} />} />
                <Route path='/Confirmacion' element={<Confirmacion />} />
                <Route path='/NuevoEnvio' element={<NuevoEnvio tarifas={tarifas} seleccionaTarifa={seleccionaTarifa} tarifaSeleccionada={tarifaSeleccionada} />} />


            </Routes>
            <Footer />
        </Router>
    )
}

export default App
