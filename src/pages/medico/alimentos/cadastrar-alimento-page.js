import React from 'react';
import Titulo from '../../templates/Titulo';
import Menu from '../../templates/Menu';
//import Container from '../../templates/Container';
import Input from '../../templates/Inputs/Input';
import InputN from '../../templates/Inputs/InputN';
import InputSelect from '../../templates/Inputs/InputSelect';
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
        <Titulo titulo="Cadastrar Alimento"/>
        <div className="row custom-form">
          <div className={"col-12"}><h5 className="titulo-3"><i className={"fa fa-spinner"}/> ALIMENTO </h5></div>
          <Input id="nome-do-alimento" label="NOME DO ALIMENTO" placeholder="Nome do Alimento" type={"text"} col={"12"} />
          <InputSelect id="porcao" label="PORÇÃO" placeholder="" type={"text"} col={"6 col-sm-9"}/>
          <InputSelect id="icone" label="ÍCONE" placeholder="" type={"text"} col={"6 col-sm-3"}/>
          <div className={"col-12"}><h5 className="titulo-3"><i className={"fa fa-spinner"}/> MEDICÍNA </h5></div>
          <InputSelect id="insulina" label="INSULÍNA" placeholder="" type={"text"} col={"12"}/>
          <div className={"col-12"}><h5 className="titulo-3"><i className={"fa fa-spinner"}/> ATRIBUTOS </h5></div>
          <InputN id="calorias" label="CALORIAS" placeholder="" type={"text"} col={"4 col-sm-3"}/>
          <InputN id="carboidratos" label="CARBO" placeholder="" type={"text"} col={"4 col-sm-3"}/>
          <InputN id="fibra" label="FIBRA" placeholder="" type={"text"} col={"4 col-sm-3"}/>
          <InputN id="proteina" label="PROTEÍNA" placeholder="" type={"text"} col={"4 col-sm-3"}/>
          <InputN id="gordura" label="GORDURA" placeholder="" type={"text"} col={"4 col-sm-3"}/>        
        </div>
      </div>
      <div className="container-fluid faixa cinza" style={{paddingTop: "5px", paddingBottom: "5px"}}>
          <div className="container">
            <div className="row" style={{margin: "10px 0"}}>
              <div className="col-12 " style={{padding: "0"}}>
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

export default withRouter(CadastrarAlimento);
