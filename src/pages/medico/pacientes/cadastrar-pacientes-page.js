import React from 'react';
import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';

const CadastrarPaciente = () => {

  return (
    <div>
      <div className="container">
        <Titulo titulo="Cadastrar Paciente"/>
        <div className="row custom-form">
            <Input id="nome-do-paciente" label="NOME DO PACIENTE" placeholder="Nome do paciente" type={"text"} col="8"/>
            <Input id="icone" label="ÍCONE" placeholder="" type={"text"} col="4 ponta"/>
            <Input id="porcao" placeholder="" label="PORÇÃO" type={"text"} col="4"/>
            <Input id="calorias" placeholder="" label="CALORIAS" type={"text"} col="4"/>       
        </div>
      </div>
      <div className="container-fluid faixa cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <button className="btn btn-primary"> CADASTRAR </button>
              </div>  
            </div> 
          </div> 
      </div>
  </div>
  );
};

export default CadastrarPaciente;
