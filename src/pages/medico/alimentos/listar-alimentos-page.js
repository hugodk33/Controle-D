import React, { useState, useEffect, useCallback } from 'react';
import { connect, createSelectorHook, useSelector, useDispatch } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputSelect from '../../templates/Inputs/InputSelect';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import alimentos from "../../jsons/alimentos";

import { IconeTituloBuscarAlimento } from '../../templates/icons/icones-navegacao'
import { IconeBuscar } from '../../templates/icons/icones-botoes'

import { withRouter } from 'react-router-dom';
import { setAlimentos } from './alimentos-reducers';
import { getAllAlimentos } from './alimentos-actions';

const ListarAlimento = (props, state) => {

  const {alimentos, isLoading} = useSelector(state => state.Alimentos)

  const [descricao, setDescricao] = useState("")
  const dispatch = useDispatch();

  const getAlimentos = async (descricao) => {
    await dispatch(getAllAlimentos(descricao));
  }

  const fetch = useCallback(async () => {
    await getAlimentos()
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <div>
      <div className="row main" style={{ margin: "0" }}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 canvas-board">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <IconeTituloBuscarAlimento />
                <Titulo titulo="Alimentos" />
              </div>
            </div>
            <div className="row custom-form">
              <Input id="buscar-alimento" onChange={event => setDescricao(event.target.value)} label="BUSCAR ALIMENTO"
                placeholder="digite o nome do alimento" type={"text"} col={9} />
              <div className="col-3 ponta">
                <button className="btn btn-primary ponta" disabled={isLoading} onClick={() => getAlimentos(descricao)}>
                  {!isLoading && <IconeBuscar isLoading={isLoading}/>}
                  {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                  </button>
              </div>
              <div className="row" style={{ backgroundColor: "rgb(247, 247, 247)", width: "100%", padding: "7px", margin: "0 5px" }}>
                <InputSelect id="organizar-alimento" label="ORGANIZAR POR: " col="6 col-sm-4 organizar" />
                <div className="col-6 col-sm-8">
                </div>
              </div>
            </div>
            <PaginacaoBtn />
            <ul className="lista">
              {
                alimentos.map((a, b) => {
                  return <ItemAlimento key={b} alimento={a} />
                })
              }
            </ul>
            <PaginacaoBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListarAlimento);
