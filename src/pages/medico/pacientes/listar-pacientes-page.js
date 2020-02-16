import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import pacientes from "../../jsons/pacientes"

import { withRouter } from 'react-router-dom';

const ListarPacientes = (props) => {

  //const pacientes = useSelector(state => state.Pacientes)

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">
          <div className="row">
            <img className={"icone-topo"} src={require("../../templates/icons/buscar-paciente-2.svg")} />       
          </div>
          <Titulo  titulo="Pacientes" icone={"/../../templates/icons/cadastrar-alimento.svg"}/>
          <div className="row custom-form">
            <Input id="buscar-paciente" label="BUSCAR PACIENTE" placeholder="digite o nome do paciente" type={"text"} col="9" />
            <div className="col-3">
              <button className="btn btn-primary"><i className="fa fa-spinner"/></button>
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

  );
};

export default withRouter(ListarPacientes);

