import React from 'react';
import Titulo from '../../templates/Titulo';
//import Container from '../../templates/Container';
import Input from '../../templates/Input';
import { withRouter } from 'react-router-dom';

const CadastrarAlimento = () => {

  return (
    <div>
      <div className="container">
        <Titulo titulo="Cadastrar Alimento"/>
        <div className="row custom-form">
          <Input id="nome-do-alimento" label="NOME DO ALIMENTO" placeholder="Nome do Alimento" type={"text"} col={8} />
          <Input id="icone" label="ÍCONE" placeholder="" type={"text"} col={"4 col-sm-2 ponta"}/>
          <Input id="porcao" label="PORÇÃO" placeholder="" type={"text"} col={"4 col-sm-2 ponta-dsktop"}/>
          <Input id="calorias" label="CALORIAS" placeholder="" type={"text"} col={"4 col-sm-2"}/>
          <Input id="carboidratos" label="CARBO" placeholder="" type={"text"} col={"4 col-sm-2 ponta"}/>
          <Input id="fibra" label="FIBRA" placeholder="" type={"text"} col={"4 col-sm-2"}/>
          <Input id="proteina" label="PROTEÍNA" placeholder="" type={"text"} col={"4 col-sm-2"}/>
          <Input id="gordura" label="GORDURA" placeholder="" type={"text"} col={"4 col-sm-2 ponta"}/>
          <Input id="insulina" label="INSULÍNA" placeholder="" type={"text"} col={"4 col-sm-2 ponta-dsktop"}/>
          <Input id="doses" label="DOSES" placeholder="" type={"text"} col={"4 col-sm-2 "}/>          
        </div>
      </div>
      <div className="container-fluid faixa cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
          <div className="container">
            <div className="row" style={{margin: "10px 0"}}>
              <div className="col-12 ">
                  <button className="btn btn-primary"> CADASTRAR </button>
              </div>  
            </div> 
          </div> 
      </div>
    </div>
  );
};

export default withRouter(CadastrarAlimento);
