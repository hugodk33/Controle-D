import React, { useState } from 'react';
import Titulo from '../../templates/Titulo';
import Menu from '../../templates/MenuMedico';
//import Container from '../../templates/Container';
import Input from '../../templates/Inputs/Input';
import InputN from '../../templates/Inputs/InputN';
import InputSelect from '../../templates/Inputs/InputSelect';
import { withRouter } from 'react-router-dom';
import { addFood } from './alimentos-actions';
import { useDispatch } from 'react-redux';

const CadastrarAlimento = (props, state) => {

  let dispatch = useDispatch()

  const [alimento, setAlimento] = useState({
    descricao: '',
    sodio: 0,
    carbohidrato: 0,
    potassio: 0,
    proteina: 0,
    fibra: 0
  })

  const onChangeInputHandler = event => {
    var _alimento = { ...alimento }
    _alimento[event.target.name] = event.target.value
    setAlimento(_alimento)
  }

  const submitForm = _ => {
    addFood(alimento,dispatch);
  }

  return (
    <div>
      <div className="row main" style={{ margin: "0" }}>
        <div className="col-12 col-sm-3 menu-lateral">
          <Menu />
        </div>
        <div className="col-12 col-md-6 canvas-board">
          <div className="container">
            <div className="row">
              <img className={"icone-topo"} src={require("../../templates/icons/cadastrar-alimento.svg")} />
            </div>
            <Titulo titulo="Cadastrar Alimento" />
            <div className="row custom-form">
              <div className={"col-12"}><h5 className="titulo-3"><img className={"icone-form"} src={require("../../templates/icons/alimento-form-icon.svg")} /> ALIMENTO </h5></div>
              <Input id="nome-do-alimento" label="NOME DO ALIMENTO" name="descricao" value={alimento.descricao} onChange={onChangeInputHandler} placeholder="Nome do Alimento" type={"text"} col={"12"} />
              <InputSelect id="porcao" label="PORÇÃO" placeholder="" type="text" col={"6 col-sm-9"} />
              <InputSelect id="icone" label="ÍCONE" placeholder="" type="text" col={"6 col-sm-3"} />
              <div className={"col-12"}><h5 className="titulo-3"><img className={"icone-form"} src={require("../../templates/icons/paciente-form-icon.svg")} />   MEDICÍNA </h5></div>
              <InputSelect id="insulina" label="INSULÍNA" placeholder="" type={"text"} col={"6"} />
              <InputSelect id="risco" label="RISCO" placeholder="" type={"text"} col={"6"} />
              <div className={"col-12"}><h5 className="titulo-3"><img className={"icone-form"} src={require("../../templates/icons/atributo-form-icon.svg")} /> ATRIBUTOS </h5></div>
              <InputN id="calorias" label="SODIO" placeholder="" name="sodio" value={alimento.sodio} onChange={onChangeInputHandler} type={"text"} col={"4 col-sm-3"} />
              <InputN id="carboidratos" label="CARBO" placeholder="" type={"text"} col={"4 col-sm-3"} name="carbohidrato" value={alimento.carbohidrato} onChange={onChangeInputHandler} />
              <InputN id="fibra" label="FIBRA" placeholder="" type={"text"} col={"4 col-sm-3"} name="fibra" value={alimento.fibra} onChange={onChangeInputHandler} />
              <InputN id="proteina" label="PROTEÍNA" placeholder="" type={"text"} col={"4 col-sm-3"} name="proteina" value={alimento.proteina} onChange={onChangeInputHandler} />
              <InputN id="gordura" label="POTASSIO" placeholder="" type={"text"} col={"4 col-sm-3"} name="potassio" value={alimento.potassio} onChange={onChangeInputHandler} />
            </div>
          </div>
          <div className="container-fluid faixa cinza">
            <div className="container">
              <div className="row" style={{ margin: "0" }}>
                <div className="col-12 " style={{ padding: "0" }}>
                  <button className="btn btn-primary" onClick={submitForm}> CADASTRAR </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CadastrarAlimento);
