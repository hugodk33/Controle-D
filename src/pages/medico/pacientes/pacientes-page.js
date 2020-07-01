import React from 'react';
import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Calendario from "../../templates/Calendario";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import refeicoes from "../../jsons/refeicoes";
import { withRouter } from 'react-router-dom';

import {IconeTituloBuscarPaciente} from '../../templates/icons/icones-navegacao'

const Pacientes = (props) => {
  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
      <div className="col-12 col-md-6 canvas-board"> 
        <div className="container">
          <div className="row" style={{marginBottom: "15px"}}>
            <div className="col-12">
              <div className="img avatar"> </div>
            </div>
            <div className="col-12  col-sm-12 bio-paciente">
              <h5 style={{color: "#4b85e2"}}> Nome do Paciente </h5>
              <div className="row subrow" style={{maxWidth: "100%"}}>
                <SubRowItem valor={43} subtitulo="IDADE" col="3 ponta-esq" />
                <SubRowItem valor={"75KG" } subtitulo="PESO" col="3" />
                <SubRowItem valor={"M"} subtitulo="SEXO" col="3" />
                <SubRowItem valor={13} subtitulo="CARBO" col="3 ponta-dir" />
              </div>
            </div>
          </div>
          <Calendario />
          <div className="row">
            <div className="col-12">
              <ul className="lista">
                {     
                  refeicoes.map((a , b) => {
                    return <ItemRefeicao key={b} data={a}/>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

/*
const mapStateToProps = state => ({list: state.Refeicoes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Pacientes);
*/

export default withRouter(Pacientes);