import React from 'react';
import Titulo from "../../templates/Titulo";
import TituloForm from "../../templates/TituloForm";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputN from '../../templates/Inputs/InputN';
import InputSelect from '../../templates/Inputs/InputSelect';
import InputText from '../../templates/Inputs/InputTextArea';
import Button from "../../templates/Inputs/Btn";
import { IconeTituloAdicionarPaciente } from '../../templates/icons/icones-navegacao'
import { IconeFormAtributo, IconeFormMedico, IconeFormPaciente } from '../../templates/icons/icones-formulario'
import { IconeTituloAdicionarPaciente } from '../../templates/icons/icones-navegacao'
import { IconeFormAtributo, IconeFormMedico, IconeFormPaciente } from '../../templates/icons/icones-formulario'
import { Form, withFormik } from 'formik';

const paciente = {};

const formPaciente = withFormik({
  mapPropsToValues: () => (paciente),
  handleSubmit: values => {
    // console.log(values)
  }
})

const CadastrarPaciente = () => {

  return (
    <div>
      <div className="row main" style={{ margin: "0" }}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 canvas-board">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center  ">
                <IconeTituloAdicionarPaciente />
                <Titulo titulo="Cadastrar Paciente" />
              </div>
            </div>
            <div className="row custom-form">
              <TituloForm icone="paciente" titulo="Paciente" />
              <Input id="nome-do-paciente" label="NOME DO PACIENTE" placeholder=" " type={"text"} col="12 col-sm-12" />
              <InputSelect id="sexo" label="SEXO" placeholder=" " type={"text"} col="6" />
              <Input id="data" label="DATA DE NASCIMENTO" placeholder=" " type={"text"} col="6" />
              <TituloForm icone="medico" titulo="Condiçao" />
              <InputN id="peso" label="PESO" placeholder=" " type={"text"} col="6" />
              <InputSelect id="diabetes" label="DIABETES" placeholder=" " type={"text"} col="6" />
              <Input id="foto" label="FOTO" placeholder="" type={"text"} col="10" />
              <div className="col-2">
                <Button titulo={"UPLOAD"} />
              </div>
              <TituloForm icone="medico" titulo="Observações" />
              <InputText id="observacao" label="OBSERVAÇÃO" placeholder="" type={"text"} col="12 col-sm-12" />
              <div className="col-12"><br /></div>
              <div className="col-md-4 text-right" style={{ marginLeft: "auto" }}>
                <Button icone={"adicionar-paciente"} titulo={"CADASTRAR PACIENTE"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formPaciente(CadastrarPaciente);
