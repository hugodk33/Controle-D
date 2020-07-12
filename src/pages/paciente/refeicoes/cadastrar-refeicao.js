import React from 'react';
import { connect, createSelectorHook, useSelector } from 'react-redux'
import { compose , bindActionCreators } from 'redux'
import Titulo from "../../templates/Titulo";
import TituloForm from "../../templates/TituloForm";
import Menu from "../../templates/MenuPaciente";
import Input from "../../templates/Inputs/Input";
import InputN from "../../templates/Inputs/InputN";
import InputSelect from "../../templates/Inputs/InputSelect";
import OrganizaLista from '../../templates/ItensListas/paginacao/organiza-lista';
import Bio from '../../templates/Bio';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import ItemAlimentoDiario from "../../templates/ItensListas/itemAlimentoDiario";
import Somatoria from "../../templates/Somatoria";
import ItemRefeicao from "../../templates/ItensListas/ItemRefeicao";
import NovoAlimento from "../../templates/ItensListas/novoAlimento";
import SubRowItem from "../../templates/ItensListas/SubRowItem";
import { withRouter } from 'react-router-dom';
import { Select } from '@material-ui/core';
import Button from "../../templates/Inputs/Btn";


import alimentosRefeicao from '../../jsons/alimentos-pacientes.json'

import {IconeFormAlimento, IconeFormAtributo , IconeFormMedico } from '../../templates/icons/icones-formulario'
import { IconeTituloAdicionarRefeicao } from '../../templates/icons/icones-navegacao'


const CadastrarRefeicao = (props, state) => {

  //const alimentosRefeicao = useSelector(state => state.AlimentosPacientes)
  //<NovoAlimento />
  //<InputSelect id="organizar-alimento" label="ORGANIZAR POR: " col="6 col-sm-4"/>

  return (
    <div>
      <div className="row main" style={{margin:"0"}}>
        <div className="col-12 col-sm-3 menu-lateral no-mobile">
          <div className="menu-hold">
            <Bio />
            <Menu ativo="cadastrar-refeicao"/>
          </div>
        </div>
        <div className="col-12 col-md-6 canvas-board"> 
          <div className="container">
            <div class="row">
              <div class="col-12 text-center">
                <IconeTituloAdicionarRefeicao />
                <Titulo titulo={"Cadastrar Refeição"}/>
              </div>
              <div className="col-12" style={{padding: "0"}}>
                <div className="row">
                  <TituloForm icone="refeicao" titulo={"Refeição"} />
                  <Input label="NOME DA REFEIÇÃO" col="12"/>
                  <Input label="HORA" col="4"/>
                  <Input label="DATA" col="4"/>
                  <InputSelect label="ÍCONE" col="4"/>
                </div>
              </div>
              <div className="col-12 col-sm-4"  style={{textAlign: "center", marginBottom: '12px', marginLeft: 'auto'}}>
                <Button icone={"adicionar-refeicao"} titulo={"CADASTRAR REFEIÇÃO"} />
              </div>
            </div>
            <div class="row">
              <TituloForm icone="medico" titulo={"Insulina"} />
              <Somatoria />
            </div>
            <NovoAlimento />
            <div class="row">
              <OrganizaLista />
              <PaginacaoBtn />
              <div class="col-md-12">
                <ul className="lista">
                  { 
                    alimentosRefeicao.map((a , b) => {
                      return <ItemAlimentoDiario key={b} data={a}/>
                    })
                  }
                </ul>
              </div>
              <PaginacaoBtn />
            </div>
          </div>
        </div>
        <div className="col-12 menu-mobile no-desktop">
          <div className="menu-hold">
            <Bio mobile={true} />
            <Menu ativo="cadastrar-refeicao"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CadastrarRefeicao);
