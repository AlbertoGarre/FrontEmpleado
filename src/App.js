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

    const [usuarioEdicion, setUsuarioEdicion] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    const [codigoSeguimiento, setCodigoSeguimiento] = useState('')
    const [tarifaSeleccionada, setTarifaSeleccionada] = useState(0)
    const [tarifas, setTarifas] = useState([
        {
            id: 1,
            titulo: "Económica",
            Precio: "5 €",
            Cualidades: ["Hasta 1 kg de peso", "Volumen inferior a 30x20x10 cm", "Entrega antes de 48 horas", "El mejor servicio"],
        },
        {
            id: 2,
            titulo: "Hogar",
            Precio: "15 €",
            Cualidades: ["Hasta 7 kg de peso", "Volumen inferior a 50x50x50 cm", "Entrega antes de 48 horas", "El mejor servicio"],
        },
        {
            id: 3,
            titulo: "Profesional",
            Precio: "50 €",
            Cualidades: ["Hasta 25 kg de peso", "Volumen transportable por un operario", "Entrega antes de 48 horas", "El mejor servicio"],
        },
    ])


    const editaUsuario = (id) => {
        setUsuarioEdicion(id)
        console.log(usuarioEdicion)
    }

    useEffect(() => {
        const getUsuarios = async () => { await fetchUsuarios() }
        getUsuarios()


        //[] dependency array Si tienes un valor  y queremos que la función useEffect funcione si el valor cambia, pasaremos el valor dentro del array de dependencia [valor]
    }, [])

    //GET
    //fetch usuario (solo 1)
    const fetchUsuario = async (id) => {
        const res = await fetch(`http://localhost:5000/usuarios/${id}`)
        const data = await res.json()
        console.log(data)

        return data
    }

    //GET
    //fetch usuarios 
    const fetchUsuarios = async () => {
        const res = await fetch('http://localhost:5000/usuarios')
        const data = await res.json()
        //peticion GET de forma predeterminada
        setUsuarios(data)
    }

    //DELETE
    //borrar usuario
    const borraUsuario = async (id) => {
        await fetch(`http://localhost:5000/usuarios/${id}`, {
            method: 'DELETE'
        })
        fetchUsuarios()
    }

    //POST
    // crear usuario
    const añadeUsuario = async (usuario) => {
        const res = await fetch('http://localhost:5000/usuarios', {
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
        const res = await fetch(`http://localhost:5000/usuarios/${usuarioActualizado.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(usuarioActualizado),
        })
        setUsuarios(
            usuarios.map((usuario) =>
                usuario.id === usuarioActualizado.id ? usuarioActualizado : usuario
            )
        )
    }



    const seleccionaTarifa = (id) => {
        //establece el valor del nuevo estado
        setTarifaSeleccionada(id)
        //console.log
        console.log("Tarifa seleccionada: ", tarifaSeleccionada)
    }





    return (
        <Router>

            <HeaderInterno />
            <Routes>

                <Route path='/' element={<InicioGeneral />} />

                <Route path='/TareasFinalizadas' element={<ListaTareas terminada={true} />} />
                <Route path='/TareasPendientes' element={<ListaTareas terminada={false} />} />
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
