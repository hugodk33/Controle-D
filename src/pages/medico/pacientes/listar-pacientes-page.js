import React from 'react';

import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';

import { withRouter } from 'react-router-dom';


const ListarPacientes = () => {

  return (
    <div>
        <div class="container">
          <Titulo  titulo="Pacientes" />
          <div class="row custom-form">
            <Input id="buscar-paciente" label="BUSCAR PACIENTE" placeholder="digite o nome do paciente" type={"text"} col="9" />
            <div class="col-3">
              <button class="btn btn-primary"><i class="fa fa-spinner"/></button>
            </div>
          </div>
          <ul class="lista">
            <ItemPaciente />
            <ItemPaciente />
            <ItemPaciente />
            <ItemPaciente />
            <ItemPaciente />
            <ItemPaciente />
          </ul>
        </div>
    </div>
  );
};

export default withRouter(ListarPacientes);
