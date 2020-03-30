import React from 'react';
import { Link } from 'react-router-dom'

const MenuPaciente = (props) => {

    return (
        <div className={"menu menu-lateral"}  style={{minHeight: window.innerHeight}}>
            {console.log('window.innerHeight')}
            {console.log(window.innerHeight)}
            <ul>
                <li> 
                    <Link to="/paciente/refeicoes/cadastrar-refeicao">
                        <button type="button">
                            <img src={require("./icons/cadastrar-alimento-menu.svg")} /><span> CADASTRAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/refeicoes/buscar-refeicao">
                        <button type="button">
                            <img src={require("./icons/buscar-alimento-menu.svg")} /><span> BUSCAR REFEIÇÃO </span>
                        </button>
                    </Link>
                </li>
                <li> 
                    <Link to="/paciente/medicos/buscar-medicos">
                        <button type="button">
                            <img src={require("./icons/buscar-paciente-menu.svg")} /><span> PROCURAR MÉDICO  </span>                        
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default MenuPaciente;
