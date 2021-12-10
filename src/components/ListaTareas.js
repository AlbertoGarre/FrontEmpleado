import React from 'react'
import DesplegableTarea from './DesplegableTarea'

const ListaTareas = ({terminada}) => {

    const tareas = [
        {
            key: 1,
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
            key: 2,
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
            key: 3,
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

    return (
        <div id="content " className=" m-0 p-4 " style={{ width: "100%" }}>
            <br /><br /><br />
            <div id="accordion">

                {tareas
                    .filter((tarea) => tarea.terminada == terminada)
                    .map((tarea) => (
                        <DesplegableTarea
                            tarea={tarea}
                        />
                    ))}
            </div>
        </div>
    )
}
export default ListaTareas

