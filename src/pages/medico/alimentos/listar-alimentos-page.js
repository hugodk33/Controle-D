import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'


import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import { withRouter } from 'react-router-dom';

const ListarAlimento = (props) => {
  console.log("props.list")
  console.log(props.list)
  return (
    <div>
        <div class="container">
          
          <Titulo  titulo="Pacientes" />
          <div class="row custom-form">
            <Input id="buscar-alimento" label="BUSCAR ALIMENTO" placeholder="digite o nome do alimento" type={"text"} col={9}/>
            <div class="col-3">
              <button class="btn btn-primary"><i class="fa fa-spinner"/></button>
            </div>
          </div>
          <ul class="lista">
            <ItemAlimento nome="Alimento Tal" icon="spinner" />
            <ItemAlimento nome="Alimento Um" icon="address-book" />
            <ItemAlimento nome="Alimento Dois e Tres" icon="spinner" />
          </ul>
        </div>
    </div>
  );
};

const mapStateToProps = state => ({list: state})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ListarAlimento);
