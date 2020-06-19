import alimentoAPI from "../../../apis/controleDAPi"
import { setPacientes, setPacienteIsLoading } from "./pacientes-reducers"
import pacientesMock from "../../jsons/pacientes.json"

export const getAllPacientes = (nome) => async dispatch => {
    
    try {
        if(nome){
            nome = nome.normalize()
        }
        dispatch(setPacienteIsLoading(true))
        // const pacientes = await alimentoAPI.get('usuario', {
        //     params: {
        //         nome,
        //         roleName:"Paciente"
        //     }
        // })
        // MOCK
        let pacientes = {
            data: pacientesMock
        };
        if(nome)
            pacientes = pacientes.filter(x => x.nome.normalize().includes(nome))
        // ENDMOCK 
        if(pacientes && pacientes.data)
            dispatch(setPacientes(pacientes.data))

    }catch(e){
        console.error(e)
    }
    finally{
        dispatch(setPacienteIsLoading(false))
    }
}