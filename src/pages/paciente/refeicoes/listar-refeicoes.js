import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuPaciente";
import Input from '../../templates/Inputs/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import Button from "../../templates/Inputs/Btn";

import { IconeTituloBuscarRefeicoes } from '../../templates/icons/icones-navegacao'
import { withRouter } from 'react-router-dom';

const ListarRefeicoes = (props) => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <IconeTituloBuscarRefeicoes />
              <Titulo  titulo="Refeições"/>
            </div>
          </div>
          <div className="row custom-form">
            <Input id="buscar-medico" label="BUSCAR MÉDICO" placeholder="digite o nome do médico" type={"text"} col="9" />
            <div className="col-3">
              <Button icone={"buscar"} titulo={"BUSCAR REFEIÇÃO"} />
            </div>
          </div>
          <ul className="lista">
            { 
              
            }
          </ul>
        </div>
    </div>
    </div>
    </div>

  );
};

export default withRouter(ListarRefeicoes);

