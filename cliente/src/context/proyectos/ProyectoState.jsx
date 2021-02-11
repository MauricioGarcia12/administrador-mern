import React,{useReducer} from 'react';

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
} from '../../types'




const ProyectoState = props =>{

    const proyectos = [
        {id:1,nombre:'tienda Virtual'},
        {id:2,nombre:'Sitio Web Design'},
        {id:3,nombre:'MERN'}
    ]

    const initialState ={
        proyectos:[],
        formulario :false
    }
    //dispatch para ejecutar las acciones
 const [state, dispatch] = useReducer(ProyectoReducer,initialState)

 //serie de funciones spara CRUD

    const mostrarFormulario = () =>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    //OBTENER LOS PROYECTOS
    const obtenerProyectos = () =>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })
    }

 return(
     <ProyectoContext.Provider
     value={{
         proyectos:state.proyectos,
         formulario:state.formulario,
         mostrarFormulario,
         obtenerProyectos
     }}
     >
         {props.children}
     </ProyectoContext.Provider>
 )
}

export default ProyectoState;