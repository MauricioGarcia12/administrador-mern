import React,{useReducer} from 'react';

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

const ProyectoState = props =>{
    const initialState ={
        formulario :false
    }
    //dispatch para ejecutar las acciones
 const [state, dispatch] = useReducer(ProyectoReducer,initialState)

 //serie de funcione spara CRUD
 return(
     <ProyectoContext.Provider
     value={{
         formulario:state.formulario
     }}
     >
         {props.children}
     </ProyectoContext.Provider>
 )
}

export default ProyectoState;