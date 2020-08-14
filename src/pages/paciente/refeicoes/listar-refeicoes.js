import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuPaciente";
import Input from '../../templates/Inputs/Input';
import Calendario from "../../templates/Calendario";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import refeicoes from "../../jsons/refeicoes";
import Bio from '../../templates/Bio';
import OpcoesDeUsuario from '../../templates/opcoesDeUsuario';

import Button from "../../templates/Inputs/Btn";

import { IconeTituloBuscarRefeicoes } from '../../templates/icons/icones-navegacao'
import { withRouter } from 'react-router-dom';

const ListarRefeicoes = (props) => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral no-mobile">
          <div className="menu-hold">
            <Bio />
            <Menu  ativo="listar-refeicao"/>
          </div>
        </div>
        <div className="col-12 col-md-6 canvas-board"> 
          <div className="container">
            <div className="row">
              <OpcoesDeUsuario />
              <div className="col-12 text-center">
                <IconeTituloBuscarRefeicoes />
                <Titulo  titulo="Refeições"/>
              </div>
            </div>
            <div className="row">
              <Input id="buscar-medico" label="BUSCAR REFEIÇÃO" placeholder="digite o nome do médico" type={"text"} col="12 col-sm-9" />
              <div className="col-12 col-sm-3" style={{marginBottom: "12px"}} >
                <Button icone={"buscar-refeicao"} titulo={"BUSCAR REFEIÇÃO"} />
              </div>
              <Calendario />
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="lista">
                  {     
                    refeicoes.map((a , b) => {
                      return <ItemRefeicao key={b} data={a}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="col-12 menu-mobile no-desktop">
        <div className="menu-hold">
          <Menu bio="true" ativo="listar-refeicao"/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default withRouter(ListarRefeicoes);

