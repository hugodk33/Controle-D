import React from 'react';
import Titulo from '../../templates/Titulo';
import Input from '../../templates/Input';
import { withRouter } from 'react-router-dom';

const CadastrarAlimento = () => {

  return (
    <div>
      <div class="container">
        <Titulo titulo="Cadastrar Alimento"/>
        <div class="row">
          <div class="col-8" style={{paddingRight: "0"}}>
            <Input id="nome-do-alimento" label="NOME DO ALIMENTO" placeholder="Nome do Alimento" type={"text"}/> 
          </div>
          <div class="col-4">
            <Input id="nome-do-alimento" label="ÍCONE" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="porcao" label="PORÇÃO" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="calorias" label="CALORIAS" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4" >
            <Input id="carboidratos" label="CARBO" placeholder="" type={"text"}/>
          </div>
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="fibra" label="FIBRA" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="proteina" label="PROTEÍNA" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4">
            <Input id="gordura" label="GORDURA" placeholder="" type={"text"}/>
          </div>
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="insulina" label="INSULÍNA" placeholder="" type={"text"}/>
          </div> 
          <div class="col-4" style={{paddingRight: "0"}}>
            <Input id="doses" label="DOSES" placeholder="" type={"text"}/>
          </div>          
        </div>
      </div>
      <div class="container-fluid cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
          <div class="container">
            <div class="row" style={{margin: "10px 0"}}>
              <div class="col-12">
                  <button class="btn-azul" style={{width: "100%", padding: "10px 0"}}> CADASTRAR </button>
              </div>  
            </div> 
          </div> 
      </div>
    </div>
  );
};

export default withRouter(CadastrarAlimento);
