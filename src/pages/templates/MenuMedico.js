import React from 'react';
import {IconeMenuBuscarPaciente  , IconeMenuBuscarAlimento , IconeMenuAdicionarPaciente, IconeMenuAdicionarRefeicao , IconeMobileMenuBuscarPaciente  , IconeMobileMenuBuscarAlimento , IconeMobileMenuAdicionarPaciente, IconeMobileMenuAdicionarRefeicao , IconeSetaDeskTop , IconeSetaMobile } from './icons/icones-navegacao'
import { Link } from 'react-router-dom'

const MenuMedico = (props) => {
    console.log('props.ativo')
    console.log(props.ativo)
    console.log(props.ativo === "cadastrar-paciente")
    return (
        <div className={"menu"}>
            <ul>
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
