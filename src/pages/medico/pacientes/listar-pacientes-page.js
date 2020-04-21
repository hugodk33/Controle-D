import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import pacientes from "../../jsons/pacientes"

import {IconeTituloBuscarPaciente} from '../../templates/icons/icones-navegacao'
import {IconeBuscar} from '../../templates/icons/icones-botoes'

import { withRouter } from 'react-router-dom';

const ListarPacientes = (props) => {

  //const pacientes = useSelector(state => state.Pacientes)

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-9 canvas-board">
      <div className="col-12">
        <div className="container-fluid" style={{backgroundColor:"#dcdcdc"}}>
          <div className="row">
            <br />
          </div> 
        </div>
        </div>
        <div className="col-8">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <IconeTituloBuscarPaciente />
              <Titulo  titulo="Pacientes"/>
            </div>
          </div>
          <div className="row custom-form">
            <Input id="buscar-paciente" label="BUSCAR PACIENTE" placeholder="digite o nome do paciente" type={"text"} col="9" />
            <div className="col-3">
              <button className="btn btn-primary"><IconeBuscar /></button>
            </div>
          </div>
          <ul className="lista">
            { 
              pacientes.map((a , b) => {
                return <ItemPaciente key={b} data={a}/>
              })
            }
          </ul>
        </div>
        </div>
    </div>
    </div>
    </div>

  );
};

export default withRouter(ListarPacientes);

