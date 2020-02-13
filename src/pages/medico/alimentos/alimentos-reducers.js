
import AlimentosJson from "../../jsons/alimentos"
import { GET_ALIMENTOS } from "./alimentos-actions"
const INITIAL_STATE = { alimentos: AlimentosJson }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALIMENTOS:
            return { ...state, alimentos: action.payload.data }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    } 
}