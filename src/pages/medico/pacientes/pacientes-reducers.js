import {createSlice } from '@reduxjs/toolkit'
let initialState = {
    pacientes:[],
    isLoading:false
}

const pacienteSlice = createSlice({
    name: 'AlimentosReducer',
    initialState,
    reducers: {
      setPacientes(state, action) {
        state.pacientes = action.payload
      },
      setPacienteIsLoading(state,action){
        state.isLoading = action.payload
      }
    }
  })

  export const {
    setPacientes: setPacientes,
    setPacienteIsLoading: setPacienteIsLoading,
  } = pacienteSlice.actions
  
  const pacientesReducer = pacienteSlice.reducer
  
  export default pacientesReducer