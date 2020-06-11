import alimentoAPI from "../../../apis/controleDAPi"
import {createAction } from '@reduxjs/toolkit'
import { setAlimentos, setAlimentoIsLoading} from "../../medico/alimentos/alimentos-reducers"

export const createAlimento = createAction('createAlimento', alimento => {

})

export const getAllAlimentos = (descricao) => async dispatch => {
    
    try {
        if(descricao){
            descricao = descricao.normalize()
        }
        dispatch(setAlimentoIsLoading(true))
        const alimentos = await alimentoAPI.get('alimento', {
            params: {
                descricao
            }
        })
        if(alimentos && alimentos.data)
            dispatch(setAlimentos(alimentos.data))

    }catch(e){
        console.error(e)
    }
    finally{
        dispatch(setAlimentoIsLoading(false))
    }
}