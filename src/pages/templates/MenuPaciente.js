import React from 'react';
import { IconeMenuBuscarMedico , IconeMenuBuscarRefeicoes , IconeMenuAdicionarRefeicao } from './icons/icones-navegacao'
import { Link } from 'react-router-dom'

const MenuPaciente = (props) => {

    return (
        <div className={"menu menu-lateral"}  style={{minHeight: window.innerHeight}}>
            <ul>
                <li> 
                    <Link to="/paciente/refeicoes/cadastrar-refeicao">
                        <button type="button">
                            <IconeMenuAdicionarRefeicao /><span> CADASTRAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/refeicoes/buscar-refeicao">
                        <button type="button">
                            <IconeMenuBuscarRefeicoes /><span> BUSCAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/medicos/buscar-medicos">
                        <button type="button">
                            <IconeMenuBuscarMedico /><span> PROCURAR MÉDICO  </span>                        
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuPaciente;
