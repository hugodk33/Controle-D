import React from 'react';

import Titulo from "../templates/Titulo";
import Menu from "../templates/Menu";
import Input from '../templates/Inputs/Input';
import ItemPaciente from '../templates/ItensListas/ItemPaciente';

import { withRouter } from 'react-router-dom';

const Medico = (props) => {
  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">
          <div className="row">
            <img className={"icone-topo"} src={require("../templates/icons/paciente-form-icon.svg")} />       
          </div>
          <Titulo  titulo="Menu" />
        </div>
      </div>
    </div>
    </div>

  );
};

export default withRouter(Medico);



