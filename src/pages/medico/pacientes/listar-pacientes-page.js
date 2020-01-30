import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'


import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import { withRouter } from 'react-router-dom';

const ListarPacientes = (props) => {
  return (
    <div>
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
  );
};

const mapStateToProps = state => ({list: state.Pacientes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ListarPacientes);

