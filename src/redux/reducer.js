import { combineReducers } from 'redux'
import todoReducer from './../pages/medico/alimentos/alimentos-reducers.js'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer