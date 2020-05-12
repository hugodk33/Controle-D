import React from 'react';
import { connect, createSelectorHook, useSelector } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuPaciente";
import Input from "../../templates/Inputs/Input";
import InputN from "../../templates/Inputs/InputN";
import InputSelect from "../../templates/Inputs/InputSelect";
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import ItemAlimentoDiario from "../../templates/ItensListas/itemAlimentoDiario";
import SomatoriaAlimentos from "../../templates/SomatoriaAlimentos";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import NovoAlimento from "../../templates/ItensListas/novoAlimento";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';

import alimentosRefeicao from '../../jsons/alimentos-pacientes.json'

import { IconeTituloAdicionarRefeicao } from '../../templates/icons/icones-navegacao'

const CadastrarRefeicao = (props, state) => {

  //const alimentosRefeicao = useSelector(state => state.AlimentosPacientes)

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 canvas-board"> 
          <div className="container">
            <div class="row">
              <div class="col-12 text-center">
                <IconeTituloAdicionarRefeicao />
                <Titulo titulo={"Cadastrar Refeição"}/>
              </div>
              <div className="col-12" style={{padding: "0"}}>
                <div className="row" style={{margin: "0 4px"}}>
                  <Input label="NOME DA REFEIÇÃO" col="12"/>
                  <Input label="HORA" col="4"/>
                  <Input label="DATA" col="4"/>
                  <InputSelect label="ÍCONE" col="4"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 dinamic" style={{marginBottom: "10px"}}>
                <div className="row subrow" style={{maxWidth: "100%", backgroundColor: "rgb(247, 247, 247)"}}>
                  <SomatoriaAlimentos col="3 ponta-esq" subtitulo={'Alimento 1'} valor={'10'} soma={false}/>
                  <SomatoriaAlimentos col="3" subtitulo={'Alimento 2'} valor={'13'} soma={true}/>
                  <SomatoriaAlimentos col="3" subtitulo={'Alimento 3'} valor={'11'} soma={true}/>
                  <SomatoriaAlimentos col="3 ponta-dir" subtitulo={'Alimento 4'} valor={'12'} soma={true}/>
                </div> 
              </div>
              <div className="col-md-2" style={{padding: "0"}}>
                <div class="doses-de-insulina-output">
                  <span>10</span>
                  <p class="subtitle">DOSES</p>
                </div>
              </div>
            </div>
            <InputSelect id="organizar-alimento" label="ORGANIZAR POR: " col="6 col-sm-4"/>
            <div class="col-md-12">
              <ul className="lista">
                { 
                  alimentosRefeicao.map((a , b) => {
                    return <ItemAlimentoDiario key={b} data={a}/>
                  })
                }
              </ul>
              <NovoAlimento />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CadastrarRefeicao);
