import React from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {

    return (
        <div className={"menu"}>
            <ul>
                <li> 
                    <Link to="/medico/alimentos/cadastrar-alimento">
                        <button type="button">
                            <i className="fa fa-spinner"/> CADASTRAR ALIMENTO
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/alimentos/listar-alimento">
                        <button type="button">
                            <i className="fa fa-spinner"/> BUSCAR ALIMENTO
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/cadastrar-paciente">
                        <button type="button">
                            <i className="fa fa-spinner"/> CADASTRAR PACIENTE
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/medico/pacientes/listar-paciente">
                        <button type="button">
                            <i className="fa fa-spinner"/> BUSCAR PACIENTE
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Menu;
