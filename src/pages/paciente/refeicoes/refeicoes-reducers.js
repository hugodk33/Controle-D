//const INITIAL_STATE = { description: '', list: [] }
import AlimentosPacientesJson from "../../jsons/alimentos-pacientes"

export default (states = AlimentosPacientesJson, action) => {
    return states
    /*
    switch(action.type) {
        /*
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
        
    }*/
}