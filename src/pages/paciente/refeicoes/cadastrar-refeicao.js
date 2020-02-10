import React from 'react';
import { connect, createSelectorHook, useSelector } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import Titulo from "../../templates/Titulo";
import Menu from "../../templates/Menu";
import Input from "../../templates/Inputs/Input";
import InputN from "../../templates/Inputs/InputN";
import InputSelect from "../../templates/Inputs/InputSelect";
import SomatoriaAlimentos from "../../templates/SomatoriaAlimentos";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';

const cadastrarRefeicao = (state , props) => {

  //const alimentos = useSelector(state => state.Alimentos)

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 col-md-6 canvas-board"> 
          <div className="container" style={{padding: 0}}>
            <Titulo titulo={"Cadastrar Refeição"}/>
            <div className="row" style={{marginBottom: "15px"}}>
              <div className="col-9 col-sm-11">
                <div className="row">
                  <Input label="Nome da Refeição" col="12"/>
                  <Input label="HORA" col="4"/>
                  <Input label="DATA" col="4"/>
                  <InputSelect label="ÍCONE" col="4"/>
                </div>
              </div>
              <div className="col-3 col-sm-1">
                <div class="doses-de-insulina-output">
                  <span>10</span>
                  <p class="subtitle">DOSES</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid cinza dinamic">
            <div className="row subrow" style={{maxWidth: "100%"}}>
              <SomatoriaAlimentos col="3 ponta-esq" subtitulo={'Alimento 1'} valor={'10'} soma={false}/>
              <SomatoriaAlimentos col="3" subtitulo={'Alimento 2'} valor={'13'} soma={true}/>
              <SomatoriaAlimentos col="3" subtitulo={'Alimento 3'} valor={'11'} soma={true}/>
              <SomatoriaAlimentos col="3 ponta-dir" subtitulo={'Alimento 4'} valor={'12'} soma={true}/>
            </div> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default withRouter(cadastrarRefeicao);
