import React from 'react';
import Bio from './Bio';

const OpcoesDeUsuario = (props) => {

    return (
        <div class="col-12 text-center opcoes-de-usuario" style={{height: "Calc(" + window.innerHeight + " - 90px)", display: "none"}}>
          <Bio />
        </div>
    )

};
    
export default OpcoesDeUsuario;