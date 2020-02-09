import React from 'react';
import { connect, createSelectorHook, useSelector } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import  { Teste } from './alimentos-actions'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/Menu";
import Input from '../../templates/Inputs/Input';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import { withRouter } from 'react-router-dom';

const ListarAlimento = (props,state) => {

  const alimentos = useSelector(state => state.Alimentos)

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">
          <div className="row">
            <img className={"icone-topo"} src={require("../../templates/icons/buscar-alimento.svg")} />       
          </div>
          <Titulo  titulo="Alimentos" />
          <div className="row custom-form">
            <Input id="buscar-alimento" label="BUSCAR ALIMENTO" placeholder="digite o nome do alimento" type={"text"} col={9}/>
            <div className="col-3 ponta">
              <button className="btn btn-primary ponta" onClick={props.Teste}><i className="fa fa-spinner"/></button>
            </div>
          </div>
          <ul className="lista">
            { 
              alimentos.map((a, b) => {
                return <ItemAlimento key={b} data={a}/>
              })
            }
          </ul>
        </div>
    </div>
    </div>
    </div>
  );
};

export default withRouter(ListarAlimento);
