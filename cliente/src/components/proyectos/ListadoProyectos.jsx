import React,{useContext} from 'react'
import Proyecto from './Proyecto'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
const ListadoProyectos = () => {

    //EXTRAER PROYECTOS DE STATE INCIAL
    const proyectoContext = useContext(ProyectoContext)
    const {proyectos} =proyectoContext;

    //REVISAR SI PROYECTOS TIENE CONTENIDO
    if(proyectos.length ===0 )return null;
    
    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                key={proyecto.id}
                proyecto={proyecto}/>
            ))}
        </ul>
    )
}

export default ListadoProyectos
