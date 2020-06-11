import alimentoAPI from "../../../apis/controleDAPi"
import { setPacientes, setPacienteIsLoading } from "./pacientes-reducers"

export const getAllPacientes = (nome) => async dispatch => {
    
    try {
        if(nome){
            nome = nome.normalize()
        }
        dispatch(setPacienteIsLoading(true))
        const pacientes = await alimentoAPI.get('usuario', {
            params: {
                nome,
                roleName:"Paciente"
            }
        })
        if(pacientes && pacientes.data)
            dispatch(setPacientes(pacientes.data))

    }catch(e){
        console.error(e)
    }
    finally{
        dispatch(setPacienteIsLoading(false))
    }
}