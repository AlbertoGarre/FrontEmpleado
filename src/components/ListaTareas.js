import React from 'react'
import DesplegableTarea from './DesplegableTarea'

const ListaTareas = ({terminada, tareas}) => {

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

