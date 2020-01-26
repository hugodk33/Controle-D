import React from 'react';
import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';

const CadastrarPaciente = () => {

  return (
    <div>
    <div class="container">
      <Titulo titulo="Cadastrar Paciente"/>
      <div class="row custom-form">
          <Input id="nome-do-paciente" label="NOME DO PACIENTE" placeholder="Nome do paciente" type={"text"} col="8"/>
          <Input id="icone" label="ÍCONE" placeholder="" type={"text"} col="4 ponta"/>
          <Input id="porcao" placeholder="" label="PORÇÃO" type={"text"} col="4"/>
          <Input id="calorias" placeholder="" label="CALORIAS" type={"text"} col="4"/>       
      </div>
    </div>
    <div class="container-fluid cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
        <div class="container">
          <div class="row">
            <div class="col-12">
                <button class="btn btn-primary"> CADASTRAR </button>
            </div>  
          </div> 
        </div> 
    </div>
  </div>
  );
};

export default CadastrarPaciente;
