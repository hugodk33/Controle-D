import React from 'react';
import { withRouter } from 'react-router-dom';

import { IconeFormPaciente , IconeFormAtributo, IconeFormMedico } from './templates/icons/icones-formulario'

import Titulo from './templates/Titulo';
import Input from './templates/Inputs/Input';
import InputCRM from './templates/Inputs/InputCRM';
import InputN from './templates/Inputs/InputN';

const signUp = () => {

  return (
    <div className="container"> 
        <div className="row "> 
            <div className="col-sm-8 col-md-4" style={{margin: "0 auto"}}>
                <div className="row custom-form"> 
                    <div className={"col-12"}>
                        <h3>Cadastro de usuário</h3>
                        <hr />
                    </div>
                    <div className={"col-12"}>
                        <h5 className="titulo-3"><IconeFormPaciente /> DADOS PESSOAIS </h5>
                    </div>
                    <Input id="nome" label="NOME" type={"text"} col={"12"} />
                    <Input id="CPF" label="CPF" type={"int"} col={"12 col-sm-12"} />
                    <InputCRM id="CRM" label="CRM" type={"int"} col={"12 col-sm-12"} />
                    <div className={"col-12"}>
                        <h5 className="titulo-3"><IconeFormAtributo />  ACESSO </h5>
                    </div>
                    <Input id="EMAIL" label="EMAIL" type={"email"} col={"12 col-sm-12"} />
                    <Input id="USUARIO" label="USUÁRIO" type={"text"} col={"12 col-sm-12"} />
                    <Input id="SENHA" label="SENHA" type={"password"} col={"12 col-sm-12"} />
                    <Input id="CONFIRMAR" label="CONFIRMAR SENHA" type={"password"} col={"12 col-sm-12"} />
                    <div className="col-12 text-right">
                        <button className="btn btn-primary">CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(signUp);
