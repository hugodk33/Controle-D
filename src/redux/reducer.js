import { combineReducers } from 'redux'
import alimentosReducer from './../pages/medico/alimentos/alimentos-reducers'
import pacientesReducer from './../pages/medico/pacientes/pacientes-reducers'
import refeicoesReducer from './../pages/medico/pacientes/refeicoes-reducers'
import pacientesAlimentosReducer from './../pages/paciente/refeicoes/refeicoes-reducers'

const rootReducer = combineReducers({
    Alimentos: alimentosReducer,
    Pacientes: pacientesReducer,
    Refeicoes: refeicoesReducer,
    AlimentosPacientes: pacientesAlimentosReducer
})

export default pacientesAlimentosReducer