
import AlimentosJson from "../../jsons/alimentos"
import { GET_ALIMENTOS, ADD_ALIMENTO } from "./alimentos-actions"
import { useStore } from "react-redux"
const INITIAL_STATE = { alimentos: [] }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALIMENTOS:
            return { ...state, alimentos: action.payload.data }
        case ADD_ALIMENTO:

            let alimentos = useStore().getState().Alimento.alimentos
            alimentos.push(action.payload)
            return { ...state, alimentos}
            
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    } 
}