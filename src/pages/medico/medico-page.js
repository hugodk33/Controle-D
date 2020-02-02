import React from 'react';
import Titulo from "../templates/Titulo";
import Menu from "../templates/Menu";
import Input from '../templates/Inputs/Input';

const Medico = () => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
      <div className="col-12 col-sm-3 menu-lateral">
        <Menu />
      </div>
      <div className="col-12 col-md-4 canvas-board"> 
      <div className="container">
        <Titulo titulo="Cadastrar Paciente"/>
        <div className="row custom-form">
            <Input id="nome-do-paciente" label="NOME DO PACIENTE" placeholder="Nome do paciente" type={"text"} col="8 col-sm-12"/>
            <Input id="icone" label="ÍCONE" placeholder="" type={"text"} col="4 col-sm-3"/>
            <Input id="porcao" label="PORÇÃO" placeholder="" type={"text"} col="4 col-sm-3"/>
            <Input id="calorias" label="CALORIAS" placeholder="" type={"text"} col="4 col-sm-3"/>       
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
  </div>
  </div>
  );
};

export default Medico;

