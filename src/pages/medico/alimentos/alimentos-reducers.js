//const INITIAL_STATE = { description: '', list: [] }
import AlimentosJson from "../../jsons/alimentos"

export default (state = AlimentosJson, action) => {
    return state
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