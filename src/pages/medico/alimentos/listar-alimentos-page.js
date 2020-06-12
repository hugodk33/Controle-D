import React from 'react';
import { connect, createSelectorHook, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputSelect from '../../templates/Inputs/InputSelect';
import OrganizaLista from '../../templates/ItensListas/paginacao/organiza-lista';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import alimentos from "../../jsons/alimentos";

import Button from "../../templates/Inputs/Btn";
import {IconeTituloBuscarAlimento} from '../../templates/icons/icones-navegacao'
import {IconeBuscar} from '../../templates/icons/icones-botoes'

import { withRouter } from 'react-router-dom';

const ListarAlimento = (props,state) => {

  //const alimentos = useSelector(state => state.Alimentos)

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
                  <IconeTituloBuscarAlimento />
                  <Titulo  titulo="Alimentos" />
              </div>
            </div>
            <div className="row custom-form">
              <Input id="buscar-alimento" label="BUSCAR ALIMENTO" placeholder="digite o nome do alimento" type={"text"} col={9}/>
              <div className="col-3 ponta">
                <Button icone={"buscar"} titulo={"BUSCAR ALIMENTOS"} />
              </div>
                <OrganizaLista />
            </div>
            <PaginacaoBtn />
            <ul className="lista">
              { 
                alimentos.map((a, b) => {
                  return <ItemAlimento key={b} data={a}/>
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

export default withRouter(ListarAlimento);
