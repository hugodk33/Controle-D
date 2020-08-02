import React from 'react';
import { IconeMenuBuscarMedico , IconeMenuBuscarRefeicoes , IconeMenuAdicionarRefeicao ,  IconeSetaDeskTop , IconeMobileMenuBuscarMedico , IconeMobileMenuBuscarRefeicoes , IconeMobileMenuAdicionarRefeicao , IconeSetaMobile } from './icons/icones-navegacao';
import { Link } from 'react-router-dom';
import {IconeMobileMenuBio} from './icons/icones-navegacao';

const MenuPaciente = (props) => {

    return (
        <div className={"menu"}  style={{minHeight: window.innerHeight}}>
            <ul>
                { props.bio?   
                <li> 
                    <button className={props.ativo === "Bio" ? "btn btn-ativo" : null }>
                        <IconeSetaMobile />
                        <IconeMobileMenuBio />
                        <span>OPÇÕES DE USUÁRIO</span>
                    </button>
                </li>
                : null }
                <li> 
                    <Link to="/paciente/refeicoes/cadastrar-refeicao">
                        <button className={props.ativo === "cadastrar-refeicao" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuAdicionarRefeicao />
                            <IconeSetaMobile />
                            <IconeMobileMenuAdicionarRefeicao /><span> CADASTRAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/refeicoes/buscar-refeicao">
                        <button className={props.ativo === "listar-refeicao" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarRefeicoes />
                            <IconeSetaMobile />
                            <IconeMobileMenuBuscarRefeicoes /><span> BUSCAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/medicos/buscar-medicos">
                        <button className={props.ativo === "listar-medico" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarMedico />
                            <IconeSetaMobile />
                            <IconeMobileMenuBuscarMedico /><span> PROCURAR MÉDICO  </span>                        
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuPaciente;
