import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuPaciente";
import Input from '../../templates/Inputs/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import Button from "../../templates/Inputs/Btn";
import OrganizaLista from '../../templates/ItensListas/paginacao/organiza-lista';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';

import { IconeTituloBuscarMedico } from '../../templates/icons/icones-navegacao'
import { withRouter } from 'react-router-dom';

import pacientes from "../../jsons/pacientes"

const ListarMedicos = (props) => {

  const pacientes = useSelector(state => state.Pacientes)

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
              <IconeTituloBuscarMedico />
              <Titulo  titulo="Médicos"/>
            </div>
          </div>
          <div className="row custom-form">
            <Input id="buscar-medico" label="BUSCAR MÉDICO" placeholder="digite o nome do médico" type={"text"} col="9" />
            <div className="col-3">
              <Button icone={"buscar-medico"} titulo={"BUSCAR REFEIÇÃO"} />
            </div>
          </div>
          <OrganizaLista />
          <PaginacaoBtn label="ORDENAR POR"/>
          <ul className="lista">
            { 
              
            }
          </ul>
          <PaginacaoBtn />
        </div>
    </div>
    </div>
    </div>

  );
};

export default withRouter(ListarMedicos);

