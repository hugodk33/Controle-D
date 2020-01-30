import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import Titulo from "../../templates/Titulo";
import Calendario from "../../templates/Calendario";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';

const Pacientes = (props) => {
  return (
    <div>
      <div className="container">
        <Titulo titulo={"Paciente"}/>
        <div className="row" style={{marginBottom: "15px"}}>
          <div className="col-12">
            <div className="img avatar"> </div>
          </div>
          <div className="col-12  col-sm-12 bio-paciente">
            <p> Nome do Paciente </p>
            <div className="row subrow">
              <SubRowItem valor={43} subtitulo="IDADE" col="3" />
              <SubRowItem valor={"75KG" } subtitulo="PESO" col="3" />
              <SubRowItem valor={"M"} subtitulo="SEXO" col="3" />
              <SubRowItem valor={13} subtitulo="CARBO" col="3" />
            </div>
          </div>
        </div>
      </div>
      <Calendario />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="lista" style={{margin: "0 auto", maxWidth: "600px"}}>
              { 
                props.list.map((a , b) => {
                  return <ItemRefeicao key={b} data={a}/>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({list: state.Refeicoes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Pacientes);