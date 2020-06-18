import React, { useEffect, useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/MenuMedico";
import Input from '../../templates/Inputs/Input';
import InputSelect from '../../templates/Inputs/InputSelect';
import ItemPaciente from '../../templates/ItensListas/ItemPaciente';
import PaginacaoBtn from '../../templates/ItensListas/paginacao/marcadores-de-paginacao';
import pacientes from "../../jsons/pacientes"

import { IconeTituloBuscarPaciente } from '../../templates/icons/icones-navegacao'
import Button from "../../templates/Inputs/Btn";
import OrganizaLista from '../../templates/ItensListas/paginacao/organiza-lista';
import {IconeBuscar} from '../../templates/icons/icones-botoes'

import { withRouter } from 'react-router-dom';
import { getAllPacientes } from './pacientes-action';

const ListarPacientes = (props) => {

  const { pacientes, isLoading } = useSelector(state => state.Pacientes)

  const [nome, setNome] = useState("")

  const dispatch = useDispatch();

  const getPacientes = async (nome) => {
    await dispatch(getAllPacientes(nome));
  }

  const fetch = useCallback(async () => {
    await getPacientes()
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
                <IconeTituloBuscarPaciente />
                <Titulo titulo="Pacientes" />
              </div>
            </div>
          </div>
          <div className="row">
            <Input id="buscar-paciente" onChange={event => setNome(event.target.value)} label="BUSCAR PACIENTE" placeholder="digite o nome do paciente" type={"text"} col="9" />
            <div className="col-3">
              <Button  onClick={() => getPacientes(nome)}  icone={"buscar-paciente"} isLoading={isLoading} titulo={"BUSCAR PACIENTE"} />
            </div>
          </div>
          <OrganizaLista />
          <PaginacaoBtn label="ORDENAR POR"/>
          <ul className="lista">
            { 
              pacientes.map((a , b) => {
                return <ItemPaciente key={b} data={a}/>
              })
            }
          </ul>
          <PaginacaoBtn />
        </div>
      </div>
    </div>

  );
};

export default withRouter(ListarPacientes);

