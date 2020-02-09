import React from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {

    return (
        <div className={"menu menu-lateral"}>
            <ul>
                <li> 
                    <Link to="/medico/alimentos/cadastrar-alimento">
                        <button type="button">
                            <img src={require("./icons/cadastrar-alimento.svg")} /><span> CADASTRAR ALIMENTO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/alimentos/listar-alimento">
                        <button type="button">
                            <img src={require("./icons/buscar-alimento.svg")} /><span> BUSCAR ALIMENTO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/cadastrar-paciente">
                        <button type="button">
                            <img src={require("./icons/cadastrar-paciente.svg")} /><span> CADASTRAR PACIENTE </span>                        
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/listar-paciente">
                        <button type="button">
                         <img src={require("./icons/buscar-paciente-2.svg")} /><span> BUSCAR PACIENTE </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Menu;
