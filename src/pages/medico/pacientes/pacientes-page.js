import React from 'react';
import Titulo from "../../templates/Titulo";
import Calendario from "../../templates/Calendario";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';

const Pacientes = (props) => {

  return (
    <div>
      <div class="container">
        <Titulo titulo={"Paciente"}/>
        <div class="row">
          <div class="col-3">
            <div class="img avatar"> </div>
          </div>
          <div class="col-9 bio-paciente">
            <h5> Nome do Paciente </h5>
            <div class="row subrow">
              <SubRowItem valor={43} subtitulo="IDADE" col="3" />
              <SubRowItem valor={"75KG" } subtitulo="PESO" col="3" />
              <SubRowItem valor={"M"} subtitulo="SEXO" col="3" />
              <SubRowItem valor={13} subtitulo="CARBO" col="3" />
            </div>
          </div>
        </div>
      </div>
      <Calendario />
      <div class="container">
        <ul class="lista">
          <ItemRefeicao nome="Primeira Refeição" icon="spinner"/>
          <ItemRefeicao nome="Segunda Refeição" icon="spinner" />
          <ItemRefeicao nome="Terceira Refeição" icon="spinner" />
          <ItemRefeicao nome="Quarta Refeição" icon="spinner" />
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Pacientes);
