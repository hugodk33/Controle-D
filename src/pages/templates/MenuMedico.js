import React from 'react';
import {IconeMenuBuscarPaciente  , IconeMenuBuscarAlimento , IconeMenuAdicionarPaciente, IconeMenuAdicionarRefeicao , IconeMobileMenuBuscarPaciente  , IconeMobileMenuBuscarAlimento , IconeMobileMenuAdicionarPaciente, IconeMobileMenuAdicionarRefeicao , IconeSetaDeskTop , IconeSetaMobile } from './icons/icones-navegacao'
import { Link } from 'react-router-dom';
import {IconeMobileMenuBio} from './icons/icones-navegacao';

const MenuMedico = (props) => {
    console.log('props.ativo')
    console.log(props.ativo)
    console.log(props.ativo === "cadastrar-paciente")
    return (
        <div className={"menu"}>
            <ul>
                { 
                props.bio?   
                <li>
                    <button className={props.ativo === "Bio" ? "btn btn-ativo" : null }>
                        <IconeSetaMobile />
                        <IconeMobileMenuBio />
                        <span>OPÇÕES DE USUÁRIO</span>
                    </button>
                </li>
                : null 
                }
                <li> 
                    <Link to="/medico/alimentos/cadastrar-alimento">
                        <button className={props.ativo === "cadastrar-alimento" ? "btn-ativo" : null} type="button " >
                            <IconeSetaDeskTop />
                            <IconeMenuAdicionarRefeicao />
                            <IconeSetaMobile />
                            <IconeMobileMenuAdicionarRefeicao /><span> CADASTRAR ALIMENTO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/alimentos/listar-alimento">
                        <button className={props.ativo === "listar-alimento" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarAlimento /> 
                            <IconeSetaMobile />
                            <IconeMobileMenuBuscarAlimento /> <span> BUSCAR ALIMENTO </span> 
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/cadastrar-paciente">
                        <button className={props.ativo === "cadastrar-paciente" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuAdicionarPaciente />
                            <IconeSetaMobile />
                            <IconeMobileMenuAdicionarPaciente /><span> CADASTRAR PACIENTE </span>                        
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/listar-paciente">
                        <button className={props.ativo === "listar-paciente" ? "btn-ativo" : null} type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarPaciente />
                            <IconeSetaMobile />
                            <IconeMobileMenuBuscarPaciente /><span>  BUSCAR PACIENTE </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuMedico;
