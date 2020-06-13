import React from 'react';
import {IconeFormAlimento, IconeFormAtributo , IconeFormMedico , IconeFormPaciente , IconeFormRefeicao } from './icons/icones-formulario'

function icones(value) {
  switch(value) {
    case("alimento"):
      return <IconeFormAlimento />
    case("atributo"):
      return <IconeFormAtributo />
    case("medico"):
      return <IconeFormMedico /> 
    case("paciente"):
      return <IconeFormPaciente />
    case("refeicao"):
      return <IconeFormRefeicao />     
  }
}

const TituloForm = (props) => {
  return (
    <div className={"col-12 titulo-formulario text-left"}>
      <h5>{icones(props.icone)} {" " + props.titulo} </h5>
    </div>
  );
};

export default TituloForm;
