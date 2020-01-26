import { combineReducers } from 'redux'
import alimentosReducer from './../pages/medico/alimentos/alimentos-reducers.js'
import pacientesReducer from './../pages/medico/pacientes/pacientes-reducers.js'

const rootReducer = combineReducers({
    Alimentos: alimentosReducer,
    Pacientes: pacientesReducer
})

export default rootReducer