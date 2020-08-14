import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../templates/MenuMedico';
import Bio from '../templates/Bio';
import Titulo from '../templates/Titulo';
import TituloForm from "../templates/TituloForm";
import Input from '../templates/Inputs/Input';
import InputN from '../templates/Inputs/InputN';
import InputSelect from '../templates/Inputs/InputSelect';
import Button from "../templates/Inputs/Btn";
import { IconeTituloUserEdit } from "../templates/icons/icones-navegacao";

const usuarioEdit = () => {

  return (
    <div className="row main" style={{margin:"0"}}>
    <div className="col-12 col-sm-3 menu-lateral no-mobile">
      <div className="menu-hold">
        <Bio />
        <Menu/>
      </div>
    </div>
    <div className="col-12 col-md-6 canvas-board"> 
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <IconeTituloUserEdit />
            <Titulo titulo="Editar Usuário"/>     
          </div>
        </div>        
        <div className="row custom-form">
          <TituloForm icone="paciente" titulo="Dados Pessoais"/>
          <Input id="nome-do-usuario" label="NOME" type={"text"} col={"12"} />
          <Input id="cpf" label="PORÇÃO" placeholder="" type={"text"} col={"6 col-sm-6"}/>
          <Input id="icone" label="CRM" placeholder="" type={"text"} col={"6 col-sm-6"}/>
          <TituloForm icone="atributo" titulo="Acesso"/>         
          <Input id="email" label="EMAIL" type={"text"} col={"12"} />
          <Input id="senha" label="SENHA" placeholder="" type={"text"} col={"12 col-sm-6"}/>
          <Input id="confirmar-Senha" label="CONFIRMAR SENHA" placeholder="" type={"text"} col={"12 col-sm-6"}/>
          <div className="col-12"><br /></div> 
          <div className="col-md-4 text-right" style={{marginLeft: "auto"}}>
            <Button icone={"adicionar-paciente"} titulo={"CONFIRMAR"} />
          </div> 
        </div>
      </div>
    </div>
    <div className="col-12 menu-mobile no-desktop">
      <div className="menu-hold">
        <Menu bio={true} ativo="bio"/>
      </div>
    </div>
  </div>
  );
};

export default withRouter(usuarioEdit);
