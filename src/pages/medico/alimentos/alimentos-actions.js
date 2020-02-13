import axios from 'axios';

const apiUrl = 'http://controle-d-api.azurewebsites.net/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: 'https://controle-d-api-2.azurewebsites.net/api/'
    // baseURL: 'http://localhost:58839/api/'
});



export const ADD_ALIMENTO = 'ADD_ALIMENTO'
export const GET_ALIMENTOS = 'GET_ALIMENTOS'
export const UPDATE_ALIMENTO = 'UPDATE_ALIMENTO'

export const addFood = (alimento, dispatch) => {
    const _alimento = translateAlimentToDTO(alimento)

    return api.post(`Alimento`,_alimento)
        .then(response => dispatch({ type: ADD_ALIMENTO, payload: response.data }))
        .catch(error => {
            throw (error);
        })

}

export const updateFood = () => {

}

export const getFoodById = (id) => {

}

export const getFoods = (dispatch, descricao) => {

    // return (dispatch) => {
    return api.get(`Alimento?descricao=${descricao ? descricao : ''}`)
        .then(response => {
            dispatch({ type: GET_ALIMENTOS, payload: response })
        })
        .catch(error => {

            throw (error);
        });
    // };
}


const translateAlimentToDTO = alimento => {
    return {
        descricao: alimento.descricao,
        categoriaId: 1,
        carboidrato: {
            qtd: alimento.carboidrato
        },
        Potassio: {
            qtd: alimento.potassio
        },
        FibraAlimentar: {
            qtd: alimento.fibra
        },
        proteina: {
            qtd: alimento.proteina
        },
        sodio: {
            qtd: alimento.sodio
        }
    }
}