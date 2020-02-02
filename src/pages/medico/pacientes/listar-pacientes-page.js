import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'


import Titulo from "../../templates/Titulo";
import Menu from "../../templates/Menu";
import Input from '../../templates/Inputs/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import { withRouter } from 'react-router-dom';

const ListarPacientes = (props) => {
  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">       
          <Titulo  titulo="Pacientes" />
          <div className="row custom-form">
            <Input id="buscar-paciente" label="BUSCAR PACIENTE" placeholder="digite o nome do paciente" type={"text"} col="9" />
            <div className="col-3">
              <button className="btn btn-primary"><i className="fa fa-spinner"/></button>
            </div>
          </div>
          <ul className="lista">
            { 
              props.list.map((a , b) => {
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

const mapStateToProps = state => ({list: state.Pacientes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ListarPacientes);

