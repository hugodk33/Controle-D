import React from 'react';
import Titulo from "../../templates/Titulo";
import { withRouter } from 'react-router-dom';

const ListarPacientes = () => {

  return (
    <div>
        <div class="container">
        <Titulo titulo="Pacientes"/>
        <div class="row">
            <div class="col-12">
                <div class="avatar-pic">
                </div>
                <p>Nome da Pessoa</p>
            </div>
            <div class="col-2">
                <br />
            </div>
            <div class="col-2">
                <p class="subtitle">IDADE</p>
                <p>34</p>
            </div>
            <div class="col-2">
                <p class="subtitle">SEXO</p>
                <p>M</p>
            </div>
            <div class="col-2">
                <p class="subtitle">PESO</p>
                <p>60 kg</p>
            </div>
            <div class="col-2">
                <p class="subtitle">DIABETES</p>
                <p>1</p>
            </div>
            <div class="col-2">
                <br />
            </div>
        </div>
        </div>
        <div class="container-fluid cinza" cinza>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <input style={{width: "100%"}}/>
                    </div>
                    <div class="col-6">
                        <input style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col-2">
                <i class="fas fa-drumstick-bite"></i>
            </div>
            <div class="col-10">
                <p>Nome do Alimento</p>
            </div>
            <div class="col-2">
                <br />
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <hr style={{width: "100%"}}/>        
            </div>
            <div class="row">
            <div class="col-2">
                <i class="fas fa-drumstick-bite"></i>
            </div>
            <div class="col-10">
                <p>Nome do Alimento</p>
            </div>
            <div class="col-2">
                <br />
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <hr style={{width: "100%"}}/>        
            </div>
            <div class="row">
            <div class="col-2">
                <i class="fas fa-drumstick-bite"></i>
            </div>
            <div class="col-10">
                <p>Nome do Alimento</p>
            </div>
            <div class="col-2">
                <br />
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <div class="col-3">
                <p>titulo</p>
                <p>QTD</p>
            </div>
            <hr style={{width: "100%"}}/>        
            </div>
        </div>
    </div>
  );
};

export default withRouter(ListarPacientes);
