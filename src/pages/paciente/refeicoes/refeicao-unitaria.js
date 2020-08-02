import React from 'react';
import { connect, useSelector } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuPaciente";
import Input from '../../templates/Inputs/Input';
import Calendario from "../../templates/Calendario";
import ItemAlimento from "../../templates/ItensListas/ItemAlimento";
import alimentos from "../../jsons/alimentos";
import Bio from '../../templates/Bio';

import Button from "../../templates/Inputs/Btn";

import { IconeTituloBuscarRefeicoes } from '../../templates/icons/icones-navegacao'
import { withRouter } from 'react-router-dom';

const Refeicoes = (props) => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral no-mobile">
          <div className="menu-hold">
            <Bio />
            <Menu />
          </div>
        </div>
        <div className="col-12 col-md-6 canvas-board"> 
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <IconeTituloBuscarRefeicoes />
                <Titulo  titulo="Refeições"/>
              </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Nome da Refeição</h3>
                </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="lista">
                  {     
                    alimentos.map((a , b) => {
                      return <ItemAlimento key={b} alimento={a}/>
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

export default withRouter(Refeicoes);

