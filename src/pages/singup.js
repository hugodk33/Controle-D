import React from 'react';
import { withRouter } from 'react-router-dom';

import Titulo from './templates/Titulo';
import Input from './templates/Inputs/Input';
import InputN from './templates/Inputs/InputN';

//<img className={"icone-form"} src={require("./templates/icons/paciente-form-icon.svg")} />

const signUp = () => {

  return (
    <div className="container"> 
        <div className="row "> 
            <div className="col=12 col-sm-8 col-md-6" style={{margin: "0 auto"}}>
                <div className="row">
                      
                </div>
                <Titulo  titulo="Alimentos" />    
                <div className="row custom-form"> 
                    <div className={"col-12"}><h5 className="titulo-3"> NOME </h5></div>
                    <Input id="nome" label="NOME" type={"text"} col={"12 col-sm-12 col-md-6"} /> 
                    <Input id="sobrenome" label="SOBRENOME" type={"text"} col={"12 col-sm-12 col-md-6"} />
                    <div className={"col-12"}><h5 className="titulo-3"> DADOS </h5></div>
                    <Input id="CPF" label="CPF" type={"int"} col={"6 col-sm-6"} />
                    <Input id="CRM" label="CRM" type={"int"} col={"6 col-sm-6"} />
                    <div className={"col-12"}><h5 className="titulo-3"> INSULINA </h5></div>
                    <InputN id="insulina-grama" label="INSULINA P/ GRAMA" type={"text"} col={"12"} />
                    <div className="col-12">
                        <br />
                        <button className="btn btn-primary">CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(signUp);
