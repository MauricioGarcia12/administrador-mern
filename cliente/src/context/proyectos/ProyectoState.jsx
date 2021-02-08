import React,{useReducer} from 'react';

import proyectoContext from './proyectoContext'
import ProyectoReducer from './ProyectoReducer'

const ProyectoState = props =>{
    const initialState ={
        formulario :false
    }
    //dispatch para ejecutar las acciones
 const [state, dispatch] = useReducer(ProyectoReducer,initialState)

 //serie de funcione spara CRUD
 return(
     <proyectoContext.Provider
     value={{
         formulario:state.nuevoProyecto
     }}
     >
         {props.children}
     </proyectoContext.Provider>
 )
}

export default ProyectoState;