import React from 'react';
import {IconeListaEngrenagem} from './icons/icones-botoes';
import {IconeMobileMenuBio} from './icons/icones-navegacao';

const Bio = (props) => {

    if(props.mobile) {
        return (
            <button class="btn btn-bio">
                <IconeMobileMenuBio />
                <br />
                <span style={{marginTop: "12px"}}>OPÇÕES DE USUÁRIO</span>
            </button>
        )
    } else {
        return (
            <div className={"Bio"} style={{marginRight: '14px'}}>
                <div className={"col-12 text-center"}>
                    <div className={"avatar-bio"}>
                    </div>
                    <h4>Nome do Fulano</h4>
                    <hr />
                    <h5>Médico</h5>
                    <a className="btn btn-paragraph" style={{maxWidth: '60px', border: '1px solid white'}}><IconeListaEngrenagem /> Editar</a>
                </div>        
            </div>
        )
    }
};

export default Bio;