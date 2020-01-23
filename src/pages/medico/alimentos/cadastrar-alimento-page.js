import React from 'react';
import Titulo from '../../templates/Titulo';
//import Container from '../../templates/Container';
import Input from '../../templates/Input';
import { withRouter } from 'react-router-dom';

const CadastrarAlimento = () => {

  return (
    <div>
      <div class="container">
        <Titulo titulo="Cadastrar Alimento"/>
        <div class="row custom-form">
          <Input id="nome-do-alimento" label="NOME DO ALIMENTO" placeholder="Nome do Alimento" type={"text"} col={8} />
          <Input id="icone" label="ÍCONE" placeholder="" type={"text"} col={4}/>
          <Input id="porcao" label="PORÇÃO" placeholder="" type={"text"} col={4}/>
          <Input id="calorias" label="CALORIAS" placeholder="" type={"text"} col={4}/>
          <Input id="carboidratos" label="CARBO" placeholder="" type={"text"} col={4}/>
          <Input id="fibra" label="FIBRA" placeholder="" type={"text"} col={4}/>
          <Input id="proteina" label="PROTEÍNA" placeholder="" type={"text"} col={4}/>
          <Input id="gordura" label="GORDURA" placeholder="" type={"text"} col={4}/>
          <Input id="insulina" label="INSULÍNA" placeholder="" type={"text"} col={4}/>
          <Input id="doses" label="DOSES" placeholder="" type={"text"} col={4}/>          
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

export default withRouter(CadastrarAlimento);
