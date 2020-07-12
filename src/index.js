import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducer'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { BrowserRouter, Route } from 'react-router-dom';

import homePage from './pages/home-page';
import signUp from './pages/singup';
import usuarioEdit from './pages/usuario/edicao';

import Top from './pages/templates/head';

import paciente from './pages/paciente/paciente-page';
import cadastrarRefeicao from './pages/paciente/refeicoes/cadastrar-refeicao';
import buscarRefeicao from './pages/paciente/refeicoes/listar-refeicoes';
import buscarMedico from './pages/paciente/medicos/listar-medicos';

import medico from './pages/medico/medico-page';
import cadastrarPaciente from './pages/medico/pacientes/cadastrar-pacientes-page';
import listarPaciente from './pages/medico/pacientes/listar-pacientes-page';
import pacientes from './pages/medico/pacientes/pacientes-page';
import cadastrarAlimento from './pages/medico/alimentos/cadastrar-alimento-page';
import listarAlimentos from './pages/medico/alimentos/listar-alimentos-page';
import alimentosReducer from './pages/paciente/refeicoes/refeicoes-reducers';
import { configureStore } from '@reduxjs/toolkit';

var reducer = combineReducers({
  alimento:alimentosReducer
})

const store = configureStore({
  reducer:rootReducer
})

ReactDOM.render( 
  <Provider store={store}>
  <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <Route exact path="/" component={homePage} />
      <Route exact path="/signup" component={signUp} />
      <Route exact path="/user-edit" component={usuarioEdit} />
      <Route exact path="/paciente" component={paciente} />
      <Route exact path="/paciente/refeicoes/cadastrar-refeicao" component={cadastrarRefeicao} />
      <Route exact path="/paciente/refeicoes/buscar-refeicao" component={buscarRefeicao} />
      <Route exact path="/paciente/medicos/buscar-medicos" component={buscarMedico} />
      <Route exact path="/medico" component={medico} />
      <Route exact path="/medico/alimentos/cadastrar-alimento" component={cadastrarAlimento} />
      <Route exact path="/medico/alimentos/listar-alimento" component={listarAlimentos} />
      <Route exact path="/medico/pacientes/cadastrar-paciente" component={cadastrarPaciente} />
      <Route exact path="/medico/pacientes/listar-paciente" component={listarPaciente} />
      <Route exact path="/medico/pacientes/paciente" component={pacientes} />
    </BrowserRouter>
  </div>
  {/* <div>{process.env.PUBLIC_URL}</div> */}
  </Provider>,
  document.getElementById('root')
);

// Learn more about service workers in CRA: http://bit.ly/CRA-PWA
serviceWorker.default();
