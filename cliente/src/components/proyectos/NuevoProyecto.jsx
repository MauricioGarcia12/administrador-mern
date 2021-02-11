import React,{useState,useContext} from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext';
const NuevoProyecto = () => {

    //obtener el state del formulario
     const proyectoContext = useContext(ProyectoContext)
     const {formulario}= proyectoContext;

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    const {nombre} =proyecto
    //leee contenidos del input
    const onCheageProyecto = e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e=>{
        e.preventDefault();

        //validar el proyecto

        //agregar al state

        //reiniciar el form
    }
    return (
        <>
            <button
            type='button'
            className='btn btn-block btn-primario'
            >
                NuevoProyecto
            </button>
            {
                formulario ?
                    (
                    <form action="" 
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}
                    >
                        <input 
                        type="text" 
                        className='input-text'
                        placeholder='Nombre Proyecto'
                        name='nombre'
                        onChange={onCheageProyecto}
                        value={nombre}
                        />

                        <input 
                        type="submit"
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                        />

                    </form>
                    )
                    :null
            }
        </>
    )
}

export default NuevoProyecto
