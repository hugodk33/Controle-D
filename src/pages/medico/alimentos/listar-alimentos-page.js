import React, { useState } from 'react';
import Titulo from "../../templates/Titulo";
import Input from '../../templates/Inputs/Input';
import ItemAlimento from '../../templates/ItensListas/ItemAlimento';

import { withRouter } from 'react-router-dom';

const ListarAlimento = (props, state) => {

  const [filter, setFilter] = useState('')

  const onChangeInputHandler = event => {
    if (event && event.target)
      setFilter(event.target.value)
  }


  return (
    <div className="col-12 col-md-6 canvas-board">
      <div className="container">
        <div className="row">
          <img className={"icone-topo"} src={require("../../templates/icons/buscar-alimento.svg")} />
        </div>
        <Titulo titulo="Alimentos" />
        <div className="row custom-form">
          <Input id="buscar-alimento" label="BUSCAR ALIMENTO" onChange={onChangeInputHandler} placeholder="digite o nome do alimento" type={"text"} col={9} />
          <div className="col-3 ponta">
            <button className="btn btn-primary ponta" onClick={_ => props.onClick(filter)}><i className="fa fa-spinner" /></button>
          </div>
        </div>
        <ul className="lista">
          {
            props.alimentos.map((a, b) => {
              return <ItemAlimento key={b} data={a} />
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default withRouter(ListarAlimento);
