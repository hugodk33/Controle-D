import { create } from "./refeicoes-actions";
import {createSlice } from '@reduxjs/toolkit'
let initialState = {
    refeicoes:[]
}

const refeicaoSlice = createSlice({
    name: 'AlimentosReducer',
    initialState,
    reducers: {
      setAlimentos(state, action) {
        state.alimentos = action.payload
      }
    }
  })

  export const {
    setAlimentos: setRefeicoes,
  } = refeicaoSlice.actions
  
  const refeicoesReducer = refeicaoSlice.reducer

  export default refeicoesReducer