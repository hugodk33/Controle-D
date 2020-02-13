import { combineReducers } from 'redux'
import alimentosReducer from './../pages/medico/alimentos/alimentos-reducers'
import pacientesReducer from './../pages/medico/pacientes/pacientes-reducers'
import refeicoesReducer from './../pages/medico/pacientes/refeicoes-reducers'

const rootReducer = combineReducers({
    Alimento: alimentosReducer,
    Pacientes: pacientesReducer,
    Refeicoes: refeicoesReducer
})

export default rootReducer