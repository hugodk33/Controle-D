import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import  { Teste } from './alimentos-actions'

import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import { withRouter } from 'react-router-dom';

const ListarAlimento = (props) => {
  return (
    <div>
        <div className="container">
          
          <Titulo  titulo="Alimentos" />
          <div className="row custom-form">
            <Input id="buscar-alimento" label="BUSCAR ALIMENTO" placeholder="digite o nome do alimento" type={"text"} col={9}/>
            <div className="col-3 ponta">
              <button className="btn btn-primary ponta" onClick={props.Teste}><i className="fa fa-spinner"/></button>
            </div>
          </div>
          <ul className="lista">
            { 
              props.list.Alimentos.map((a, b) => {
                return <ItemAlimento key={b} data={a}/>
              })
            }
          </ul>
        </div>
    </div>
  );
};

const mapStateToProps = state => ({list: state})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ Teste }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ListarAlimento);
