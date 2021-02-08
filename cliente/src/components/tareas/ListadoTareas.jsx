import React from 'react'
import NuevaTarea from './NuevaTarea'
const ListadoTareas = () => {

    const tareasProyecto =[
        {nombre:'Elegir Plataforma', estado:true},
        {nombre:'Elegir Colores', estado:false},
        {nombre:'Elegir Hosting', estado:false}
    ];

    return (
        <>
            <h2>Proyecto:Tienda Virtual</h2>
            <ul className='listado-tareas'>
                {tareasProyecto.length ===0
                    ?(<li className='tarea'><p>No hay tareas</p></li>)

                    :tareasProyecto.map(tarea =>(
                        <NuevaTarea
                        tarea={tarea}/>
                    ))
                }
                <button
                type='button'
                className=' btn incompleto'
                >Eliminar Proyecto</button>
            </ul>
        </>
    )
}

export default ListadoTareas
