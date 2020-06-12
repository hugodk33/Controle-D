import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputSelect from '../../templates/Inputs/InputSelect';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import pacientes from "../../jsons/pacientes"

import Button from "../../templates/Inputs/Btn";
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
      <div className="col-12 col-md-6 canvas-board">
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
              <Button icone={"buscar"} titulo={"BUSCAR PACIENTE"} />
            </div>
          </div>
          <div className="row" style={{backgroundColor: "rgb(247, 247, 247)", width: "100%", padding:"7px" , margin: "0 5px"}}>
            <InputSelect id="organizar-alimento" label="ORGANIZAR POR: " col="6 col-sm-4 organizar"/>
            <div className="col-6 col-sm-8">
            </div>
          </div>
          <PaginacaoBtn />
          <ul className="lista">
            { 
              pacientes.map((a , b) => {
                return <ItemPaciente key={b} data={a}/>
              })
            }
          </ul>
          <PaginacaoBtn />
        </div>
    </div>
    </div>
    </div>

  );
};

export default withRouter(ListarPacientes);

