import React from 'react';
import {IconeMenuBuscarPaciente , IconeMenuBuscarMedico , IconeMenuBuscarRefeicoes , IconeMenuBuscarAlimento , IconeMenuAdicionarPaciente, IconeMenuAdicionarRefeicao, IconeMenuAdicionarAlimento} from './icons/icones-navegacao'
import { Link } from 'react-router-dom'

import Icones from './icons/icones'

const MenuMedico = (props) => {
    function funct(e) {
        console.log(e)
    }
    return (
        <div className={"menu menu-lateral"}>
            <ul>
                <li> 
                    <Link to="/medico/alimentos/cadastrar-alimento">
                        <button type="button" onClick={() => funct(this)}>
                            <IconeMenuAdicionarRefeicao /><span> CADASTRAR ALIMENTO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/alimentos/listar-alimento">
                        <button type="button">
                            <IconeMenuBuscarAlimento /> <span> BUSCAR ALIMENTO </span> 
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/cadastrar-paciente">
                        <button type="button">
                            <IconeMenuAdicionarPaciente /><span> CADASTRAR PACIENTE </span>                        
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/listar-paciente">
                        <button type="button">
                            <IconeMenuBuscarPaciente /><span>  BUSCAR PACIENTE </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuMedico;
