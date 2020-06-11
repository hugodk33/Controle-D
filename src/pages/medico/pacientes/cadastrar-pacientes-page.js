import React from 'react';
import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputN from '../../templates/Inputs/InputN';
import InputSelect from '../../templates/Inputs/InputSelect';
import InputText from '../../templates/Inputs/InputTextArea';
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
            <Form>
              <div className="row custom-form">
                <div className={"col-12"}><div style={{ backgroundColor: "#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "12px" }}><h5 className="titulo-3"><IconeFormPaciente /> PACIENTE </h5></div></div>
                <Input isFormik={true} name="nome" id="nome-do-paciente" label="NOME DO PACIENTE" placeholder=" " type={"text"} col="12 col-sm-12" />
                <InputSelect id="sexo" label="SEXO" placeholder=" " type={"text"} col="6" />
                <Input isFormik={true} id="data" label="DATA DE NASCIMENTO" placeholder=" " type={"text"} col="6" />
                <div className={"col-12"}><div style={{ backgroundColor: "#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "12px" }}><h5 className="titulo-3"><IconeFormMedico /> CONDIÇÃO </h5></div></div>
                <InputN id="peso" label="PESO" placeholder=" " type={"text"} col="6" />
                <InputSelect id="diabetes" label="DIABETES" placeholder=" " type={"text"} col="6" />
                <Input isFormik={true} id="foto" label="FOTO" placeholder="" type={"text"} col="10" />
                <div className="col-2">
                  <button className="btn btn-primary" style={{ width: "100%" }}>Upload</button>
                </div>
                <div className={"col-12"}><div style={{ backgroundColor: "#f4f4f4", width: "100%", padding: "0 10px", marginBottom: "12px" }}><h5 className="titulo-3"><IconeFormAtributo /> OBSERVAÇÕES </h5></div></div>
                <InputText id="observacao" label="OBSERVAÇÃO" placeholder="" type={"text"} col="12 col-sm-12" />
                <div className="col-12 text-right" style={{ marginTop: "15px" }}>
                  <button type="submit" className="btn btn-primary"> CADASTRAR </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formPaciente(CadastrarPaciente);
