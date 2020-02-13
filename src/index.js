import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducer'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Route } from 'react-router-dom';

import homePage from './pages/home-page';

import Top from './pages/templates/Head';

import paciente from './pages/paciente/paciente-page';
import cadastrarRefeicao from './pages/paciente/refeicoes/cadastrar-refeicao';

import medico from './pages/medico/medico-page';
import CadastrarPaciente from './pages/medico/pacientes/cadastrar-pacientes-page';
import listarPaciente from './pages/medico/pacientes/listar-pacientes-page';
import pacientes from './pages/medico/pacientes/pacientes-page';
import cadastrarAlimento from './pages/medico/alimentos/cadastrar-alimento-page';
import listarAlimentos from './pages/medico/alimentos/alimentos-conteiner';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Top />
      <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
        <Route exact path="/" component={homePage} />
        <Route exact path="/paciente" component={paciente} />
        <Route exact path="/paciente/cadastrar-refeicao" component={cadastrarRefeicao} />
        <Route exact path="/medico" component={medico} />
        <Route exact path="/medico/alimentos/cadastrar-alimento" component={cadastrarAlimento} />
        <Route exact path="/medico/alimentos/listar-alimento" component={listarAlimentos} />
        <Route exact path="/medico/pacientes/cadastrar-paciente" component={CadastrarPaciente} />
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
