//const INITIAL_STATE = { description: '', list: [] }
import PacientesJson from "../../jsons/pacientes"

export default (states = PacientesJson, action) => {
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