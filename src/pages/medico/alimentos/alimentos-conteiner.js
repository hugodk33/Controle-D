import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getFoods } from './alimentos-actions'

import Titulo from "../../templates/Titulo";
import Menu from "../../templates/Menu";
import Input from '../../templates/Inputs/Input';

import { withRouter } from 'react-router-dom';
import ListarAlimento from './listar-alimentos-page';

const AlimentosConteiner = (props, state) => {

    const alimentos = useSelector(store => store.Alimento.alimentos)
    const dispatch = useDispatch()

    useEffect(() => {
        getFoods(dispatch)
    },[alimentos.length]);

    const onClick = _ => {
        getFoods(dispatch)
    }

    return (
        <div>
            <div className="row main" style={{ margin: "0" }}>
                <div className="col-12 col-sm-3 menu-lateral">
                    <Menu />
                </div>
                <ListarAlimento alimentos={alimentos} onClick={onClick}></ListarAlimento>
            </div>
        </div>
    );
}

export default withRouter(AlimentosConteiner);
