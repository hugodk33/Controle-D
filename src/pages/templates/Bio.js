import React from 'react';
import {IconeListaEngrenagem, IconeLogOut} from './icons/icones-botoes';

const Bio = (props) => {
    return (
        <div className={"Bio"} style={{marginRight: '14px'}}>
            <div className={"col-12 text-center"}>
                <a className="btn btn-paragraph" style={{maxWidth: '60px', backgroundColor: "rgb(93, 108, 188)", border: "none", marginLeft: '3px'}}><IconeLogOut /> Sair</a>
                <a className="btn btn-paragraph" style={{maxWidth: '60px', backgroundColor: "rgb(93, 108, 188)", border: "none"}}><IconeListaEngrenagem /> Editar</a>
                <br />
            </div>
            <div className={"col-12 text-center"}>
                <div className={"avatar-bio"}>
                </div>
                <h4>Nome do Fulano</h4>
                <hr />
                <h5>Médico</h5>
            </div>        
        </div>
    )
};

export default Bio;