import {createSlice } from '@reduxjs/toolkit'
let initialState = {
    alimentos:[],
    isLoading:false
}

const alimentoSlice = createSlice({
    name: 'AlimentosReducer',
    initialState,
    reducers: {
      setAlimentos(state, action) {
        state.alimentos = action.payload
      },
      setAlimentoIsLoading(state,action){
        state.isLoading = action.payload
      }
    }
  })

  export const {
    setAlimentos,
    setAlimentoIsLoading,
  } = alimentoSlice.actions
  
  const alimentosReducer = alimentoSlice.reducer
  
  export default alimentosReducer