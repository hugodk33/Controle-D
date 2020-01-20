import React from 'react';
import Titulo from "../../templates/Titulo";
import Input from '../../templates/Input';

const CadastrarPaciente = () => {

  return (
    <div>
    <div class="container">
      <Titulo titulo="Cadastrar Paciente"/>
      <div class="row">
        <div class="col-8" style={{paddingRight: "0"}}>
          <Input id="nome-do-paciente" label="NOME DO PACIENTE" placeholder="Nome do paciente" type={"text"}/> 
        </div>
        <div class="col-4">
          <Input id="nome-do-paciente" label="ÍCONE" placeholder="" type={"text"}/>
        </div> 
        <div class="col-4" style={{paddingRight: "0"}}>
          <Input id="porcao" placeholder="" type={"text"}/>
        </div> 
        <div class="col-4" style={{paddingRight: "0"}}>
          <Input id="calorias" placeholder="" type={"text"}/>
        </div>          
      </div>
    </div>
    <div class="container-fluid cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
        <div class="container">
          <div class="row" style={{margin: "10px 0"}}>
            <div class="col-12">
                <button class="btn btn-primary" style={{width: "100%", padding: "10px 0"}}> CADASTRAR </button>
            </div>  
          </div> 
        </div> 
    </div>
  </div>
  );
};

export default CadastrarPaciente;
