//const INITIAL_STATE = { description: '', list: [] }
import RefeicoesJson from "../../jsons/refeicoes"

export default (states = RefeicoesJson, action) => {
    return states
    /*
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
        
    }
    */
}