import React from 'react';
import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

const ListarAlimento = () => {

  return (
    <div>
        <div class="container">
          
          <Titulo  titulo="Pacientes" />
          <div class="row">
            <div class="col-md-8">
              <Input id="buscar-alimento" label="BUSCAR ALIMENTO" placeholder="digite o nome do alimento" type={"text"} />
            </div>
            <div class="col-md-4" style={{paddingRight: "0"}}>
              <button class="btn-azul" style={{width: "100%", padding: "10px 0"}}></button>
              <FontAwesomeIcon icon="coffee" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default withRouter(ListarAlimento);
