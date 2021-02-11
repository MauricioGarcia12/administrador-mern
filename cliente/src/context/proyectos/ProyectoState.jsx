import React,{useReducer} from 'react';

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'
import {FORMULARIO_PROYECTO} from '../../types'
const ProyectoState = props =>{
    const initialState ={

        proyectos:[
            {id:1,nombre:'tienda Virtual'},
            {id:2,nombre:'Sitio Web Design'},
            {id:3,nombre:'MERN'}

        ],
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


 return(
     <ProyectoContext.Provider
     value={{
         proyectos:state.proyectos,
         formulario:state.formulario,
         mostrarFormulario
     }}
     >
         {props.children}
     </ProyectoContext.Provider>
 )
}

export default ProyectoState;