import React from 'react';
import { connect } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import Titulo from "../../templates/Titulo";
import Menu from "../../templates/Menu";
import Input from "../../templates/Inputs/Input";
import InputN from "../../templates/Inputs/InputN";
import InputSelect from "../../templates/Inputs/InputSelect";
import Calendario from "../../templates/Calendario";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';

const cadastrarRefeicao = () => {

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 canvas-board"> 
          <div className="container" style={{padding: 0}}>
            <Titulo titulo={"Cadastrar Refeição"}/>
            <div className="row" style={{marginBottom: "15px"}}>
              <div className="col-9">
                <div className="row">
                  <Input label="Nome da Refeição" col="12"/>
                  <InputN label="Hora" col="4"/>
                  <Input label="Data" col="4"/>
                  <InputSelect label="Nome da Refeição" col="4"/>
                </div>
              </div>
              <div className="col-3">
                <div class="doses-de-insulina-output dinamic">
                  <spam>10</spam>
                  <p class="subtitle">DOSES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 cinza">
          </div>  
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({list: state.Refeicoes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(cadastrarRefeicao);
