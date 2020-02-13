import axios from 'axios';

const apiUrl = 'http://controle-d-api.azurewebsites.net/api/';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: 'https://controle-d-api-2.azurewebsites.net/api/'
    // baseURL: 'http://localhost:58839/api/'
  });
  
  

export const ADD_ALIMENTO = 'ADD_ALIMENTO'
export const GET_ALIMENTOS = 'GET_ALIMENTOS'
export const UPDATE_ALIMENTO = 'UPDATE_ALIMENTO'

export const addFood = () => {

}

export const updateFood = () => {

}

export const getFoodById = (id) => {

}

export const getFoods = (dispatch,descricao) => {
    
    // return (dispatch) => {
    return api.get(`Alimento?descricao=${descricao ? descricao : ''}`)
        .then(response => {
            dispatch({ type: GET_ALIMENTOS, payload: response })
        })
        .catch(error => {
            
            throw (error);
        });
    // };
};