import React from 'react';
import Titulo from '../../templates/Titulo';
import Menu from '../../templates/MenuMedico';
import {IconeTituloAdicionarAlimento} from "../../templates/icons/icones-navegacao"
//import Container from '../../templates/Container';
import Input from '../../templates/Inputs/Input';
import InputN from '../../templates/Inputs/InputN';
import InputSelect from '../../templates/Inputs/InputSelect';
import {IconeFormAlimento, IconeFormAtributo , IconeFormMedico } from '../../templates/icons/icones-formulario'
import { withRouter } from 'react-router-dom';


const CadastrarAlimento = () => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
      <div className="col-12 col-md-6 canvas-board"> 
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <IconeTituloAdicionarAlimento />
            <Titulo titulo="Cadastrar Alimento"/>     
          </div>
        </div>        
        <div className="row custom-form">
          <div className={"col-12"}><div style={{backgroundColor:"#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "16px"}}><h5 className="titulo-3"><IconeFormAlimento /> ALIMENTO </h5></div></div>
          <Input id="nome-do-alimento" label="ALIMENTO" type={"text"} col={"12"} />
          <InputSelect id="porcao" label="PORÇÃO" placeholder="" type={"text"} col={"6 col-sm-6"}/>
          <InputSelect id="icone" label="ÍCONE" placeholder="" type={"text"} col={"6 col-sm-6"}/>
          <div className={"col-12"}><div style={{backgroundColor:"#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "16px"}}><h5 className="titulo-3"><IconeFormMedico />  MEDICÍNA </h5></div></div>
          <InputSelect id="insulina" label="INSULÍNA" placeholder="" type={"text"} col={"6"}/>
          <InputSelect id="risco" label="RISCO" placeholder="" type={"text"} col={"6"}/>
          <div className={"col-12"}><div style={{backgroundColor:"#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "16px"}}><h5 className="titulo-3"><IconeFormAtributo /> ATRIBUTOS </h5></div></div>
          <InputN id="calorias" label="CALORIAS" placeholder="" type={"text"} col={"4 col-sm-4"}/>
          <InputN id="carboidratos" label="CARBO" placeholder="" type={"text"} col={"4 col-sm-4"}/>
          <InputN id="fibra" label="FIBRA" placeholder="" type={"text"} col={"4 col-sm-4"}/>
          <InputN id="proteina" label="PROTEÍNA" placeholder="" type={"text"} col={"4 col-sm-4"}/>
          <InputN id="gordura" label="GORDURA" placeholder="" type={"text"} col={"4 col-sm-4"}/>
          <div className="col-12 text-right" style={{padding: "0"}}>
              <button className="btn btn-primary"> CADASTRAR </button>
          </div>          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default withRouter(CadastrarAlimento);
