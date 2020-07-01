import React from 'react';
import { withRouter } from 'react-router-dom';

import { IconeFormPaciente , IconeFormAtributo, IconeFormMedico } from './templates/icons/icones-formulario'

import Titulo from './templates/Titulo';
import TituloForm from "./templates/TituloForm";
import Input from './templates/Inputs/Input';
import InputCRM from './templates/Inputs/InputCRM';
import InputN from './templates/Inputs/InputN';
import Btn from './templates/Inputs/Btn';

const signUp = () => {

  return (
    <div className="container-fluid" style={{backgroundImage: "linear-gradient(#6699CC, #58a8ff)", heigth: "100vh"}}> 
        <div className="container"> 
            <div className="row " style={{margin: 0, padding: "40px 0 90px"}}> 
                <div className="col-sm-4 col-md-8 infos-signup">
                    <h1 style={{color: 'white'}}>Lorem Ipsum Dolor Sit Amet</h1>
                    <p style={{color: 'white'}}>Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className="col-sm-8 col-md-4">
                    <div className={"moldura"} style={{backgroundColor: "white", paddingBottom: '10px'}}>
                        <div className="row custom-form" style={{margin: 0}}> 
                            <div className={"col-12"}>
                                <h3>Cadastro de usuário</h3>
                                <hr />
                            </div>
                            <TituloForm  icone="paciente" titulo="DADOS PESSOAIS" />
                            <Input id="nome" label="NOME" type={"text"} col={"12"} />
                            <Input id="CPF" label="CPF" type={"int"} col={"12 col-sm-12"} />
                            <InputCRM id="CRM" label="CRM" type={"int"} col={"12 col-sm-12"} />
                            <TituloForm  icone="atributo" titulo="ACESSO" />
                            <Input id="EMAIL" label="EMAIL" type={"email"} col={"12 col-sm-12"} />
                            <Input id="USUARIO" label="USUÁRIO" type={"text"} col={"12 col-sm-12"} />
                            <Input id="SENHA" label="SENHA" type={"password"} col={"12 col-sm-12"} />
                            <Input id="CONFIRMAR" label="CONFIRMAR SENHA" type={"password"} col={"12 col-sm-12"} />
                            <div className="col-12 col-sm-9 text-right">
                                <Btn icone={"adicionar-paciente"} titulo={" CADASTRAR"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(signUp);
