import React from 'react';
import {IconeMenuBuscarPaciente , IconeMenuBuscarMedico , IconeMenuBuscarRefeicoes , IconeMenuBuscarAlimento , IconeMenuAdicionarPaciente, IconeMenuAdicionarRefeicao, IconeMenuAdicionarAlimento , IconeSetaDeskTop , IconeSetaMobile} from './icons/icones-navegacao'
import { Link } from 'react-router-dom'

const MenuMedico = (props) => {
    console.log('props.ativo')
    console.log(props.ativo)
    console.log(props.ativo === "cadastrar-paciente")
    return (
        <div className={"row menu menu-lateral"}>
            <ul>
                <li> 
                    <Link to="/medico/alimentos/cadastrar-alimento">
                        <button className="btn-ativo" type="button " >
                            <IconeSetaDeskTop />
                            <IconeMenuAdicionarRefeicao /><span> CADASTRAR ALIMENTO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/alimentos/listar-alimento">
                        <button type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarAlimento /> <span> BUSCAR ALIMENTO </span> 
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/cadastrar-paciente">
                        <button type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuAdicionarPaciente /><span> CADASTRAR PACIENTE </span>                        
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/listar-paciente">
                        <button type="button">
                            <IconeSetaDeskTop />
                            <IconeMenuBuscarPaciente /><span>  BUSCAR PACIENTE </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuMedico;
